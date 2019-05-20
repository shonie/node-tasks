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

  // Этот метод должен заливать воду в кофемашинку, в нее нельзя залить воды больше ее capacity
  setWaterAmount(amount) {
	  if (amount => this.capacity)
		  this.waterAmount  = this.capacity;
	  else if (this.waterAmount + amount < this.capacity)
		  this.waterAmount += amount;
  }

  // 1. Этот метод должен через время расчитанное методом getTimeToBoil вывести в консоль 'Кофе готов' после чего вызвать ф-цию callback
  // 2. Он не должен ничего делать в случае, если машинка выключена
  // 3. Должен прокидывать ошибку первым аргументом в коллбек, а вторым количество воды this.waterAmount
  run(callback) {
	if (this.switch == false)
		return;
    setTimeout(() => {
      console.log('Coffee is ready');

      try {
        if (Math.random() > 0.5) {
          throw new Error('Random error');
        }
			callback(null, this.waterAmount);
        // Execute callback with error = null and this.waterAmount as everything is ok
      } catch(error) {
			callback(error, null);
        // Execute callback with error on a first position and this.waterMount on the second position
      }
    }, this.getTimeToBoil());
  }
}

module.exports = CoffeeMachine;

