# VahanCRM — Automotive Workshop Operating System & Landing Page

Modern, mobile-responsive, high-converting sales landing page for **VahanCRM**, the all-in-one workshop operating system powering multi-brand car garages, 2-wheeler service hubs, and detailing studios across India.

---

## ⚡ Quick Deployment & Hosting

### Option 1: Vercel / Netlify (Recommended)
1. Push this repository to your GitHub account (`gh repo create` or manual import).
2. Connect the repo on [Vercel](https://vercel.com) or [Netlify](https://netlify.com).
3. Build Settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Deploy in 1 click!

### Option 2: Static CDN / GitHub Pages
- The root `index.html` is fully self-contained with Tailwind CSS and inline SVGs. You can host it on GitHub Pages, Cloudflare Pages, Hostinger, or AWS S3 without any build step.

### Option 3: Local Development
```bash
npm install
npm run dev
```

---

## ✨ Key Features & Architecture

1. **Disciplined Design System**:
   - Clean, high-legibility white background with subtle slate borders.
   - 2-color visual hierarchy: Racing Red (`#DC2626`) primary accent + WhatsApp Emerald (`#16A34A`).
   - 100% mobile responsive with touch targets (≥44px) and zero horizontal overflow.

2. **Direct WhatsApp Lead Conversion**:
   - Every CTA across the navbar, hero slides, pricing tier, pre-footer banner, and footer routes directly to WhatsApp (`+91 97913 88549`).
   - Pre-formatted messages for 14-day free trials, live demos, and workshop onboarding.

3. **Automotive Operational Console UI**:
   - Live camera intake viewfinder HUD with 0.5s Indian number plate ANPR (`IND HR 26 DQ 5541`) & 360° walkaround scratch tags.
   - Predictive Bay Scheduler & Multilingual Voice Agent cards.
   - Connected hardware integrations: Tally XML exports, amount-locked dynamic UPI QR codes (₹3,450), and RTSP CCTV gate pass sync.

4. **Transparent India Pricing**:
   - **₹999 / month** or **₹9,999 / year** (~20% annual savings / 2 months free).
   - Single flat plan with unlimited job cards, staff logins, and GST invoicing.

---

## 🛠️ Tech Stack
- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Icons**: Inline scalable SVGs (zero external font or icon library dependencies)
- **Deployment**: Static build compatible with Vercel, Netlify, Cloudflare Pages, or traditional web hosts.
