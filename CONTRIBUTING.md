# Contributing to Marcela Jacon Academy

Thank you for your interest in contributing to Marcela Jacon Academy! We're building a trustable mentorship platform, and we welcome contributions that help us achieve that goal.

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it before contributing.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce**
- **Expected behavior**
- **Actual behavior**
- **Environment details** (OS, Node version, browser, etc.)
- **Screenshots** (if applicable)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- **Clear title and description**
- **Use case** - Why is this enhancement needed?
- **Proposed solution**
- **Alternatives considered**

### Security Vulnerabilities

**Do not** create public issues for security vulnerabilities. Instead:

1. Email security@marcelajacon.academy
2. Include details about the vulnerability
3. Wait for acknowledgment before public disclosure

See [SECURITY.md](SECURITY.md) for more details.

### Pull Requests

1. **Fork the repository**
2. **Create a branch** from `main`
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
   - Follow the code style guidelines
   - Add tests for new features
   - Update documentation
4. **Run tests and linters**
   ```bash
   # Backend
   cd backend
   npm run lint
   npm test
   
   # Frontend
   cd frontend
   npm run lint
   npm test
   ```
5. **Commit your changes**
   - Use clear, descriptive commit messages
   - Reference issues when applicable
   ```
   feat: Add mentor verification badge component

   - Creates reusable VerificationBadge component
   - Displays verification status on mentor profiles
   - Adds tooltip with verification details

   Closes #123
   ```
6. **Push to your fork**
7. **Create a Pull Request**
   - Provide a clear description
   - Link related issues
   - Include screenshots for UI changes
   - List breaking changes (if any)

## Development Guidelines

### Code Style

#### TypeScript/JavaScript

- Use TypeScript for type safety
- Follow ESLint configuration
- Use meaningful variable names
- Add comments for complex logic
- Keep functions small and focused

```typescript
// Good
async function authenticateUser(credentials: LoginCredentials): Promise<AuthResult> {
  // Validate credentials
  if (!isValidEmail(credentials.email)) {
    throw new Error('Invalid email format');
  }
  
  // ... rest of implementation
}

// Avoid
async function auth(c: any): Promise<any> {
  // Implementation
}
```

#### React Components

- Use functional components with hooks
- Keep components focused and reusable
- Use TypeScript for props
- Extract complex logic into custom hooks

```typescript
// Good
interface UserProfileProps {
  userId: string;
  showEmail?: boolean;
}

const UserProfile: React.FC<UserProfileProps> = ({ userId, showEmail = false }) => {
  // Implementation
};

// Avoid
const UserProfile = (props) => {
  // Implementation
};
```

#### CSS

- Use modular CSS files per component
- Follow BEM naming convention (optional)
- Use CSS variables for theming
- Keep styles scoped to components

### Git Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

Examples:
```
feat: Add email verification system
fix: Correct password validation regex
docs: Update API documentation for auth endpoints
style: Format code with Prettier
refactor: Extract authentication logic to service
test: Add tests for mentor verification
chore: Update dependencies
```

### Testing

- Write tests for new features
- Maintain or improve code coverage
- Test edge cases and error handling
- Use descriptive test names

```typescript
describe('AuthService', () => {
  describe('register', () => {
    it('should create a new user with valid credentials', async () => {
      // Test implementation
    });

    it('should throw error for duplicate email', async () => {
      // Test implementation
    });

    it('should hash password with bcrypt', async () => {
      // Test implementation
    });
  });
});
```

### Documentation

- Update README.md for new features
- Document API endpoints
- Add JSDoc comments for complex functions
- Update user guides when changing UX

### Security Considerations

When contributing, always consider:

- **Input validation** - Validate and sanitize all inputs
- **Authentication** - Protect sensitive routes
- **Authorization** - Check user permissions
- **Data exposure** - Don't leak sensitive information
- **Dependencies** - Keep dependencies updated
- **SQL injection** - Use parameterized queries (Prisma handles this)
- **XSS prevention** - React handles this, but be careful with dangerouslySetInnerHTML
- **CSRF protection** - Use proper tokens for state-changing operations

### Privacy Considerations

- Minimize data collection
- Respect user privacy settings
- Handle personal data according to GDPR/CCPA
- Don't log sensitive information
- Implement proper data retention policies

## Project Structure

```
MarcelaJaconAcademy/
├── backend/          # Node.js/Express API
│   ├── src/
│   │   ├── config/   # Configuration
│   │   ├── middleware/ # Express middleware
│   │   ├── routes/   # API routes
│   │   ├── services/ # Business logic
│   │   └── utils/    # Utilities
│   └── prisma/       # Database schema
├── frontend/         # React frontend
│   └── src/
│       ├── components/ # React components
│       ├── pages/    # Page components
│       ├── services/ # API clients
│       └── utils/    # Utilities
└── docs/            # Documentation
```

## Getting Help

- **Documentation**: Check README.md and docs/
- **Issues**: Search existing issues
- **Discussions**: Use GitHub Discussions for questions
- **Email**: support@marcelajacon.academy

## Recognition

Contributors will be:
- Added to CONTRIBUTORS.md
- Mentioned in release notes (for significant contributions)
- Credited in the project

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

## Questions?

Feel free to:
- Open an issue for clarification
- Ask in GitHub Discussions
- Email: support@marcelajacon.academy

Thank you for helping us build a trustable mentorship platform! 🚀
