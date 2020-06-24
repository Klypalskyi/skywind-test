import {config} from 'dotenv';
config();

import {ApplicationConfig, ServiceBApp} from './application';
export const main = async (options: ApplicationConfig = {}) => {
  const app = new ServiceBApp(options);
  await app.start();
  await app.migrateSchema();
  return app;
};

if (require.main === module) {
  const config = {
      // rest: {
      //   port: +(process.env.PORT ?? 3050),
      //   host: process.env.HOST ?? '0.0.0.0',
      // },
      grpc: {
        port: process.env.GRPC_PORT ?? 50051,
        host: process.env.GRPC_HOST ?? '0.0.0.0' 
      },
  };
  main(config)
  .then(() => {
    // console.info(`Service B is on host ${config.rest.host} and port ${config.rest.port}`);
    console.info(`Service B gRPC is on port ${config.grpc.port}`);
    console.info('MemSQL database is ready for requests.')
  })
  .catch(err => {
    console.error('Cannot start the application.', err.message ?? err);
    process.exit(1);
  });
}
