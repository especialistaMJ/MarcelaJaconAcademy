# Marcela Jacon Academy - Frontend

A modern, trustable mentorship platform frontend built with React, TypeScript, and Vite.

## 🚀 Features

- **Modern Stack**: React 18, TypeScript, Vite
- **Trust-First Design**: Prominently displays trust and safety features
- **Responsive**: Mobile-friendly design
- **Fast**: Vite for lightning-fast development
- **Type-Safe**: Full TypeScript support

## 🏃 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Visit http://localhost:3001
```

### Development

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint

# Fix linting issues
npm run lint:fix

# Run tests
npm test
```

## 📁 Project Structure

```
frontend/
├── public/          # Static assets
├── src/
│   ├── components/  # Reusable components
│   ├── pages/       # Page components
│   ├── services/    # API services
│   ├── types/       # TypeScript types
│   ├── utils/       # Utility functions
│   ├── App.tsx      # Main app component
│   ├── main.tsx     # Entry point
│   └── index.css    # Global styles
├── index.html       # HTML template
└── vite.config.ts   # Vite configuration
```

## 🎨 Design Principles

### Trust & Safety First

The UI prominently features:
- Verified mentor badges
- Security indicators
- Transparent review system
- Clear safety information
- Trust badges and certifications

### User Experience

- **Clear Navigation**: Easy to find mentors and information
- **Responsive Design**: Works on all devices
- **Accessible**: Following accessibility best practices
- **Performance**: Fast loading and smooth interactions

## 🔗 API Integration

The frontend connects to the backend API at `http://localhost:3000` (configurable via Vite proxy).

### Example API Call

```typescript
import axios from 'axios';

const api = axios.create({
  baseURL: '/api/v1',
});

// Login
const login = async (email: string, password: string) => {
  const response = await api.post('/auth/login', { email, password });
  return response.data;
};
```

## 🎯 Key Pages

- **Home Page**: Landing page with trust features and CTA
- **Find Mentors**: Browse and search verified mentors
- **Mentor Profile**: View credentials, reviews, and book sessions
- **Dashboard**: User dashboard for managing sessions
- **Safety Center**: Trust and safety information

## 🔒 Security Features

- XSS prevention through React's built-in protection
- Secure API communication
- Input validation
- HTTPS in production
- Content Security Policy headers

## 🌐 Environment Variables

Create a `.env` file:

```
VITE_API_URL=http://localhost:3000
```

## 🧪 Testing

```bash
# Run unit tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with UI
npm run test:ui
```

## 📦 Building for Production

```bash
# Build
npm run build

# The dist/ directory contains the production build
```

## 🚀 Deployment

The built files in `dist/` can be deployed to:
- Vercel
- Netlify
- AWS S3 + CloudFront
- Any static hosting service

## 📱 Progressive Web App (PWA)

The app is configured as a PWA with:
- Service worker for offline support
- Manifest for installability
- Optimized caching strategies

## 🎨 Styling

- CSS Variables for theming
- Modular CSS files per component
- Responsive design with mobile-first approach
- Consistent design system

## 🔧 Configuration

### Vite Configuration

```typescript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
});
```

### TypeScript Configuration

Strict mode enabled for maximum type safety.

## 📚 Resources

- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Vite Documentation](https://vitejs.dev/)

## 🆘 Support

For issues or questions:
- Email: support@marcelajacon.academy
- GitHub Issues: [Link to issues]

---

Built with trust and safety as core principles.
