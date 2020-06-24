import {Player} from '../../models';

export namespace player {
  export interface PlayerService {
    getPlayerByName(name: Body): Promise<Player>;
  }
  export namespace getPlayerByName {
    export const RESPONSE_STREAM: boolean = false;
    export const REQUEST_STREAM: boolean = false;
    export const PROTO_PACKAGE: string = 'player';
    export const SERVICE_NAME: string = 'PlayerService';
    export const METHOD_NAME: string = 'getPlayerByName';
    export const PROTO_NAME: string = 'player.proto';
  }
}
export interface Body {
  name: string;
}