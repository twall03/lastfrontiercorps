# Last Frontier Corps

**Strengthening veteran mental health through the Alaskan wilderness.**

Website for Last Frontier Corps, a 501(c)(3) nonprofit that brings veterans together on
guided expeditions in Alaska to rebuild connection, purpose, and resilience.

## Structure

- `index.html` – single-page site (mission, programs, approach, get involved, donate, FAQ, contact)
- `styles.css` – all styling; brand colors live as CSS variables at the top
- `script.js` – mobile menu, donation amount picker, footer year (site works without JS)
- `assets/favicon.svg` – site icon

No build step. Open `index.html` in a browser, or serve locally:

```bash
python3 -m http.server 8000
```

## Hosting

Static files only, so it deploys as-is to GitHub Pages (Settings → Pages → deploy from
branch, root folder), Netlify, Cloudflare Pages, or any web host.

## Before launch – fill in placeholders

- [ ] **EIN** in the footer (`EIN: XX-XXXXXXX`)
- [ ] **Email addresses** (`info@`, `apply@`, `volunteer@`, `donate@`, `partners@lastfrontiercorps.org`) – confirm they exist or replace
- [ ] **Donation processing** – swap the `mailto:` donate button for a real giving link (e.g. Givebutter, Donorbox, Stripe, PayPal Giving Fund)
- [ ] **Contact form** – currently `mailto:`; connect to Formspree, Netlify Forms, or similar
- [ ] **Application form** – replace `mailto:` with an intake form
- [ ] **Program details** – confirm expedition lengths, seasons, and eligibility
- [ ] **Donation impact amounts** in `script.js` – adjust to real program costs
- [ ] **Founder section** – review the "Our Story" wording with Jeremy and replace the initials circle with his photo
- [ ] **Photos** – the program cards use illustrated placeholders; real expedition photos will add a lot
- [ ] Location / mailing address, social media links

The Veterans Crisis Line information (988 press 1, text 838255) is real and should stay prominent.
