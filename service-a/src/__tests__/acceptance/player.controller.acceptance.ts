import {ServiceAApp} from '../..';
import {Client, expect} from '@loopback/testlab';
import {setupApplication} from './test-helper';

describe('PlayerController', () => {
  let app: ServiceAApp;
  let client: Client;

  before('setupApplication', async () => {
    ({app, client} = await setupApplication());
  });

  after(async () => {
    await app.stop();
  });

  it('GET /players/me', async () => {
    const res = await client.get('/players/me').expect(200);
    expect(res.body.name).to.equal('me');
  });

  it('GET /players/mike', async () => {
    await client.get('/players/mike').expect(404);
  });
});
