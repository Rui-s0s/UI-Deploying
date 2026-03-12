# p-static-ui

A static page project for Cloudflare Workers.

## Project Structure

- `public/`: Contains the static HTML and CSS files.
- `wrangler.jsonc`: Configuration for Cloudflare Wrangler.

## Local Development

To run the project locally for development, use the following command:

```bash
npm run dev
```

This will start a local server using Wrangler, and you can view your pages at the provided local URL (usually `http://localhost:8787`).

## Deployment

To deploy the project to Cloudflare, use the following command:

```bash
npm run deploy
```

This will upload the static assets from the `public` directory to Cloudflare and deploy your worker.
