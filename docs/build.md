# Next.js with Pages Router

Mount or copy a `portfolio.json` to `public/portfolio.json`. More about content sources: [[content]].

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

The provided Docker Compose file mounts a local file to `public/portfolio.json` and runs the Next.js dev server (`npx next dev`) behind an externally managed Traefik reverse proxy via an externally managed network.

To run the Compose service without the Traefik reverse proxy:

- Disconnect the `server` service from the `proxy` network, and delete the `proxy` network. Compose will set up a bridge network for the app.
- Delete the Traefik-specific labels from the `server` service
- Publish port 3000 from the `server` service
