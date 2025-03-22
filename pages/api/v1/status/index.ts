import { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';

import { Pool } from 'pg';

const isProduction = process.env.NODE_ENV === 'production';

const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT ? parseInt(process.env.POSTGRES_PORT) : 5432,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORDS,
  database: process.env.POSTGRES_DB,
  ssl: isProduction ? { rejectUnauthorized: false } : false,
});

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(getHandler);

export default router.handler();
async function getHandler(req: NextApiRequest, res: NextApiResponse) {
  const result = await pool.query('SELECT NOW()');

  res.status(200).json({
    result: result['rows'],
    status: 'ok',
    message: 'API is running',
    version: '1.0.0',
  });
}
