// Spacing constants
export const spacing = {
  xs: '0.5rem',    // 8px
  sm: '1rem',      // 16px
  md: '1.5rem',    // 24px
  lg: '2rem',      // 32px
  xl: '2.5rem',    // 40px
  '2xl': '3rem',   // 48px
  '3xl': '4rem',   // 64px
  section: {
    top: '4rem',    // 64px
    bottom: '4rem', // 64px
  }
};

// Typography constants
export const typography = {
  fontFamily: {
    primary: 'Inter, sans-serif',
    heading: 'Poppins, sans-serif',
  },
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
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  }
};

// Component-specific constants
export const componentSpacing = {
  card: {
    padding: spacing.md,
    gap: spacing.md,
    borderRadius: '0.5rem',
  },
  section: {
    padding: `${spacing.section.top} 0 ${spacing.section.bottom}`,
    gap: spacing.xl,
  },
  container: {
    padding: `0 ${spacing.md}`,
    maxWidth: '1280px',
  }
};

// Breakpoints
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
}; 