# Content

> **Todo:**
>
> - [x] TODO: Convert data import to `getStaticProps`
> - [x] TODO: Parse metadata from files using `gray-matter`
> - [x] TODO: Aggregate json and md data into a single object
> - [ ] TODO: Page component (index.jsx) to TypeScript
> - [ ] TODO: Sort and filter methods
> - [ ] TODO: Option to fetch portfolio object from external URL
> - [ ] TODO: Use a content management system like `contentlayer`

The Card component renders `project` data objects from a `portfolio` array.

```ts
type Portfolio = Project[];
```

In the convention of `gray-matter`, the `project` objects' metadata is stored in its `data` object, and content is stored as a string in the `content` field. Markdown is supported in the `content` field, which gets parsed into HTML using `react-markdown`.

```ts
interface Project {
  content?: string;
  data: {
    title: string | [string, string?];
    tags?: string[];
    links?: Link[];
  };
}

interface Link {
  repo?: string[];
  target?: string;
  assets?: {
    description: string;
    href: string;
  }[];
}
```

## Sources

The `portfolio` array is built from a `posts` array and is sent to the `Page` component during build via `getStaticProps`.

- `posts/index.json`

  The `posts` array lists markdown filenames to be published and/or inlines properly typed project objects. Posts and projects will be published in order.

  ```ts
  type Posts = (string | Project)[];
  ```

- `.md` posts in `posts/` directory

  `String` type elements of the `posts` array (i.e. filenames) are replaced with the `gray-matter`-parsed content of their respective files. One project per post.

The current state of the project does not validate the schema of `portfolio` object members until checking Prop types of Components rendered with data from the file.
