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

  run() {
	return new Promise((resolve, reject) =>
	{
		if(this.switch == false)
			return reject();
		setTimeout(()=> {
		  console.log('Coffee is ready');
		  try {
			if (Math.random() > 0.5) {
				throw new Error('Random error');
			}
				return resolve(this.waterAmount);
		  }catch (error){
		    return reject();	
		  }
		}, this.getTimeToBoil());	
	})
  }
}
module.exports = CoffeeMachine;

