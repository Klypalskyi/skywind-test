import {grpc } from '@loopback/grpc';
import {repository, FilterExcludingWhere } from '@loopback/repository';
import {param } from '@loopback/rest';
import {PlayerRepository } from '../repositories';
import {player, Body } from '../interfaces';
import {Player} from '../models';

export class PlayerController implements player.PlayerService {
  constructor(
    @repository(PlayerRepository)
    public playerRepository : PlayerRepository,
  ) {}

  @grpc(player.getPlayerByName)
  async getPlayerByName(
    request: Body,
    @param.filter(Player, {exclude: 'where'}) filter?: FilterExcludingWhere<Player>
  ): Promise<Player> {
    const { name } = request;
    console.info('Reqeust from Service A');
    return this.playerRepository.findById(name, filter);
  }
}