# Coffee Atlas

Coffee Atlas is a static React experience exploring coffee types, origins,
brewing methods, recipes, and history. All educational content is bundled with
the frontend, so the site does not require a backend, database, or runtime
environment variables.

## Run locally

```bash
cd frontend
yarn install
yarn start
```

## Production build

```bash
cd frontend
yarn install
yarn build
```

The production files are written to `frontend/build`.

## Deploy on Vercel

Import this repository in Vercel and use these project settings:

- Root Directory: `frontend`
- Framework Preset: Create React App
- Install Command: `yarn install`
- Build Command: `yarn build`
- Output Directory: `build`

No environment variables are required. The contact and newsletter forms are
presentational placeholders and clearly report that they are not connected.
