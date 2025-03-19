import { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';

import { Pool } from 'pg';

const pool = new Pool({
  user: 'local_user2', // Substitua com o seu usuário do PostgreSQL
  host: 'localhost', // Endereço do servidor (ou IP)
  database: 'local_db', // Nome do banco de dados
  password: 'local_password', // Sua senha do PostgreSQL
  port: 5432,
});

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(getHandler);

export default router.handler();

async function getHandler(req: NextApiRequest, res: NextApiResponse) {
  const result = await pool.query('SELECT NOW()');

  res.status(200).json({
    result,
    status: 'ok',
    message: 'API is running',
    version: '1.0.0',
  });
}
