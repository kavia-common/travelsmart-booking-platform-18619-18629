This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
# Default port is 3002 now to avoid conflicts with other services using 3000
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open http://localhost:3002 with your browser to see the result (or your chosen port).

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Ports and Conflicts

- The app respects the `PORT` environment variable.
- By default, it runs on port `3002` to avoid collisions with other dev services on `3000`.

Override the port:
```bash
# Run on 3000 explicitly (if available)
PORT=3000 npm run dev

# Or pick any other free port
PORT=3010 npm run dev
```

Identify what is using port 3000:
```bash
# macOS
lsof -i :3000

# Linux
ss -lntp | grep :3000
# or
lsof -i :3000

# Windows (PowerShell)
netstat -ano | findstr :3000
```

Kill the offending process (use with care):
```bash
# macOS/Linux (replace <PID>)
kill -9 <PID>

# Windows (replace <PID>)
taskkill /PID <PID> /F
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
