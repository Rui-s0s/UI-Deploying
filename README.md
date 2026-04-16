# Trade Connect - Static UI Showcase

A high-performance frontend showcase for a trade job connection platform (plumbing, electrician, masonry, and more). This project is designed to demonstrate advanced CSS and HTML layouts, built with Hono and deployed on the Cloudflare Developer Platform.

## Features

- **Responsive Design:** Optimized for both desktop and mobile devices.
- **Retro Aesthetic:** A unique Web 1.0 / Brutalist-inspired design featuring ASCII art and a classic color palette.
- **Trade Categories:** Showcase of various trade jobs like plumbing, electrical work, and masonry.
- **Clean UI:** Minimalist and efficient layout focusing on user experience.
- **Cloudflare Native:** Built to run on Cloudflare Workers for global performance.

## Tech Stack

- **[Hono](https://hono.dev/):** Lightweight web framework for the Edge.
- **[Vite](https://vitejs.dev/):** Fast development and build tool.
- **[Cloudflare Workers](https://workers.cloudflare.com/):** Serverless platform for deployment.
- **[D1 Database](https://developers.cloudflare.com/d1/):** Cloudflare's native SQL database (optional setup).
- **TypeScript:** For type-safe development.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (latest LTS recommended)
- [npm](https://www.npmjs.com/)
- A [Cloudflare Account](https://dash.cloudflare.com/sign-up)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Local Development

To start the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Alternatively, to simulate the Cloudflare Workers environment locally:

```bash
npm start
```

## Deployment to Cloudflare

Deploying this project to your own Cloudflare account is straightforward using [Wrangler](https://developers.cloudflare.com/workers/wrangler/).

### 1. Login to Cloudflare
```bash
npx wrangler login
```

### 2. Setup D1 Database (Optional)
The project includes a configuration for a D1 database. To create it:
```bash
npx wrangler d1 create my-db
```
Take the `database_id` from the output and update it in your `wrangler.jsonc` file:
```jsonc
"d1_databases": [
  {
    "binding": "DB",
    "database_name": "my-db",
    "database_id": "YOUR_NEW_DATABASE_ID"
  }
]
```

To initialize the schema:
```bash
npx wrangler d1 execute my-db --file=./schema.sql --remote
```

### 3. Deploy
Run the following command to build and deploy your application:
```bash
npm run deploy
```

Once finished, Wrangler will provide you with a `*.workers.dev` URL where your site is live.

## Project Structure

- `src/`: Application logic and components.
  - `layouts/`: Page templates (Home, FAQ, etc.).
  - `routes/`: Routing logic.
  - `index.tsx`: Application entry point.
- `public/`: Static assets (CSS, images).
- `wrangler.jsonc`: Cloudflare Workers configuration.
- `schema.sql`: Database schema definition.


## Lighthouse Setup
```bash
npx unlighthouse --site YOUR_SITE
```