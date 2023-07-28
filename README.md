# Next.js with Pages Router

Mount or copy content to `src/posts`:

- `index.json` (required) array that lists the filenames to be published and/or contains (inline) properly typed project objects.
- Markdown `content` with properly-typed frontmatter `data`.

Then generate a static export (default out directory is `out/`).

```console
$ npx next build
$ npx next export [-o $OUTDIR]
```

The current state of the project does not check the schema of `portfolio` objects until typechecking of Prop types of Components rendered with data from the file.

```ts
type Posts = (string | Project)[]
type Portfolio = Project[];
```

```ts
interface Project {
  content?: string;
  data: {
    title: string;
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

## Docker Compose dev server

The provided Docker Compose file mounts the `posts/` directory to `src/posts` and runs the Next.js dev server (`npx next dev`) behind an externally managed Traefik reverse proxy via an externally managed network.

To run the Compose service without the Traefik reverse proxy:

- Disconnect the `server` service from the `proxy` network, and delete the `proxy` network. Compose will set up a bridge network for the app.
- Delete the Traefik-specific labels from the `server` service
- Publish port 3000 from the `server` service
