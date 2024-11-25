// 1. Реализуйте класс Worker (Работник), который будет иметь
// следующие свойства: name (имя), surname (фамилия), rate
// (ставка за день работы), days (количество отработанных дней).
// Также класс должен иметь метод getSalary(), который будет
// выводить зарплату работника. Зарплата - это произведение
// (умножение) ставки rate на количество отработанных дней
// days. И метод getFullName() - имя и фамиля работника.

class Worker {
  constructor(name, surname, rate, day) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.day = day;
  }
  getSalary = function () {
    return "Зарплата данного сотрудника: " + this.day * this.rate;
  };
  getFullName = function () {
    return this.name + " " + this.surname;
  };
}

//const worker1 = new Worker("Печкин", "Даниил", 2500, 16);

console.log(worker1.getFullName());
class People {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  getFullName = function () {
    return this.surname + " " + this.name;
  };
}

//2. Напишите новый класс Boss, этот класс наследуется от класса
//Worker из прошлого задания. Появляется новые свойство:
//workers - количество работников. И зарплата считается по
//другому: произведение (умножение) ставки rate на количество
//отработанных дней и на количество работников.

class Boss extends Worker {
  constructor(name, surname, rate, day, rate, day, workers) {
    super(name, surname, rate, day);
    this.workers = workers;
  }
  getSalary = function () {
    return "Зарплата данного босса: " + this.day * this.rate * this.workers;
  };
}


// 3. Модифицируйте класс Worker из предыдущей задачи
// следующим образом: для свойства rate и для свойства days
// сделайте и методы-сеттеры и методы-геттеры для их чтения.
class Worker {
  constructor(name, surname, rate, day) {
    this.name = name;
    this.surname = surname;
    this._rate = rate;  
    this._day = day; }   

  // Getter for rate
  get rate() {
    return this._rate;
  }

  // Setter for rate
  set rate(value) {
    this._rate = value;
  }

  // Getter for day
  get day() {
    return this._day;
  }

  // Setter for day
  set day(value) {
    this._day = value;
  }
  getSalary() {
    return "Зарплата данного сотрудника: " + this._day * this._rate;
  }

  getFullName() {
    return this.name + " " + this.surname;
  }
}

// 4. Реализуйте класс MyString, который будет иметь следующие
// методы: метод reverse(), который параметром принимает
// строку, а возвращает ее в перевернутом виде, метод ucFirst(),
// который параметром принимает строку, а возвращает эту же
// строку, сделав ее первую букву заглавной и метод ucWords,
// который принимает строку и делает заглавной первую букву
// каждого слова этой строки.
class MyString {

  reverse = function (newString) {
    return this.surname + " " + this.name;
  };

  ucFirst = function (newString) {
    return this.surname + " " + this.name;
  };
  ucWords = function (newString) {
    return this.surname + " " + this.name;
  };
}
// 5. Реализуйте класс Validator, который будет проверять строки. К
// примеру, у него будет метод isEmail параметром принимает
// строку и проверяет, является ли она корректным емейлом или
// нет. Если является - возвращает true, если не является - то
// false. Кроме того, класс будет иметь следующие методы: метод
// isDomain для проверки домена, метод isDate для проверки
// даты и метод isPhone для проверки телефона.

// 6. Реализуйте класс Student (Студент), который будет
// наследовать от класса User, подобно тому, как это сделано в
// теоретической части урока. Этот класс должен иметь
// следующие свойства: name (имя, наследуется от User),
// surname (фамилия, наследуется от User), year (год
// поступления в вуз). Класс должен иметь метод getFullName()
// (наследуется от User), с помощью которого можно вывести
// одновременно имя и фамилию студента. Также класс должен
// иметь метод getCourse(), который будет выводить текущий
// курс студента (от 1 до 5). Курс вычисляется так: нужно от
// текущего года отнять год поступления в вуз. Текущий год
// получите самостоятельно с помощью new Date.
