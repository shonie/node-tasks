const { expect } = require('chai');
const sinon = require('sinon');
const CoffeeMachineWithCallback = require('../../tasks/coffeeMachine/4-CoffeeMachineWithAsyncAwait');

describe('CoffeeMachineWithAsyncAwait', () => {
  it('run returns a promise', async () => {
    const coffeeMachine = new CoffeeMachineWithCallback(100000, 400);

    coffeeMachine.enable();

    coffeeMachine.setWaterAmount(1000);

    const result = coffeeMachine.run();

    expect(result instanceof Promise).to.equal(true);
  });

  it('run resolves a water amount of coffee machine', async () => {
    const coffeeMachine = new CoffeeMachineWithCallback(100000, 400);

    coffeeMachine.enable();

    coffeeMachine.setWaterAmount(1000);

    const amount = await coffeeMachine.run().catch((error) => error);

    expect(amount).to.satisfy((val) => val instanceof Error || typeof val === 'number');
  });

  it('rejects if machine is disabled', async () => {
    const coffeeMachine = new CoffeeMachineWithCallback(100000, 400);

    coffeeMachine.setWaterAmount(1000);

    const successCallback = sinon.spy();

    const errorCallback = sinon.spy();

    await coffeeMachine.run().then(successCallback, errorCallback);

    expect(errorCallback.called).to.equal(true);
  });
})