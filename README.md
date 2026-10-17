# Honey Gold Roofing - Website

Static website for Honey Gold Roofing (Honey The Gold Roofing Concept),
Roofing & General Contractors, Ijanikin, Lagos.

Plain HTML, CSS and JavaScript. No build step.

## Edit content

Almost everything lives in `js/config.js`:

- Phone numbers, email, address, opening hours
- WhatsApp number and prefilled message (encoded automatically)
- Social media links (leave `url` empty until confirmed; empty links show as inactive icons)
- Services (set `show: false` to hide one)
- Project gallery photos and categories
- FAQs

Static text such as the hero, About, Why Choose Us and Process is in `index.html`.

## Photos

All gallery photos in `assets/img/projects/` were cropped from the client's own
promotional flyer, so they show real Honey Gold work. They are low resolution.
Replace them with original high resolution photos from the client when available.
Categories with no photos (Roofing Repairs, Roof Replacement) show a
"coming soon" note instead of stock images.

## Run locally

    python3 -m http.server 8080
    # open http://localhost:8080

The quote form only works once deployed on Netlify. Locally it shows an error
on submit; it never pretends to succeed.

## Deploy to Netlify

1. In Netlify: Add new site > Import from Git > pick this repository.
2. Branch: the branch you want live.
3. Base directory: `honey-gold-roofing`
4. Build command: leave empty. Publish directory: `.` (set in `netlify.toml`).
5. Deploy. Netlify Forms detects the `quote` form automatically.
6. In Site settings > Forms > Form notifications, add an email notification
   (for example kennygold79@gmail.com) so new quote requests reach the client.

## Still needed from the client

- High resolution project photos, ideally including repair and replacement jobs
- A logo file, if they want their existing logo instead of the wordmark
