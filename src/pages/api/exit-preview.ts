import { NextApiRequest, NextApiResponse } from 'next';

export default async (
  _: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  res.clearPreviewData();

  res.writeHead(307, { Location: '/' });
  res.end();
};
