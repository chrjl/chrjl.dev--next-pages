# Next.js with Pages Router

Mount or copy a `portfolio.json` to `public/portfolio.json`, then generate a static export. Default out directory is `out/`.

```console
$ npx next build
$ npx next export [-o $OUTDIR]
```

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

## Docker Compose dev server

The provided Docker Compose file mounts a local file to `public/portfolio.json` and runs the Next.js dev server (`npx next dev`) behind an externally managed Traefik reverse proxy via an externally managed network.

To run the Compose service without the Traefik reverse proxy:

- Disconnect the `server` service from the `proxy` network, and delete the `proxy` network. Compose will set up a bridge network for the app.
- Delete the Traefik-specific labels from the `server` service
- Publish port 3000 from the `server` service
