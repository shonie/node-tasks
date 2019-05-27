const wait = require('../wait/1-wait');

const WATER_HEAT_CAPACITY = 4200;

class Machine {
  constructor(){this.switch = false};
  enable(){this.switch = true}

  disable(){this.switch = false}

}

class CoffeeMachine extends Machine {
  constructor(power, capacity) {
    super(); 
	this.waterAmount = 0;
	this.capacity = capacity;
	this.power = power;
}

  getTimeToBoil() {
    return this.waterAmount * WATER_HEAT_CAPACITY * 80 / this.power;
  }

  setWaterAmount(amount) {
	  if (amount => this.capacity)
		  this.waterAmount  = this.capacity;
	  else if (this.waterAmount + amount < this.capacity)
		  this.waterAmount += amount;
  }

  async run() {
		await wait(this.getTimeToBoil());

		try {
			const value = 5;

			const doDbRequest = () => Promise.resolve(value);

			await doDbRequest();

			if (!this.switch) {
				throw new Error('Machine is disabled');
			}

			if (Math.random() > 0.5) {
				throw new Error('Random error');
			}
			return this.waterAmount;
		} catch (error) {
			throw error;
		}
  }
}
module.exports = CoffeeMachine;
