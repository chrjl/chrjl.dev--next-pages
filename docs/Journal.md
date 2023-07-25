# Unsorted notes

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
