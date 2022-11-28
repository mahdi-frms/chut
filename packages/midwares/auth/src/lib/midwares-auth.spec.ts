import { midwaresAuth } from './midwares-auth';

describe('midwaresAuth', () => {
  it('should work', () => {
    expect(midwaresAuth()).toEqual('midwares-auth');
  });
});
