# fizjoluki.github.io

Fizjo Łuki website built with [Hugo](https://gohugo.io/) and published to GitHub Pages with GitHub Actions.

## Local development

Install Hugo Extended, then run:

```sh
make dev
```

The site content lives in `content/_index.md`. The custom layout, icons, brand mark, and styling live in `layouts/`, `static/brand.svg`, and `assets/css/main.css`.

## Publishing

The workflow in `.github/workflows/hugo.yaml` builds the site on pushes to `main` and deploys the generated `public/` directory to GitHub Pages.

In the repository settings on GitHub, set **Pages > Build and deployment > Source** to **GitHub Actions**.

## Netlify deploy previews

`netlify.toml` configures Netlify to build the Hugo site with the same Hugo version used by GitHub Actions. Deploy Preview builds use Netlify's `$DEPLOY_PRIME_URL` as Hugo's `baseURL`, so metadata and absolute links point at the preview URL.

To enable previews for pull requests, connect this GitHub repository to a Netlify site and keep Deploy Previews enabled under **Project configuration > Build & deploy > Continuous Deployment > Branches and deploy contexts**. Netlify will add a pull request status, and if deploy notifications are enabled, a preview link comment.
