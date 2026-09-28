# SolyDos Bot Landing Page

Premium SaaS landing page for SolyDos Bot — an AI-powered WhatsApp support agent.

## Design

- **Style**: Minimalist, editorial SaaS design
- **Color Scheme**: Green primary (#10b981), cream background (#faf8f6)
- **Typography**: System fonts, large & elegant
- **Components**: Rounded cards, subtle shadows, thin borders
- **Whitespace**: Generous spacing for premium feel

## Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Visit http://localhost:3000
```

## Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Deployment Options

### Vercel (Recommended)
```bash
vercel deploy
```

### Docker
```bash
docker build -t parcebot-landing .
docker run -p 3000:3000 parcebot-landing
```

### AWS, Heroku, Railway
Standard Next.js deployment. Set `NODE_ENV=production`.

## Tech Stack

- Next.js 14
- React 18
- Tailwind CSS 3
- TypeScript

## Structure

```
/app
  /layout.tsx      - Root layout
  /page.tsx        - Main landing page
  /globals.css     - Global styles
```

## Customization

### Colors
Edit `tailwind.config.js`:
```js
'green-primary': '#10b981',  // Primary green
'green-light': '#d1fae5',    // Light green
'cream': '#faf8f6',          // Background cream
```

### Content
Edit `app/page.tsx` to update:
- Headlines & copy
- Features list
- Pricing tiers
- Client logos
- CTA buttons

### Fonts
System fonts by default. To add custom fonts:
```css
@import url('https://fonts.googleapis.com/css2?family=...');
```

## Performance

- ⚡ ~2.5s load (Lighthouse 90+)
- 📱 Fully responsive (mobile-first)
- ♿ Accessible (WCAG 2.1 AA)
- 🔍 SEO optimized

## License

Private © 2026 SolyDos Bot
