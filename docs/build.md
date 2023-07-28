# Next.js with Pages Router

Mount or copy a `index.json` and optionally a collection of markdown posts to `src/posts`.

> **Note:**
> More about content sources and data types: [[content]].
>
> Metadata should be included in the frontmatter of markdown posts. Content should be included in the `content` field of `index.json` component objects.

Then, generate a static export. Default out directory is `out/`.

```console
$ npx next build
$ npx next export [-o $OUTDIR]
```

Or run the dev server (default port 3000).

```console
$ npx next dev
```

## Docker Compose dev server

The provided Docker Compose file mounts the `posts/` directory to `src/posts` and runs the Next.js dev server (`npx next dev`) behind an externally managed Traefik reverse proxy via an externally managed network.

To run the Compose service without the Traefik reverse proxy:

- Disconnect the `server` service from the `proxy` network, and delete the `proxy` network. Compose will set up a bridge network for the app.
- Delete the Traefik-specific labels from the `server` service
- Publish port 3000 from the `server` service
