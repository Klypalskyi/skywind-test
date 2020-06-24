export namespace PlayerService {
  /**
   * @interface PlayerService.Service
   * @author Jonathan Casarrubias <t: johncasarrubias>
   * @license MIT
   * @description PlayerService interface that provides types
   * for methods from the given gRPC PlayerService Service.
   */
  export interface Service {
    /**
     * @method PlayerService.Service.getPlayerByName
     * @author Jonathan Casarrubias <t: johncasarrubias>
     * @license MIT
     * @description PlayerService method declaration
     * from the given gRPC PlayerService service.
     */
    getPlayerByName(request: Body): Player;
  }
  /**
   * @namespace PlayerService.getPlayerByName
   * @author Jonathan Casarrubias <t: johncasarrubias>
   * @license MIT
   * @description PlayerService method configuration
   * from the given gRPC PlayerService service.
   */
  export namespace getPlayerByName {
    export const PROTO_NAME: string = 'player.proto';
    export const PROTO_PACKAGE: string = 'player';
    export const SERVICE_NAME: string = 'PlayerService';
    export const METHOD_NAME: string = 'getPlayerByName';
    export const REQUEST_STREAM: boolean = false;
    export const RESPONSE_STREAM: boolean = false;
  }
}
/**
 * @interface Body
 * @author Jonathan Casarrubias <t: johncasarrubias>
 * @license MIT
 * @description Body interface that provides properties
 * and typings from the given gRPC Body Message.
 */
export interface Body {
  name: string;
}
/**
 * @interface Player
 * @author Jonathan Casarrubias <t: johncasarrubias>
 * @license MIT
 * @description Player interface that provides properties
 * and typings from the given gRPC Player Message.
 */
export interface Player {
  name: string;
}
