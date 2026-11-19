# Aya Sadoq portfolio

Personal portfolio website for Aya Sadoq. The page presents profile information, projects, experience, community work, achievements, current activities, and contact links through an interactive tree layout.

## Structure

- `src/content.js` contains the portfolio content and page data.
- `src/main.js` renders the interactive canvas experience.
- `src/photos.js` lists image dimensions and cache versions.
- `css/style.css` contains the page styling.
- `posts/img/` contains portfolio images and their color variants.

The Libre Franklin font and its license are included in `fonts/`.

## Deploy

The site is published with GitHub Pages from the `main` branch. The workflow at
`.github/workflows/pages.yml` uploads the repository root, so the site is served
at `https://ayasadoq.github.io/ayasadoqtree/` after the first successful run.
