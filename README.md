# David Huang - Portfolio

A modern, typography-driven portfolio website built with Next.js, featuring a clean and minimalistic design.

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📚 Documentation

For detailed technical documentation, guides, and best practices, see the [`/doc`](./doc/) folder:

- **[Documentation Index](./doc/README.md)** - Overview of all available documentation
- **[Font System Guide](./doc/font-system.md)** - Complete guide to typography and font management

## 🎨 Design Philosophy

- **Typography-driven**: Clean, readable typography is the foundation
- **Minimalistic**: Focus on content over decoration
- **Responsive**: Optimized for all device sizes
- **Performance**: Fast loading and smooth interactions

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom typography system
- **Fonts**: Anton (headings), Cormorant Garamond (secondary), Helvetica (body)
- **Language**: TypeScript
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
dahuang-portfolio/
├── doc/                    # Documentation
│   ├── README.md          # Documentation index
│   └── font-system.md     # Font system guide
├── src/
│   ├── app/               # Next.js App Router
│   ├── components/        # Reusable components
│   └── data/              # Static data and content
└── public/                # Static assets
```

## 🔧 Development

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

### Key Files

- `src/app/globals.css` - Global styles and font system
- `src/app/layout.tsx` - Root layout with font loading
- `src/components/TypographyGallery.tsx` - Main portfolio showcase
- `src/data/works.ts` - Project data and content

## 📖 Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - utility-first CSS framework
- [Next.js Font Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)

## 🚀 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
