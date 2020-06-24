import {Application as CoreApplication} from '@loopback/core';
// import {RestComponent} from '@loopback/rest';
import {GrpcComponent} from '@loopback/grpc';
import {ApplicationConfig} from '@loopback/core';
import {RepositoryMixin, SchemaMigrationOptions} from '@loopback/repository';
import {MemsqlDataSource} from './datasources';
import {PlayerController} from './controllers';
import {PlayerRepository} from './repositories';

export { ApplicationConfig }

export class ServiceBApp extends RepositoryMixin(CoreApplication) {
  constructor(options: ApplicationConfig) {
    super(options);
    // this.component(RestComponent);
    this.component(GrpcComponent);
    this.dataSource(MemsqlDataSource);
    this.repository(PlayerRepository);
    this.controller(PlayerController);
  }

  async migrateSchema(options?: SchemaMigrationOptions) {
    await super.migrateSchema(options);

    const playerRepo = await this.getRepository(PlayerRepository);
    const exist = await playerRepo.findOne({where: {name: 'me'}});
    const allData = await playerRepo.find();
    console.info('Checking the Player Table for logs');
    console.table(allData);
    if (exist) {
      console.info('Istance already exists');
      console.table(exist);
    } else {
      await playerRepo.create({name: 'me'});
    }
  }
}
