import migrationsRunner from 'node-pg-migrate';
import { join } from 'node:path';

export default async function migrations(req, res) {
  const migrations = await migrationsRunner({
    databaseUrl: process.env.DATABASE_URL,
    dryRun: true,
    dir: join('infra', 'migrations'),
    direction: 'up',
    verbose: true,
    migrationsTable: 'pgmigrations',
  });

  res.status(200).json(migrations);
}
