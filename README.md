# brandeck 2

This is the data-driven card generator tool used for Winding Road Games projects.

Google Drive structure (per game):
```
root_folder
  /generated
    /v1.0-timestamped
      1.png
      2.png
      ...
  /v1
    /.0
      cards*
    /.1
      cards*
    ...
  /v2
    /.0
      cards*
    ...
  /art
    .*
```

The templates and other logic for each game all live under _games/[game]

Importing a spreadsheet and rendering the cards is done generically.

```
Config:
```
SERVICE_ACCOUNT_EMAIL
SERVICE_ACCOUNT_KEY
(GAMENAME)_ROOT_ID = the root Google Drive folder containing card spreadsheets in a known structure
```
Pages:

/[game]/cards/[Major].[Minor] - Renders the cards for vMajor.Minor using the appropriate templates

API:

/api/[game]/generate/[Major].[Minor] - import, parse, render, screenshot, and upload to a known location

# Add a new version

1. npm run newver [game] 
  ex: npm run newver astromon

===

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
