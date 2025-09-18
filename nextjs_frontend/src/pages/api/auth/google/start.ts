import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Redirect to backend Google OAuth initiation endpoint when available.
  const backend = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001';
  res.writeHead(302, { Location: `${backend}/auth/google/start` });
  res.end();
}
