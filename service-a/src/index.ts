import {promises} from 'dns';
const resolver = new promises.Resolver();

import {ApplicationConfig, ServiceAApp} from './application';

export * from './application';

export async function main(options: ApplicationConfig = {}) {
  const app = new ServiceAApp(options);
  resolver.setServers([process.env.HOST ?? '0.0.0.0']);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.info(`Try it on ${url}/explorer`);

  return app;
}

if (require.main === module) {
  const config = {
    rest: {
      port: +(process.env.PORT ?? 3000),
      host: process.env.HOST ?? '0.0.0.0',
      gracePeriodForClose: 5000,
      openApiSpec: {
        setServersFromRequest: true,
      },
    },
  };
  main(config)
    .then(() => {
      console.info(
        `Service A is on host ${config.rest.host} and port ${config.rest.port}`,
      );
    })
    .catch(err => {
      console.error('Cannot start the application.', err);
      process.exit(1);
    });
}
