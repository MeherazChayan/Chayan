# Md. Meheraz Hossain Chayan — Research Portfolio

A responsive, single-page academic portfolio built with React, TypeScript, Tailwind CSS, Vite, and Lucide React.

## Run locally

```bash
npm install
npm run dev
```

Create the production build with `npm run build`; the output is written to `dist/`.

## Content and assets

- Portfolio content is maintained in `src/data.ts`.
- Page composition is in `src/App.tsx`.
- The approved professional portrait is stored at `public/portrait.jpg`.
- BRAC University and University of Canberra logos are sourced from their official public brand/media pages. Other organizations use text identity labels where an official, publicly authorized asset was not available.
- Referee emails are intentionally not displayed until public-display approval is confirmed.
- The Download CV button serves `public/Meheraz_Research_Portfolio_Final_Reviewed.docx`.

## GitHub Pages

1. Run `npm run build`.
2. Deploy the `dist/` directory with a GitHub Actions Pages workflow or a tool such as `gh-pages`.
3. Vite uses a relative base (`./`), so the build works under a repository subpath.

For a custom domain, add the domain as `public/CNAME` before building.
