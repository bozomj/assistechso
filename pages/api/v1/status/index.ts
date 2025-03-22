import { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';

import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST, // Endereço do servidor (ou IP)
  database: process.env.POSTGRES_BD, // Nome do banco de dados
  password: process.env.POSTGRES_PASSWORDS, // Sua senha do PostgreSQL
  port: 5432,
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
