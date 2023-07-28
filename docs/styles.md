# Styles

## Fonts

Using `next/fonts` module for built-in, automatic, self-hosting, with local font files.

Next.js creates classes for each font, so the custom app needs to be wrapped in a container that uses these classes (i.e. `<main className={font.variable}></main>`) to allow the font variables to be available to child components. Once these classes are made available, they can be used to extend Tailwind's font family definitions (i.e. `sans`, `mono`, custom families) in `tailwind.config.js`.[^nextjs-fonts]

- Inter is used as the default `sans` family, and is intended to be used for all UI components. The app is wrapped with the `font-sans` class.
- Arimo is used as the default `content` family, and is intended to set manually for components with long-form text.
- Cousine is used as the default `mono` family.
- Default `serif` family is not altered.

[^nextjs-fonts]: <https://mikebifulco.com/posts/custom-fonts-with-next-font-and-tailwind>

## Layout

The page root container is blocked into a "small screen" (640px) max width. The page consists of a stack of clickable card components that lead to the project's documentation.

- [ ] TODO: Allow larger widths, and responsively change from stacked cards into grid layout.

### Cards

`Card` components receive a `projects` object via Prop that includes all metadata and content that the card will publish. See [[content]] for the schema.

Some notes about the `projects` object:

- `data.title` can take the form of a string or a two-component array (TypeScript tuple). In array form, the segments are wrapped into inline-block spans, allowing for a preferred line break point to be specified. This functionality will probably get buggy if the title segments get too long, so use caution.

  This may become obsolete one day if CSS `text-wrap: balance` gets general support (currently only supported on Chrome).
