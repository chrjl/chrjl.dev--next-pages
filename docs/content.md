# Content

The Card component renders metadata from a `portfolio` object. The metadata is intended to come from frontmatter of blog posts, but, for now, the it is imported from a data file in the public directory (`public/portfolio.json`).

`portfolio.json` should be an array of project objects that have properly typed fields of interest. The current state of the project checks the schema of `portfolio.json` when checking Prop types of Components rendered with data from the file.

```ts
type Portfolio = Project[];

interface Project {
  title: string;
  description?: string;
  tags?: string[];
  links?: {
    repo?: string;
    assets?: { description: string; href: string }[];
    target?: string;
}
```

- [ ] TODO: Option to fetch portfolio object from external URL to use with `getStaticProps`.
- [ ] TODO: Parse metadata from files using `gray-matter`
- [ ] TODO: Use a content management system like `contentlayer`
