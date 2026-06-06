/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: '12px',
        md: '10px',
        sm: '6px',
        pill: '9999px',
        full: '9999px',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: { DEFAULT: 'hsl(var(--card))', foreground: 'hsl(var(--card-foreground))' },
        popover: { DEFAULT: 'hsl(var(--popover))', foreground: 'hsl(var(--popover-foreground))' },
        primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' },
        secondary: { DEFAULT: 'hsl(var(--secondary))', foreground: 'hsl(var(--secondary-foreground))' },
        muted: { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))' },
        accent: { DEFAULT: 'hsl(var(--accent))', foreground: 'hsl(var(--accent-foreground))' },
        destructive: { DEFAULT: 'hsl(var(--destructive))', foreground: 'hsl(var(--destructive-foreground))' },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        // werkhain tokens — warm industrial base, curated graffiti accents
        ink: '#171310',
        'ink-active': '#000000',
        'body-text': '#39332c',
        'muted-ink': '#6f675b',
        hairline: '#d8cfbf',
        canvas: '#f4f1ea',
        'surface-soft': '#ece6db',
        'surface-strong': '#ddd5c6',
        'surface-dark': '#14110e',
        'surface-dark-el': '#1b1713',
        noir: '#14110e',
        'noir-soft': '#1b1713',
        'sig-coral': '#b56e84', // primary signature: muted mauve-rosé (Kess)
        'sig-blue': '#9c7fa6', // soft lilac
        'sig-acid': '#c4a05f', // champagne gold
        'sig-red': '#a8455f', // deep berry
        'sig-forest': '#14110e',
        'sig-cream': '#f0e6d4',
        'sig-peach': '#cf9a86', // warm nude
        'sig-mint': '#c4a05f',
        'sig-yellow': '#e2c186',
        'sig-mustard': '#c4a05f',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'display-xl': ['48px', { lineHeight: '1.1', fontWeight: '500' }],
        'display-lg': ['40px', { lineHeight: '1.2', fontWeight: '400' }],
        'display-md': ['32px', { lineHeight: '1.2', fontWeight: '400' }],
        'title-lg': ['24px', { lineHeight: '1.35', fontWeight: '400' }],
        'title-md': ['20px', { lineHeight: '1.5', fontWeight: '400' }],
        'title-sm': ['18px', { lineHeight: '1.4', fontWeight: '500' }],
        'label-md': ['16px', { lineHeight: '1.4', fontWeight: '500' }],
        'body-sm': ['14px', { lineHeight: '1.6', fontWeight: '400' }],
        'caption': ['14px', { lineHeight: '1.35', fontWeight: '500', letterSpacing: '0.16px' }],
      },
      spacing: {
        section: '96px',
        xxl: '48px',
        xl: '32px',
        lg: '24px',
        md: '16px',
        sm: '12px',
        xs: '8px',
        xxs: '4px',
      },
      keyframes: {
        'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
        'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
        'ticker': { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'ticker': 'ticker 28s linear infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
