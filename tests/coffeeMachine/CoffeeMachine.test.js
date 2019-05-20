const { expect } = require('chai');
const CoffeeMachineWithCallback = require('../../tasks/coffeeMachine/1-CoffeeMachineWithCallback');

describe('CoffeeMachineWithCallback', () => {
  it('boils coffee in a correct time', () => {
    const coffeeMachine = new CoffeeMachineWithCallback(100000, 400);

    coffeeMachine.enable();

    coffeeMachine.setWaterAmount(1000);

    const t0 = Date.now();

    coffeeMachine.run(() => {
      const t1 = Date.now();

      expect(t1 - t0).to.be.at.least(3360);
    })
  });
})