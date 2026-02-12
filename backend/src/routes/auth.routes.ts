import { Router, Request, Response } from 'express';
import { body } from 'express-validator';
import { AuthService } from '../services/auth.service';
import { validate, isStrongPassword } from '../middleware/validation.middleware';
import { authenticate } from '../middleware/auth.middleware';

const router = Router();
const authService = new AuthService();

/**
 * POST /api/v1/auth/register
 * Register a new user
 */
router.post(
  '/register',
  validate([
    body('email')
      .isEmail()
      .normalizeEmail()
      .withMessage('Valid email is required'),
    body('username')
      .isLength({ min: 3, max: 30 })
      .matches(/^[a-zA-Z0-9_-]+$/)
      .withMessage('Username must be 3-30 characters and contain only letters, numbers, underscores, and hyphens'),
    body('password')
      .custom((value) => {
        if (!isStrongPassword(value)) {
          throw new Error(
            'Password must be at least 12 characters long and contain uppercase, lowercase, number, and special character'
          );
        }
        return true;
      }),
    body('firstName')
      .trim()
      .isLength({ min: 1, max: 50 })
      .withMessage('First name is required (max 50 characters)'),
    body('lastName')
      .trim()
      .isLength({ min: 1, max: 50 })
      .withMessage('Last name is required (max 50 characters)'),
    body('role')
      .optional()
      .isIn(['MENTEE', 'MENTOR'])
      .withMessage('Role must be MENTEE or MENTOR'),
  ]),
  async (req: Request, res: Response): Promise<void> => {
    try {
      const result = await authService.register(req.body);
      res.status(201).json({
        message: 'Registration successful',
        user: result.user,
        accessToken: result.tokens.accessToken,
        refreshToken: result.tokens.refreshToken,
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Registration failed' });
      }
    }
  }
);

/**
 * POST /api/v1/auth/login
 * Login user
 */
router.post(
  '/login',
  validate([
    body('email')
      .isEmail()
      .normalizeEmail()
      .withMessage('Valid email is required'),
    body('password')
      .notEmpty()
      .withMessage('Password is required'),
  ]),
  async (req: Request, res: Response): Promise<void> => {
    try {
      const result = await authService.login(req.body);
      res.json({
        message: 'Login successful',
        user: result.user,
        accessToken: result.tokens.accessToken,
        refreshToken: result.tokens.refreshToken,
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(401).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Login failed' });
      }
    }
  }
);

/**
 * POST /api/v1/auth/refresh
 * Refresh access token
 */
router.post(
  '/refresh',
  validate([
    body('refreshToken')
      .notEmpty()
      .withMessage('Refresh token is required'),
  ]),
  async (req: Request, res: Response): Promise<void> => {
    try {
      const tokens = await authService.refreshToken(req.body.refreshToken);
      res.json({
        message: 'Token refreshed',
        accessToken: tokens.accessToken,
        refreshToken: tokens.refreshToken,
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(401).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Token refresh failed' });
      }
    }
  }
);

/**
 * POST /api/v1/auth/logout
 * Logout user
 */
router.post(
  '/logout',
  authenticate,
  validate([
    body('refreshToken')
      .notEmpty()
      .withMessage('Refresh token is required'),
  ]),
  async (req: Request, res: Response): Promise<void> => {
    try {
      await authService.logout(req.body.refreshToken);
      res.json({ message: 'Logout successful' });
    } catch (error) {
      res.status(500).json({ error: 'Logout failed' });
    }
  }
);

/**
 * GET /api/v1/auth/me
 * Get current user info
 */
router.get(
  '/me',
  authenticate,
  async (req: any, res: Response): Promise<void> => {
    try {
      const { PrismaClient } = await import('@prisma/client');
      const prisma = new PrismaClient();
      
      const user = await prisma.user.findUnique({
        where: { id: req.user.id },
        select: {
          id: true,
          email: true,
          username: true,
          firstName: true,
          lastName: true,
          role: true,
          profilePhoto: true,
          bio: true,
          createdAt: true,
          emailVerified: true,
          mfaEnabled: true,
        },
      });

      if (!user) {
        res.status(404).json({ error: 'User not found' });
        return;
      }

      res.json({ user });
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch user info' });
    }
  }
);

export default router;
