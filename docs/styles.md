# Styles

## Fonts

Global CSS root font family is set to Inter (for the right arrow ligature). The page should use Inter everywhere in the UI that `sans-serif` is not specified.

Tailwind's default sans-serif is set to Arimo (in `tailwind.config.js`). The `font-sans` class should be set in content containers to take advantage of this.

## Layout

The page root container is blocked into a "small screen" (640px) max width. The page consists of a stack of clickable card components that lead to the project's documentation.

- [ ] TODO: Allow larger widths, and responsively change from stacked cards into grid layout.
