// pages/api/complaints.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { ComplaintResponse } from '../../lib/types';

const handler = (req: NextApiRequest, res: NextApiResponse<ComplaintResponse[]>) => {
  const complaints: ComplaintResponse[] = [ /* Your JSON data here */ ];
  res.status(200).json(complaints);
};

export default handler;
