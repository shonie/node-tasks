const { expect } = require('chai');
const wait = require('../../tasks/wait/1-wait');

describe('wait', () => {
  it('wait resolves only after specified timeout', async () => {
    const t0 = Date.now();

    await wait(100);

    const t1 = Date.now();

    expect(t1 - t0).to.be.greaterThan(100);
  })
})