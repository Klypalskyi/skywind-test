import {ServiceBApp} from './application';

export async function migrate(args: string[]) {
  const existingSchema = args.includes('--rebuild') ? 'drop' : 'alter';
  console.info('Migrating schemas (%s existing schema)', existingSchema);

  const app = new ServiceBApp({});
  await app.migrateSchema({existingSchema});
  process.exit(0);
}

migrate(process.argv).catch(err => {
  console.error('Cannot migrate database schema', err.message ?? err);
  process.exit(1);
});
