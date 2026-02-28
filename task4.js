// 1.Родительская функция-конструктор
function ElectricalAppliance(name, power) {
  this.name = name;
  this.power = power;
  this.isPlugged = false;
}

ElectricalAppliance.prototype.plugIn = function () {
  this.isPlugged = true;
  console.log(`${this.name} включен(а) в розетку.`);
};

ElectricalAppliance.prototype.unplug = function () {
  this.isPlugged = false;
  console.log(`${this.name} выключен(а) из розетки.`);
};

// 2. Дочерние функции-конструкторы
// Конструктор для Лампы
function DeskLamp(name, power, bulbType) {
  ElectricalAppliance.call(this, name, power);
  this.bulbType = bulbType;
}

// Наследование прототипа
DeskLamp.prototype = Object.create(ElectricalAppliance.prototype);
DeskLamp.prototype.constructor = DeskLamp;

// Собственный метод лампы
DeskLamp.prototype.adjustBrightness = function (level) {
  if (this.isPlugged) {
    console.log(`${this.name}: яркость установлена на ${level}%.`);
  } else {
    console.log(`${this.name}: сначала включите лампу в розетку!`);
  }
};

// Конструктор для Компьютера
function Computer(name, power, cpuModel) {
  ElectricalAppliance.call(this, name, power);
  this.cpuModel = cpuModel;
}

Computer.prototype = Object.create(ElectricalAppliance.prototype);
Computer.prototype.constructor = Computer;

// Собственный метод компьютера
Computer.prototype.playGame = function (gameName) {
  if (this.isPlugged) {
    console.log(
      `${this.name} запускает игру "${gameName}" на процессоре ${this.cpuModel}.`,
    );
  } else {
    console.log(`${this.name}: нет питания. Подключите к розетке!`);
  }
};

// 3. Создание экземпляров
const myLamp = new DeskLamp("Настольная лампа IKEA", 60, "LED");
const myPC = new Computer("Игровой ПК", 500, "Intel Core i7");

// 4. Проверяем созданные объекты
console.log("Созданные объекты:");
console.log(myLamp);
console.log(myPC);

// 5. Работа с приборами
console.log("\n--- Тестирование работы ---");

// Включаем лампу
myLamp.plugIn();
myLamp.adjustBrightness(75);

// Тестим компьютер без питания
myPC.playGame("Cyberpunk 2077");

// Включаем компьютер
myPC.plugIn();
myPC.playGame("Cyberpunk 2077");

// Выключаем лампу
myLamp.unplug();
myLamp.adjustBrightness(50);

// 6. Подсчет мощности
console.log("\n--- Подсчет потребляемой мощности ---");

function calculateTotalPower(appliances) {
  let total = 0;
  for (let appliance of appliances) {
    if (appliance.isPlugged) {
      total += appliance.power;
    }
  }
  console.log(`Общая потребляемая мощность включенных приборов: ${total} Вт.`);
  return total;
}

const allAppliances = [myLamp, myPC];
calculateTotalPower(allAppliances);
