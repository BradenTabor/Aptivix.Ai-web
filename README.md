# Aptivix.Ai Website

A modern, professional website for Aptivix.Ai - a Software and AI automation development business.

## Features

- **Modern Tech Stack**: Next.js 14+ with App Router, TypeScript, Tailwind CSS
- **Beautiful Animations**: Framer Motion for smooth scroll animations and transitions
- **Responsive Design**: Mobile-first approach, looks great on all devices
- **Dark Theme**: Professional dark mode with glassmorphism effects
- **Form Validation**: React Hook Form with Zod schema validation
- **SEO Optimized**: Meta tags, Open Graph, semantic HTML

## Tech Stack

| Technology | Purpose |
|------------|---------|
| [Next.js 14+](https://nextjs.org/) | React framework with App Router |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [Lucide React](https://lucide.dev/) | Icon library |
| [React Hook Form](https://react-hook-form.com/) | Form handling |
| [Zod](https://zod.dev/) | Schema validation |

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/aptivix-ai.git
cd aptivix-ai
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page with form
│   ├── portfolio/         # Portfolio page
│   ├── privacy/           # Privacy policy
│   ├── services/          # Services page
│   ├── terms/             # Terms of service
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/
│   ├── layout/            # Header, Footer
│   ├── sections/          # Page sections (Hero, Services, etc.)
│   └── ui/                # Reusable UI components
├── lib/
│   ├── constants.ts       # Site data and configuration
│   └── utils.ts           # Utility functions
├── public/                # Static assets
└── tailwind.config.ts     # Tailwind configuration
```

## Customization

### Updating Content

Most content is centralized in `/lib/constants.ts`:
- Navigation links
- Services data
- Process steps
- Testimonials
- Contact information

### Changing Colors

Update the color palette in `/tailwind.config.ts`:

```typescript
colors: {
  primary: { ... },
  accent: { ... },
  background: { ... },
}
```

### Adding Pages

1. Create a new folder in `/app/`
2. Add a `page.tsx` file
3. Update navigation in `/lib/constants.ts`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms

```bash
# Build the application
npm run build

# Start production server
npm start
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## License

This project is proprietary software for Aptivix.Ai.

## Contact

- Website: [aptivix.ai](https://aptivix.ai)
- Email: hello@aptivix.ai

