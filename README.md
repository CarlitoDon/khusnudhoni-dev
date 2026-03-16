# khusnudhoni-dev

Portfolio website built with Next.js.

## Local Development

```bash
npm install
npm run dev
```

Default local URL: `http://localhost:3000`

## Production Deployment (Vercel)

Production is deployed on Vercel.

Current production alias:
- `https://khusnudhoni-dev.vercel.app`

Custom domains attached in Vercel:
- `khusnudhoni.online`
- `www.khusnudhoni.online`

### DNS Setup on Hostinger (Niagahoster)

In Hostinger DNS Zone for `khusnudhoni.online`, set:

- Type: `A`
- Name: `@`
- Value: `76.76.21.21`

- Type: `A`
- Name: `www`
- Value: `76.76.21.21`

Then wait for propagation and verify in Vercel Domains panel.

## GitHub Actions

Workflows in `.github/workflows/`:

- `ci.yml`: lint + build on PR and push to `main`
- `deploy-vercel.yml`: deploy to Vercel on push to `main`

### Required GitHub Secrets

Set these repository secrets:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

You can get org/project IDs from:

```bash
cat .vercel/project.json
```
