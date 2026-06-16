# AGENTS.md

Guidance for coding agents working in this repository.

## Project Context

This is the Hugo website for a physiotherapist offering home rehabilitation services. The site should feel professional, calm, trustworthy, and easy to use for people looking for physiotherapy support, including older patients and family members arranging care.

The site is in Polish. Keep public-facing copy clear, empathetic, and concrete. Avoid exaggerated medical promises, guaranteed outcomes, or language that could sound like a diagnosis. Prefer practical wording about rehabilitation, patient comfort, home visits, neurorehabilitation, geriatric support, and contact options.

## Repository Structure

- `content/_index.md` contains the home page content and front matter.
- `layouts/index.html` defines the home page sections.
- `layouts/_default/baseof.html` contains the page shell, header, navigation, and main landmark.
- `layouts/partials/` contains reusable head, footer, and icon markup.
- `assets/css/main.css` contains the full custom stylesheet, including responsive layout and dark mode.
- `static/brand.svg` is the brand mark.
- `hugo.yaml` contains site metadata and Hugo config.

## Development Commands

- `make dev` runs the local Hugo development server with drafts.
- `make build` builds the production site with garbage collection and minification.
- `make clean` removes generated Hugo output.

Run `make build` before finishing meaningful template, content, or CSS changes when Hugo is available.

## Responsive Design Requirements

Every page change must work well on both mobile and desktop browsers.

- Check narrow phone widths, especially around 360-460px.
- Check tablet and desktop widths, including the existing 760px breakpoint.
- Make buttons and contact links easy to tap.
- Keep phone and email calls to action visible, readable, and uncluttered.
- Avoid fixed widths that can cause overflow.
- Ensure text wraps cleanly and does not overlap images, icons, or adjacent sections.
- Preserve the existing mobile-first behavior where sections stack cleanly on small screens.

## Accessibility And UX

- Preserve semantic landmarks, headings, skip link support, and accessible navigation labels.
- Use descriptive `alt` text for meaningful images.
- Keep icons decorative with `aria-hidden="true"` unless they convey unique information.
- Maintain high contrast in both light and dark themes.
- Do not remove keyboard focus states or the theme toggle accessibility attributes.
- Contact links should use `tel:` and `mailto:` where appropriate.

## Styling Conventions

- Follow the existing plain Hugo template and custom CSS approach.
- Prefer editing existing CSS variables, layout rules, and breakpoints before adding new patterns.
- Keep cards and buttons visually restrained: small border radii, clear borders, and calm colors.
- The design should feel like a healthcare service website, not a marketing-heavy landing page.
- Keep the layout efficient and scannable on desktop, with comfortable spacing on mobile.

## Content And Media

- Keep all visible content aligned with the physiotherapy/home rehabilitation service.
- Use licensed images only, and keep visible attribution when required by the source license.
- If changing contact details, update every place they appear in `content/_index.md`.
- If adding services or benefits, keep the front matter structure consistent with existing entries.

## Git And Generated Files

- Do not commit generated Hugo output such as `public/`, `resources/_gen/`, `.hugo_build.lock`, or `hugo_stats.json`.
- Do not overwrite unrelated local changes.
- Keep edits scoped to the requested change.
