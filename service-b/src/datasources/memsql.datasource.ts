import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'memsql',
  connector: 'mysql',
  url: process.env.MEM_DB_URL,
};

@lifeCycleObserver('datasource')
export class MemsqlDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'memsql';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.memsql', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
