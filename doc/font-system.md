# Font System Documentation

## Overview

This document explains the simplified font system implemented in the portfolio. The system uses just two fonts: **Anton** for headings and **Helvetica** for everything else.

## Font Architecture

### CSS Custom Properties

The font system uses two simple CSS custom properties defined in `src/app/globals.css`:

```css
:root {
  --font-primary: "Anton", "Anton Fallback", sans-serif; /* Anton for headings */
  --font-secondary: "Helvetica", "Arial", sans-serif; /* Helvetica for everything else */
}
```

### Font Loading

Only one font is loaded in `src/app/layout.tsx` using Next.js font optimization:

- **Anton**: Primary heading font (variable: `--font-anton`)

Helvetica is a system font, so it doesn't need to be loaded.

## Typography Classes

### Heading Classes (Anton)

All heading classes use the primary font (Anton):

- `.text-h1` - 80px (mobile: 60px, small mobile: 48px)
- `.text-h2` - 40px (mobile: 32px, small mobile: 28px)
- `.text-h3` - 32px (mobile: 28px, small mobile: 24px)
- `.text-h4` - 20px
- `.text-h5` - 18px
- `.text-h6` - 16px

### Body Text Classes (Helvetica)

All body text uses the secondary font (Helvetica):

- `.text-body` - 20px (mobile: 18px, small mobile: 16px)
- `.text-body-2` - 20px (same as text-body, kept for compatibility)

### Font Utility Classes

- `.font-primary` - Applies Anton font
- `.font-secondary` - Applies Helvetica font

## Usage Guidelines

### ✅ Recommended Usage

```jsx
// Use typography classes (they include the correct font)
<h1 className="text-h1">Title</h1>
<p className="text-body">Body text</p>

// Use utility classes only when you need to override
<span className="text-h3 font-secondary">Special heading in Helvetica</span>
```

### ❌ Avoid

```jsx
// Don't use redundant font classes
<h1 className="text-h1 font-primary">Title</h1>  // font-primary is redundant

// Don't hardcode font families
<p style={{ fontFamily: 'Arial' }}>Text</p>
```

## Making Changes

### Changing Primary Font (Headings)

To change the heading font, update the CSS custom property in `src/app/globals.css`:

```css
:root {
  --font-primary: "Your New Heading Font", sans-serif;
}
```

You'll also need to load the new font in `src/app/layout.tsx`:

```tsx
import { YourNewFont } from "next/font/google";

const yourNewFont = YourNewFont({
  variable: "--font-your-new-font",
  subsets: ["latin"],
  weight: "400",
});
```

### Changing Secondary Font (Body Text)

To change the body font, update the CSS custom property:

```css
:root {
  --font-secondary: "Your New Body Font", "Fallback", sans-serif;
}
```

### Quick Font Experiments

Want to try different fonts? Just change these two lines in `src/app/globals.css`:

```css
:root {
  --font-primary: "Inter", sans-serif; /* Try Inter for headings */
  --font-secondary: "Open Sans", sans-serif; /* Try Open Sans for body */
}
```

## Benefits

- **Simple**: Only two fonts to manage
- **Fast**: Minimal font loading
- **Flexible**: Easy to experiment with different font combinations
- **Clean**: No redundant font declarations
- **Maintainable**: Change fonts globally by updating two variables
