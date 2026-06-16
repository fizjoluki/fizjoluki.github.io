# Copilot Instructions

Follow the repository guidance in `AGENTS.md`. This project is a Hugo website for a physiotherapist offering home rehabilitation services, so suggestions should stay professional, calm, accessible, and aligned with a healthcare service website.

## Project Context

- Public-facing content is in Polish.
- Keep copy clear, empathetic, and concrete.
- Avoid exaggerated medical promises, guaranteed outcomes, or diagnostic-sounding claims.
- Prioritize practical information about home visits, physiotherapy, neurorehabilitation, geriatric support, and easy contact.

## Code Structure

- Home page content lives in `content/_index.md`.
- Home page layout lives in `layouts/index.html`.
- Shared shell, head, footer, and icons live in `layouts/_default/baseof.html` and `layouts/partials/`.
- Styling lives in `assets/css/main.css`.
- Site metadata lives in `hugo.yaml`.
- The brand asset is `static/brand.svg`.

## Responsive And Accessible UI

- Every change should work on both mobile and desktop browsers.
- Preserve the existing mobile-first stacking behavior and the 760px breakpoint.
- Check narrow phone widths around 360-460px when changing layout or text.
- Avoid fixed widths that can overflow.
- Keep buttons and phone/email links easy to tap.
- Ensure text wraps cleanly and never overlaps adjacent content, icons, or images.
- Preserve semantic HTML, heading order, skip-link support, navigation labels, and keyboard focus states.
- Keep light and dark themes readable with strong contrast.

## Styling Preferences

- Use the existing Hugo template and custom CSS approach.
- Prefer small, scoped edits to current CSS variables, layout rules, and breakpoints.
- Keep the visual style restrained: calm colors, clear borders, modest spacing, and small border radii.
- Do not make the page feel like a marketing-heavy landing page.

## Development

- Use `make dev` for local development.
- Use `make build` to validate meaningful template, content, or CSS changes when Hugo is available.
- Do not commit generated Hugo output such as `public/`, `resources/_gen/`, `.hugo_build.lock`, or `hugo_stats.json`.
