# PagiOx website

Vite + React + TypeScript + Tailwind CSS (v3) + Lucide React.

## Install & run
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build locally
```

## Deploy
Upload the `dist/` folder to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, or your own server).
Build command: `npm run build` — output directory: `dist`.

## Configuration (all in `src/config.ts`)
- **WhatsApp number:** `WHATSAPP_NUMBER` (digits only with country code, e.g. `'15551234567'`). Empty = button shows "coming soon".
- **Contact form:** set `FORM_ENDPOINT` (e.g. a Formspree URL), or edit `src/lib/submitContact.ts` for EmailJS / your own API. Until then the form validates but clearly tells the visitor nothing was sent.
- **Social links:** `SOCIALS` (empty href = shown as plain text).
- **Business name/tagline & nav:** `SITE`, `NAV_LINKS`.
- **Service, process and other copy:** `src/data.ts`; section-specific text lives in `src/components/`.

## Before launch
- Replace `https://www.example.com/` in `index.html`, `public/robots.txt`, `public/sitemap.xml`.
- Replace `public/favicon.svg`; add an Open Graph image and `og:image` tag.
- Write a Privacy Policy page and point the footer link to it.
