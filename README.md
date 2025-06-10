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

### Spacing System

We use a consistent spacing system throughout the application, defined in `utils/constants.ts`:

```typescript
spacing = {
  xs: '0.5rem',    // 8px
  sm: '1rem',      // 16px
  md: '1.5rem',    // 24px
  lg: '2rem',      // 32px
  xl: '2.5rem',    // 40px
  '2xl': '3rem',   // 48px
  '3xl': '4rem',   // 64px
}
```

### Typography

Our typography system is based on a scale that ensures consistency across the application:

```typescript
typography = {
  fontSize: {
    xs: '0.75rem',     // 12px
    sm: '0.875rem',    // 14px
    base: '1rem',      // 16px
    lg: '1.125rem',    // 18px
    xl: '1.25rem',     // 20px
    '2xl': '1.5rem',   // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
  }
}
```

## Component Library

### Core Components

1. `Section`
   - A wrapper component that enforces consistent spacing and layout
   - Props:
     - `background`: 'light' | 'dark' | 'gradient' | 'none'
     - `animate`: boolean
     - `fullWidth`: boolean

2. `Card`
   - A reusable card component with consistent styling
   - Props:
     - `animate`: boolean
     - `delay`: number
     - `hover`: boolean

### Usage Examples

```tsx
// Using Section component
<Section background="light">
  <h2>Section Title</h2>
  <p>Content goes here</p>
</Section>

// Using Card component
<Card delay={0.2} hover={true}>
  <h3>Card Title</h3>
  <p>Card content</p>
</Card>
```

## Layout Guidelines

1. Always use the `Section` component for page sections to maintain consistent spacing
2. Use the spacing constants from `utils/constants.ts` instead of hardcoded values
3. Apply typography classes using the constants for consistent font sizes
4. Use the Card component for consistent card styling across the application

## Responsive Design

The application uses Tailwind's responsive prefixes with our custom breakpoints:

```typescript
breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
}
```

## Best Practices

1. Always import spacing and typography constants from `utils/constants.ts`
2. Use the Section component for consistent page sections
3. Apply responsive classes using Tailwind's mobile-first approach
4. Keep components small and reusable
5. Use TypeScript interfaces for component props
6. Follow the established naming conventions for components and files

## Development Setup

1. Install dependencies:
   ```