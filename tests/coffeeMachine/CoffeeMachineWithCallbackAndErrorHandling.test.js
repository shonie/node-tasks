const { expect } = require('chai');
const sinon = require('sinon');
const CoffeeMachineWithCallback = require('../../tasks/coffeeMachine/2-CoffeeMachineWithCallbackAndError');

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

describe('CoffeeMachineWithCallbackAndErrorHandling', () => {
  it('passes error as a first argument to the callback', async () => {
    const coffeeMachine = new CoffeeMachineWithCallback(100000, 400);

    coffeeMachine.enable();

    coffeeMachine.setWaterAmount(1000);

    const callback = sinon.spy();

    coffeeMachine.run(callback);

    await wait(coffeeMachine.getTimeToBoil());

    console.log(callback.called)

    expect(callback.called).to.equal(true);

    expect(callback.getCall(0).args[0]).to.satisfy((val) => val instanceof Error || val === null);
  });
})