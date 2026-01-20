# Noe MI Platform Cap - Vercel Web Analytics

This project demonstrates the implementation of Vercel Web Analytics as documented in the [Vercel Web Analytics Getting Started Guide](https://vercel.com/docs/analytics).

## Overview

This is a Next.js application with Vercel Web Analytics integrated to track page views and performance metrics.

## Features

- ✅ Next.js 15 with App Router
- ✅ Vercel Web Analytics integrated
- ✅ TypeScript support
- ✅ Tailwind CSS ready configuration
- ✅ ESLint configuration

## Getting Started

### Prerequisites

- Node.js 18+ or pnpm
- A Vercel account (required for analytics dashboard)

### Installation

1. Install dependencies:

```bash
pnpm install
```

or with npm:

```bash
npm install
```

or with yarn:

```bash
yarn install
```

or with bun:

```bash
bun install
```

### Development

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Building

Build the application:

```bash
pnpm build
```

Start the production server:

```bash
pnpm start
```

## Vercel Web Analytics Implementation

### 1. Package Installation

The `@vercel/analytics` package has been added to `package.json`:

```json
{
  "dependencies": {
    "@vercel/analytics": "^1.4.0"
  }
}
```

### 2. Analytics Component Integration

The `Analytics` component has been imported and added to the root layout (`app/layout.tsx`):

```tsx
import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

This automatically tracks:
- Page views
- Route changes
- Web Core Vitals
- User interactions

### 3. Enabling in Vercel Dashboard

To enable Vercel Web Analytics:

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Click the **Analytics** tab
4. Click **Enable** to activate Web Analytics

### 4. Deployment

Deploy to Vercel:

```bash
vercel deploy
```

Once deployed, Vercel Web Analytics will automatically:
- Track all visitors and page views
- Record Web Core Vitals
- Provide real-time analytics data

### 5. Viewing Analytics Data

After deployment, view your analytics:

1. Go to your project dashboard on Vercel
2. Click the **Analytics** tab
3. View real-time visitors, page views, and performance metrics

> **Note:** Analytics data starts appearing within a few hours of deployment.

## Supported Frameworks

This implementation uses Next.js with the App Router. The `@vercel/analytics` package also supports:

- Next.js (Pages Router & App Router)
- Remix
- Create React App
- Nuxt
- Vue
- SvelteKit
- Astro
- Plain HTML
- Custom frameworks (using the `inject` function)

For other frameworks, refer to the [Vercel Analytics documentation](https://vercel.com/docs/analytics).

## Key Features of Vercel Web Analytics

- **No Configuration Required**: Automatically tracks page views and route changes
- **Privacy Compliant**: No cookies by default, GDPR compliant
- **Web Core Vitals**: Built-in tracking of LCP, FID, and CLS
- **Real-time Dashboard**: View live visitor data
- **Custom Events**: Add Pro/Enterprise plans for custom event tracking
- **Filtering**: Filter data by page, country, device, etc.

## Analytics Routes

When Web Analytics is enabled, Vercel creates routes scoped at `/_vercel/insights/*`. These routes are:

- `/_vercel/insights/view` - For tracking page views
- `/_vercel/insights/script.js` - The tracking script

## Environment Variables

No additional environment variables are required for basic Web Analytics functionality.

For advanced configurations, see the [@vercel/analytics package documentation](https://vercel.com/docs/analytics/package).

## Project Structure

```
├── app/
│   ├── layout.tsx           # Root layout with Analytics component
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── package.json             # Project dependencies and scripts
├── next.config.ts           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
├── .eslintrc.json           # ESLint configuration
├── vercel.json              # Vercel deployment configuration
└── README.md                # This file
```

## Learn More

- [Vercel Web Analytics Documentation](https://vercel.com/docs/analytics)
- [Next.js Documentation](https://nextjs.org/docs)
- [@vercel/analytics Package](https://www.npmjs.com/package/@vercel/analytics)
- [Web Core Vitals](https://web.dev/vitals/)
- [Vercel Privacy Policy](https://vercel.com/legal/privacy-policy)

## Troubleshooting

### Analytics not appearing

1. Verify that the `<Analytics />` component is in your root layout
2. Check that `@vercel/analytics` is installed: `npm list @vercel/analytics`
3. In browser DevTools Network tab, look for requests to `/_vercel/insights/view`
4. Ensure your site is deployed to Vercel (analytics only work on Vercel deployments)

### Performance impact

The analytics script is lightweight (~5KB gzipped) and has minimal performance impact.

## Support

For issues or questions:

- [Vercel Support](https://vercel.com/support)
- [GitHub Issues](https://github.com/noemiplatform/noemiplatformcap/issues)
- [Vercel Discord Community](https://discord.gg/vercel)

## License

Private project - All rights reserved.
