# Navkamakhya Shipping Services — Website

https://cookienut.github.io/navkamakhya-demo/

A static, no-build website for **Navkamakhya Shipping Services Pvt. Ltd.**, ready to deploy on GitHub Pages.

## Structure

```
index.html          Home
about.html           About
services.html        Crew Management — full service scope
insights.html         Industry insights (real, sourced maritime workforce data)
contact.html          Contact + static enquiry form
css/style.css         All styling
js/main.js             Nav toggle, footer year, mailto contact form
assets/                Logo + favicons (generated from your uploaded logo)
robots.txt / sitemap.xml   Basic SEO
```

## ⚠️ Before you publish — placeholders to fill in

Nothing on this site is invented. Anywhere real company-specific information wasn't provided, it's marked clearly so it doesn't get mistaken for a real fact. Search each file for the italic **`placeholder-note`** text (visibly underlined with a dashed gold line on the live site) and replace:

- **Contact details** — phone number, registered office address, office hours (`contact.html`, and the footer on every page)
- **Company facts** — founding year, ISO/RPSL certification numbers, leadership details (`about.html`, `index.html`)
- **Services confirmation** — which sub-services under Crew Management (payroll, training liaison, travel, welfare, etc.) you actually offer directly vs. via partners (`services.html`)
- **Email address** — currently set to `info@navkamakhya.com` everywhere (mailto links + contact form). Update if this isn't your real domain/inbox.
- **Domain** — `https://www.navkamakhya.com/` is used as a placeholder in canonical tags, Open Graph tags, `sitemap.xml`, and `robots.txt`. Update these once you know your actual domain (e.g. `yourusername.github.io/reponame/` if using a default GitHub Pages URL, or your custom domain).

The Insights page (`insights.html`) is the one exception — every figure there is real, current data from BIMCO/ICS and the Government of India, each with a source link. Update it only when a newer report is published.

## Deploying to GitHub Pages

1. Create a new GitHub repository (e.g. `navkamakhya-website`).
2. Add all these files to the repository root (keep the folder structure — `css/`, `js/`, `assets/` as subfolders).
3. Commit and push to the `main` branch.
4. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / root**. Save.
5. GitHub will publish at `https://<your-username>.github.io/<repo-name>/`. Wait a minute or two for the first build.
6. Optional — custom domain: add a `CNAME` file to the repo root containing your domain (e.g. `www.navkamakhya.com`), then point your domain's DNS to GitHub Pages per [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site). Update the placeholder URLs above once this is live.

## Making the contact form actually deliver to your inbox

Right now "Send Enquiry" opens a pre-filled email in the visitor's own mail client — safe for a static site with no backend, but it depends on them having a mail client configured. To collect submissions directly:

1. Sign up for a free static-form service (e.g. Formspree, Getform).
2. Replace the `<form id="contactForm">` tag in `contact.html` with the action URL your provider gives you, and remove/adjust the JS `submit` handler in `js/main.js` accordingly.

## Notes

- Fonts (Fraunces + Work Sans) load from Google Fonts via CDN — no local font files needed.
- No build step, no dependencies — open `index.html` directly in a browser to preview locally, or run a simple local server (e.g. `python3 -m http.server`) from this folder.
