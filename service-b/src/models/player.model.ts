import {Entity, model, property} from '@loopback/repository';

@model()
export class Player extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  name: string;


  constructor(data?: Partial<Player>) {
    super(data);
  }
}


export type PlayerWithRelations = Player;
