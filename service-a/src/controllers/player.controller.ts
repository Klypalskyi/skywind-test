import {service} from '@loopback/core';
import {get, param, HttpErrors} from '@loopback/rest';
import {PlayerService} from '../services';
import {Player} from '../interfaces';

export class PlayerController {
  constructor(
    @service(PlayerService)
    public playerService: PlayerService,
  ) {}

  @get('/players/{name}')
  async getPlayerByName(
    @param.path.string('name') name: string,
  ): Promise<Player> {
    try {
      const result = await this.playerService.getPlayerByName(name);
      return result;
    } catch (error) {
      console.error(error);
      const message = error.details ?? error;
      throw new HttpErrors.NotFound(message);
    }
  }
}
