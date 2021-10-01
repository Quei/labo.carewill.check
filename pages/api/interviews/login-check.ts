import { serialize } from 'cookie';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  login: boolean;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    res.status(405).end();
  }
  const { interviews_login_cookie } = req.cookies;
  if (interviews_login_cookie === 'ok') {
    res.status(200).json({
      login: true,
    });
  } else {
    res.status(200).json({
      login: false,
    });
  }
}
