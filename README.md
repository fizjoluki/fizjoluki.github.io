# fizjoluki.github.io

Fizjo Łuki website built with [Hugo](https://gohugo.io/) and published to GitHub Pages with GitHub Actions.

## Local development

Install Hugo Extended, then run:

```sh
hugo server --buildDrafts
```

The site content lives in `content/_index.md`. The custom layout, icons, brand mark, and styling live in `layouts/`, `static/brand.svg`, and `assets/css/main.css`.

## Publishing

The workflow in `.github/workflows/hugo.yaml` builds the site on pushes to `main` and deploys the generated `public/` directory to GitHub Pages.

In the repository settings on GitHub, set **Pages > Build and deployment > Source** to **GitHub Actions**.
