// pages/api/some-api.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import run from '../../lib/dbconnect';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await run();
  res.status(200).json({ message: 'Connected to MongoDB!' });
}
