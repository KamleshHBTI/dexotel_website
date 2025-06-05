# Dexotel Website

A modern, responsive website built with Next.js, TypeScript, and Tailwind CSS.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── (routes)/         # Page routes
│   └── layout.tsx        # Root layout
├── Components/            # React components
│   ├── atoms/           # Atomic design components
│   ├── molecules/       # Composite components
│   └── organisms/       # Complex components
├── data/                 # Data layer
│   └── repositories/    # API repositories
├── store/               # State management
│   └── useStore.ts     # Zustand store
├── styles/              # Global styles
│   └── theme.ts        # Theme configuration
└── types/              # TypeScript types
```

## Design System

The project follows a comprehensive design system with:

- Typography scale
- Color palette
- Spacing system
- Component variants
- Responsive breakpoints

## Development Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Start production server:
   ```bash
   npm start
   ```

## Code Quality

The project uses several tools to maintain code quality:

- ESLint for code linting
- Prettier for code formatting
- Husky for Git hooks
- TypeScript for type safety

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Architecture

### Component Architecture

- Atomic Design methodology
- Container/Presentational pattern
- Composition over inheritance

### State Management

- UI state: React Context
- Application state: Zustand
- Server state: React Query/SWR

### Data Layer

- Repository pattern for API calls
- Type-safe API responses
- Error handling middleware

## Contributing

1. Create a feature branch
2. Make your changes
3. Run tests and linting
4. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
