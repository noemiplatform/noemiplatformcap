# Noemi Platform Cap

This is a [Next.js](https://nextjs.org/) project bootstrapped with Vercel Web Analytics integration.

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then, run the development server:

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

## Vercel Web Analytics

This project includes [Vercel Web Analytics](https://vercel.com/analytics) for tracking visitor metrics. The Analytics component is integrated into the root layout (`app/layout.tsx`) using the Next.js App Router.

### Prerequisites for Analytics

1. A Vercel account
2. A Vercel project linked to this repository
3. Enable Web Analytics in your Vercel project dashboard

### Setup Instructions

The `@vercel/analytics` package is already included in `package.json`. After deploying to Vercel and enabling Web Analytics in your dashboard:

1. The Analytics component automatically tracks page views and Web Vitals
2. Visit your [Vercel dashboard](https://vercel.com/dashboard) and select this project
3. Click the **Analytics** tab to view your data
4. Data will appear after your site receives visitors

For more information, see the [Vercel Web Analytics documentation](https://vercel.com/docs/analytics).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
