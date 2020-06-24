import {bind, BindingScope} from '@loopback/core';
import * as grpc from 'grpc';
import {join} from 'path';
import {Player} from '../interfaces';

// const { SERVICE_B_GRPC } = process.env;
// const {GRPC_URL as typeof string} = process.env; // `:${SERVICE_B_GRPC}`;

const url = process.env.GRPC_URL ?? '0.0.0.0:50051'

const getClient = () => {
  const protoPath: string = join(
    __dirname,
    '..',
    '..',
    'proto',
    'player.proto',
  );
  const proto = grpc.load(protoPath)['player'] as grpc.GrpcObject;
  const client = proto.PlayerService as typeof grpc.Client;
  console.info(`Request to ${url}`);
  return new client(`${url}`, grpc.credentials.createInsecure());
};

const asyncCall = async (input: {
  client: grpc.Client;
  method: string;
  data: object;
}): Promise<Player> => {
  const client = input.client as any;
  return new Promise<Player>((resolve, reject) =>
    client[input.method](input.data, (err: Error | null, response: Player) =>
      err ? reject(err) : resolve(response),
    ),
  );
};

@bind({scope: BindingScope.TRANSIENT})
export class PlayerService {
  public client: grpc.Client;

  constructor() {
    this.client = getClient();
  }

  getPlayerByName(name: string): Promise<Player> {
    return asyncCall({
      client: this.client,
      method: 'getPlayerByName',
      data: {
        name,
      },
    });
  }
}
