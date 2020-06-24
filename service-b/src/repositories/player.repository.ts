import {DefaultCrudRepository} from '@loopback/repository';
import {Player} from '../models';
import {MemsqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PlayerRepository extends DefaultCrudRepository<
  Player,
  typeof Player.prototype.name
> {
  constructor(
    @inject('datasources.memsql') dataSource: MemsqlDataSource,
  ) {
    super(Player, dataSource);
  }
}
