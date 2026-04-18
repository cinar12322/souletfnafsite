# GEMINI.md - Soulet / FNAFO Project Context

## Project Overview
**Soulet / FNAFO** is a high-conversion, atmospheric landing page for an upcoming indie horror game developed by **Soulet Studios**. The project is built with a modern, performance-oriented stack to deliver a premium "horror" experience while maintaining strict security and SEO standards.

### Core Technology Stack
- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) (CSS-first configuration)
- **Authentication:** [NextAuth.js v5](https://authjs.dev/) (Beta) supporting Google, Discord, and Credentials.
- **Database/ORM:** [Prisma](https://www.prisma.io/) with PostgreSQL.
- **Security:** Cloudflare Turnstile (Bot Protection).
- **SEO/Analytics:** IndexNow, Open Graph, Google AdSense, Google Analytics, Microsoft Clarity.

---

## Building and Running

### Prerequisites
- Node.js (Latest LTS recommended)
- PostgreSQL Database

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
# or for a specific port
npm run dev -- -p 3001
```

### Database Management
```bash
npx prisma generate  # Generate Prisma client
npx prisma db push   # Push schema to DB (Development)
npx prisma migrate dev # Create migrations (Production/Staging)
```

### Production Build
```bash
npm run build
npm start
```

---

## Architecture and Key Files

- `src/app/page.tsx`: Main landing page with Hero, Features, Waitlist, and About sections.
- `src/app/layout.tsx`: Root layout handling fonts (Inter & Creepster), Providers, Navbar, Footer, and Metadata (OGP).
- `src/auth.ts`: NextAuth v5 configuration including Turnstile validation and session handling.
- `src/app/actions.ts`: Server Actions for Waitlist registration and User signup.
- `src/app/globals.css`: Tailwind v4 theme definition (`@theme`) and custom "horror" animations.
- `prisma/schema.prisma`: Database schema defining User, Account, Session, and Waitlist models.
- `next.config.ts`: Next.js configuration with a strict Content Security Policy (CSP) and optimization settings.

---

## Development Conventions

### 1. Styling (Tailwind v4)
- **No `tailwind.config.ts`:** Do not create or look for a v3 config file.
- **Theme Definition:** All colors, fonts, and animations are defined in `src/app/globals.css` using the `@theme` directive.
- **Glassmorphism:** Use the `.glass` utility class for semi-transparent, blurred overlays.
- **Typography:** Use `font-creepy` (Creepster) for horror-themed titles and `font-body` (Inter) for content.

### 2. Authentication (NextAuth v5)
- Follow the v5 beta pattern: `export const { handlers, signIn, signOut, auth } = NextAuth({...})`.
- Always validate `turnstileToken` in Credentials provider for security.

### 3. Server Actions
- Use `use server` at the top of action files.
- Return structured error/success objects (e.g., `{ error: string }` or `{ success: true }`).

### 4. Accessibility & SEO
- Maintain semantic HTML (Main, Section, Nav, Footer).
- Ensure high color contrast for readability in dark mode.
- Update `metadata` in `layout.tsx` for social sharing (Open Graph).

### 5. Deployment
- The project is deployed on **Vercel**. Always `git push origin main` to trigger a redeploy after significant changes.

---

## TODOs & Roadmap
- [ ] Add Game Screenshots Gallery.
- [ ] Implement Custom Cursor (Fener/Nişangah).
- [ ] Add Ambient Sound Toggle.
- [ ] Implement Donator Leaderboard.
- [ ] Enhance Parallax Effects for background fog/silhouettes.
