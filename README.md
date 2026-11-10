# Last Frontier Corps

**Strengthening veteran mental health through the Alaskan wilderness.**

Website for Last Frontier Corps, a 501(c)(3) nonprofit that brings veterans together on
guided expeditions in Alaska to rebuild connection, purpose, and resilience.

## Structure

- `index.html` – single-page site (mission, programs, approach, get involved, donate, FAQ, contact)
- `styles.css` – all styling; brand colors live as CSS variables at the top
- `script.js` – mobile menu, donation amount picker, footer year (site works without JS)
- `thanks.html` – page shown after the contact form is sent
- `netlify.toml` – Netlify settings
- `assets/favicon.svg` – site icon

No build step. Open `index.html` in a browser, or serve locally:

```bash
python3 -m http.server 8000
```

## Hosting

Deployed on Netlify from this repository. `netlify.toml` tells Netlify there is no build
step and to serve the repository root. Every push to the production branch redeploys.

The contact form uses Netlify Forms. In the Netlify dashboard, turn on **Forms → Enable
form detection**, redeploy, and add an email notification so submissions reach an inbox.
The Apply, Volunteer, Partner and Give buttons all lead to this form with the reason
filled in.

## Before launch – fill in placeholders

- [ ] **EIN** in the footer (`EIN: XX-XXXXXXX`)
- [ ] **Email address** (`info@lastfrontiercorps.org` in the contact section) – confirm it exists or replace
- [ ] **Donation processing** – swap the Give button (currently leads to the contact form) for a real giving link (e.g. Givebutter, Donorbox, Stripe, PayPal Giving Fund)
- [ ] **Contact form** – enable form detection and email notifications in Netlify (see Hosting)
- [ ] **Application form** – Apply currently leads to the contact form; add a fuller intake form when ready
- [ ] **Trip details** – the site describes general wilderness trips (fishing or hunting only sometimes, never the purpose); confirm eligibility and what is covered
- [ ] **Donation impact amounts** in `script.js` – adjust to real program costs
- [ ] **Founder section** – review the "Our Story" wording with Jeremy and replace the initials circle with his photo
- [ ] **Photos** – the program cards use illustrated placeholders; real expedition photos will add a lot
- [ ] Location / mailing address, social media links

The Veterans Crisis Line information (988 press 1, text 838255) is real and should stay prominent.
