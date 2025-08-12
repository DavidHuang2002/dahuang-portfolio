# Font System Documentation

## Overview

This document explains the centralized font system implemented in the portfolio to ensure consistency and easy maintenance.

## Font Architecture

### CSS Custom Properties

The font system uses CSS custom properties defined in `src/app/globals.css`:

```css
:root {
  --font-primary: var(--font-anton), sans-serif; /* Anton font for headings */
  --font-secondary: var(--font-cormorant), serif; /* Cormorant for secondary text */
  --font-body: "Helvetica", "Arial", sans-serif; /* Helvetica for body text */
}
```

### Font Loading

Fonts are loaded in `src/app/layout.tsx` using Next.js font optimization:

- **Anton**: Primary heading font (variable: `--font-anton`)
- **Cormorant Garamond**: Secondary font (variable: `--font-cormorant`)

The CSS custom properties are automatically available throughout the application via the `:root` selector.

## Typography Classes

### Heading Classes

All heading classes automatically use the primary font (Anton):

- `.text-h1` - 80px (mobile: 60px, small mobile: 48px)
- `.text-h2` - 40px (mobile: 32px, small mobile: 28px)
- `.text-h3` - 32px (mobile: 28px, small mobile: 24px)
- `.text-h4` - 20px
- `.text-h5` - 18px
- `.text-h6` - 16px

### Body Text Classes

- `.text-body` - Uses Helvetica, 20px (mobile: 18px, small mobile: 16px)
- `.text-body-2` - Uses Cormorant, 20px

### Font Utility Classes

- `.font-primary` - Applies Anton font
- `.font-secondary` - Applies Cormorant font
- `.font-body` - Applies Helvetica font

## Usage Guidelines

### ✅ Recommended Usage

```jsx
// Use typography classes (they include the correct font)
<h1 className="text-h1">Title</h1>
<p className="text-body">Body text</p>
<p className="text-body-2">Secondary body text</p>

// Use utility classes only when you need to override
<span className="text-h3 font-secondary">Special heading</span>
```

### ❌ Avoid

```jsx
// Don't use redundant font classes
<h1 className="text-h1 font-anton">Title</h1>  // font-anton is redundant

// Don't hardcode font families
<p style={{ fontFamily: 'Arial' }}>Text</p>
```

## Making Changes

### Changing Body Font

To change the body font, update the CSS custom property in `src/app/globals.css`:

```css
:root {
  --font-body: "Your New Font", "Fallback", sans-serif;
}
```

### Changing Heading Font

To change the heading font, update the CSS custom property:

```css
:root {
  --font-primary: "Your New Heading Font", sans-serif;
}
```

### Adding New Fonts

1. Load the font in `src/app/layout.tsx`
2. Add a CSS custom property in `src/app/globals.css`
3. Create utility classes if needed
4. Update typography classes to use the new font

## Benefits

- **Centralized**: All font definitions in one place (`:root` in `globals.css`)
- **Consistent**: No duplicate font declarations
- **Maintainable**: Easy to change fonts globally
- **Performance**: Uses Next.js font optimization
- **Clean**: Typography classes include appropriate fonts automatically
- **No Redundancy**: CSS custom properties defined only once
