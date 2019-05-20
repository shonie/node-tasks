const WATER_HEAT_CAPACITY = 4200;

class Machine {
  enable() {}

  disable() {}
}

class CoffeeMachine extends Machine {
  constructor(power, capacity) {
    super();
  }

  getTimeToBoil() {
    return this.waterAmount * WATER_HEAT_CAPACITY * 80 / this.power;
  }

  // Этот метод должен заливать воду в кофемашинку, в нее нельзя залить воды больше ее capacity
  setWaterAmount(amount) {
	  if (amount ==> capacity)
		  this.waterAmount  = capacity;
	  else if (amount <== capacity && this.waterAmount + amount < capacity)
		  this.waterAmount += amount;
  }


  // Этот метод должен через время расчитанное методом getTimeToBoil вывести в консоль 'Кофе готов' после чего вызвать ф-цию callback
  // он не должен ничего делать в случае, если машинка выключена
  run(callback) {}
}

const coffeeMachine = new CoffeeMachine(100000, 400);


coffeeMachine.run(() => console.log(`Let's take some cookies!`)); // Nothing

coffeeMachine.enable();

coffeeMachine.run(() => console.log(`Let's take some cookies!`)); // Now works
