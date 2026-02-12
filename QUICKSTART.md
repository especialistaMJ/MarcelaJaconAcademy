# Quick Start Guide

Get Marcela Jacon Academy running in 5 minutes!

## Prerequisites

- Node.js 18+ ([Download](https://nodejs.org/))
- PostgreSQL 14+ ([Download](https://www.postgresql.org/download/))
- Git

## 1. Clone the Repository

```bash
git clone https://github.com/especialistaMJ/MarcelaJaconAcademy.git
cd MarcelaJaconAcademy
```

## 2. Automated Setup (Recommended)

Run the setup script:

```bash
./setup.sh
```

This will install all dependencies for both backend and frontend.

## 3. Configure Database

Edit `backend/.env`:

```env
DATABASE_URL="postgresql://YOUR_USERNAME:YOUR_PASSWORD@localhost:5432/marcela_jacon_academy"
```

Replace `YOUR_USERNAME` and `YOUR_PASSWORD` with your PostgreSQL credentials.

## 4. Create Database

```bash
# Create the database
createdb marcela_jacon_academy

# Or using psql
psql -U postgres
CREATE DATABASE marcela_jacon_academy;
\q
```

## 5. Run Migrations

```bash
cd backend
npm run migrate
```

## 6. Start Development Servers

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

Backend will run on http://localhost:3000

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

Frontend will run on http://localhost:3001

## 7. Open Your Browser

Visit http://localhost:3001 to see the platform!

## Manual Setup (Alternative)

If the setup script doesn't work:

### Backend

```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your database URL
npx prisma generate
npm run migrate
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## What's Next?

- 📖 Read the [README](README.md) for full documentation
- 🔒 Review [SECURITY.md](SECURITY.md) for security features
- 🤝 Check [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for community guidelines
- 📚 Explore [docs/](docs/) for user guides
- 👥 Join our community discussions

## Common Issues

### "Command not found: npx"

Make sure you have Node.js 18+ installed:
```bash
node --version  # Should be v18.0.0 or higher
```

### "Cannot connect to database"

1. Check PostgreSQL is running:
   ```bash
   # On macOS
   brew services list
   
   # On Linux
   sudo systemctl status postgresql
   ```

2. Verify your DATABASE_URL in `backend/.env`

3. Make sure the database exists:
   ```bash
   psql -U postgres -l
   ```

### Port already in use

If ports 3000 or 3001 are in use:

1. Find the process:
   ```bash
   lsof -i :3000  # or :3001
   ```

2. Kill it or change the port in config files

### "Module not found" errors

```bash
# Reinstall dependencies
cd backend && rm -rf node_modules && npm install
cd ../frontend && rm -rf node_modules && npm install
```

## Development Tips

### Hot Reload

Both backend and frontend support hot reload - changes are reflected automatically!

### Database Viewing

Use Prisma Studio to view/edit data:
```bash
cd backend
npm run db:studio
```

### Linting

```bash
# Backend
cd backend
npm run lint

# Frontend
cd frontend
npm run lint
```

### Testing

```bash
# Backend
cd backend
npm test

# Frontend
cd frontend
npm test
```

## Need Help?

- 📧 Email: support@marcelajacon.academy
- 🐛 Issues: [GitHub Issues](https://github.com/especialistaMJ/MarcelaJaconAcademy/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/especialistaMJ/MarcelaJaconAcademy/discussions)

Happy coding! 🚀
