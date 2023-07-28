# Unsorted notes

In progress:

- [x] build(Card): support loading `data.title` as a two-component array, signifying a preferred line break point. It works by breaking up the title into (line-breakable) inline-block spans. Functionality will probably be buggy if more than one break point is specified, so maximum length of the array is enforced at 2 (`[string, string?]` tuple).
- [x] build(Page): instead of hard-coding file list into the Page component's static props, load the file list from JSON. Modify the schema of `projects.json`: it either outputs a string filename of a post, or an {data, content}-formatted object. The order of cards in `projects.json` is preserved.
  - [x] update sample file
  - [x] rename to posts.json

## Build

Install Next.js (`next`, `react`, `react-dom`) and setup a project using the Pages Router (`/pages/index.tsx`).

Install TypeScript (`typescript`, `@types/node`, `@types/react`) and let Next.js set it up (`tsconfig.json`, `next-env.d.ts`)

Install ESLint (`eslint`, `eslint-config-next`, `eslint-config-prettier`) and set up extends.

```console
$ eslint --init
```

Install PostCSS (`postcss`, `postcss-nesting`) and set up plugins (`postcss.config.json`).

[Install TailwindCSS](https://tailwindcss.com/docs/installation/using-postcss) (`tailwindcss`), add to PostCSS configuration (`postcss.config.json`) and initialize (`tailwind.config.js`)

```console
$ tailwind init
```

[Modify global stylesheet](https://nextjs.org/docs/pages/building-your-application/styling/tailwind-css) to include Tailwind directives, and import the global stylesheet (`styles/globals.css`) to the app file (`pages/_app.js`). Can also import google fonts, set other global styles (i.e. fonts), etc. in the global stylesheet.
