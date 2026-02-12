#!/bin/bash

# Marcela Jacon Academy - Setup Script
# This script helps you set up the development environment

set -e  # Exit on error

echo "🚀 Setting up Marcela Jacon Academy..."
echo ""

# Check Node.js version
echo "Checking Node.js version..."
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Error: Node.js 18 or higher is required"
    echo "   Current version: $(node -v)"
    exit 1
fi
echo "✓ Node.js version OK: $(node -v)"
echo ""

# Check if PostgreSQL is available
echo "Checking PostgreSQL..."
if command -v psql &> /dev/null; then
    echo "✓ PostgreSQL is installed"
else
    echo "⚠️  PostgreSQL not found. Please install PostgreSQL 14+ to continue."
    echo "   Visit: https://www.postgresql.org/download/"
fi
echo ""

# Backend setup
echo "📦 Setting up backend..."
cd backend

if [ ! -f ".env" ]; then
    echo "Creating .env file from template..."
    cp .env.example .env
    echo "⚠️  Please edit backend/.env with your database credentials"
    echo ""
fi

echo "Installing backend dependencies..."
npm install
echo "✓ Backend dependencies installed"
echo ""

# Generate Prisma Client
echo "Generating Prisma client..."
npx prisma generate
echo "✓ Prisma client generated"
echo ""

cd ..

# Frontend setup
echo "📦 Setting up frontend..."
cd frontend

echo "Installing frontend dependencies..."
npm install
echo "✓ Frontend dependencies installed"
echo ""

cd ..

# Final instructions
echo "✅ Setup complete!"
echo ""
echo "📝 Next steps:"
echo ""
echo "1. Configure your database:"
echo "   - Edit backend/.env with your PostgreSQL connection string"
echo "   - Example: DATABASE_URL=\"postgresql://user:password@localhost:5432/marcela_jacon_academy\""
echo ""
echo "2. Run database migrations:"
echo "   cd backend"
echo "   npm run migrate"
echo ""
echo "3. Start the development servers:"
echo ""
echo "   Terminal 1 (Backend):"
echo "   cd backend"
echo "   npm run dev"
echo ""
echo "   Terminal 2 (Frontend):"
echo "   cd frontend"
echo "   npm run dev"
echo ""
echo "4. Open your browser:"
echo "   http://localhost:3001"
echo ""
echo "📚 Documentation:"
echo "   - README.md - Project overview"
echo "   - SECURITY.md - Security policies"
echo "   - PRIVACY.md - Privacy policies"
echo "   - CODE_OF_CONDUCT.md - Community standards"
echo "   - docs/ - User and mentor guides"
echo ""
echo "🆘 Need help? support@marcelajacon.academy"
echo ""
