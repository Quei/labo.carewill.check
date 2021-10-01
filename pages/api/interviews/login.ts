import { serialize } from 'cookie';
import type { NextApiRequest, NextApiResponse } from 'next';

const INTERVIEWS_LOGIN_COOKIE = 'interviews_login_cookie';
const maxAge = 60 * 60 * 24;

type Data = {
  login: boolean;
};

const validate = (password?: string) => {
  return (
    !!password && password === process.env.CONTENTFUL_LABO_INTERVIEWS_PASSWORD
  );
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { password } = req.body;
  const isPasswordValid = validate(password);

  if (req.method !== 'POST') {
    res.status(405).end();
  }
  if (isPasswordValid) {
    res.setHeader(
      'Set-Cookie',
      serialize(INTERVIEWS_LOGIN_COOKIE, 'ok', {
        maxAge,
        path: '/',
        expires: new Date(Date.now() + maxAge),
        sameSite: 'strict',
      })
    );
    res.status(200).json({
      login: true,
    });
  } else {
    res.status(200).json({
      login: false,
    });
  }
}
