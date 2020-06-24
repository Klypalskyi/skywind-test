export namespace player {
  export interface PlayerService {
    getPlayerByName(name: Body): Promise<Player>;
  }
  export namespace getPlayerByName {
    export const PROTO_NAME = 'player.proto';
    export const PROTO_PACKAGE = 'player';
    export const SERVICE_NAME = 'PlayerService';
    export const METHOD_NAME = 'getPlayerByName';
    export const REQUEST_STREAM = false;
    export const RESPONSE_STREAM = false;
  }
}
export interface Body {
  name: string;
}
export interface Player {
  name: string;
}
