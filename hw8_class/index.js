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



//2. Напишите новый класс Boss, этот класс наследуется от класса
//Worker из прошлого задания. Появляется новые свойство:
//workers - количество работников. И зарплата считается по
//другому: произведение (умножение) ставки rate на количество
//отработанных дней и на количество работников.

class Boss extends Worker {
  constructor(name, surname, rate, day, workers) {
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
class WorkerModifaed {
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

  reverse = function (newStr) {
    return newStr.split('').reverse().join('');
  };

   // Метод для превращения первой буквы строки в заглавную
   ucFirst(newStr) {
    if (!newStr) return newStr; // Проверка на пустую строку
    return newStr.charAt(0).toUpperCase() + newStr.slice(1);
}

// Метод для превращения первой буквы каждого слова в заглавную
ucWords(newStr) {
    return newStr.split(' ').map(word => this.ucFirst(word)).join(' ');
}
}

// Пример использования
const myString = new MyString();

console.log(myString.reverse("Привет")); // "тевирП"
console.log(myString.ucFirst("привет")); // "Привет"
console.log(myString.ucWords("привет мир")); // "Привет Мир"


// 5. Реализуйте класс Validator, который будет проверять строки. К
// примеру, у него будет метод isEmail параметром принимает
// строку и проверяет, является ли она корректным емейлом или
// нет. Если является - возвращает true, если не является - то
// false. Кроме того, класс будет иметь следующие методы: метод
// isDomain для проверки домена, метод isDate для проверки
// даты и метод isPhone для проверки телефона.

class Validator {
  // Проверка на корректный адрес электронной почты
  isEmail(email) {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailPattern.test(email);
  }

  // Проверка на корректный домен
  isDomain(domain) {
      const domainPattern = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return domainPattern.test(domain);
  }

   // Проверка на корректную дату в формате YYYY-MM-DD
   isDate(date) {
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!datePattern.test(date)) return false;

    const [year, month, day] = date.split('-').map(Number);
    const parsedDate = new Date(year, month - 1, day); // месяц начинается с 0

    return parsedDate.getFullYear() === year && 
           parsedDate.getMonth() === month - 1 && 
           parsedDate.getDate() === day;
}

// Проверка на корректный номер телефона
isPhone(phone) {
    const phonePattern = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    return phonePattern.test(phone);
}
}

// Пример использования
const validator = new Validator();

console.log(validator.isEmail("pl@magnit.ru")); // true
console.log(validator.isDomain("magnit.ru")); // true
console.log(validator.isDate("2024-11-25")); // true
console.log(validator.isPhone("+7(910)884-6074")); // true

console.log(validator.isEmail("invalid-email")); // false
console.log(validator.isDomain("invalid_domain")); // false
console.log(validator.isDate("2024-02-30")); // false
console.log(validator.isPhone("-555-1234")); // false

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

class User {
  constructor(name, surname) {
      this.name = name;
      this.surname = surname;
  }

  getFullName() {
      return `${this.name} ${this.surname}`; // Возвращает полное имя
  }

  toString() {
      return `User: ${this.getFullName()}`;
  }
}

class Student extends User {
  constructor(name, surname, year) {
      super(name, surname); // Вызов конструктора родительского класса
      this.year = year; // Год поступления
      
  }

  getCourse() {
      const currentYear = new Date().getFullYear(); // Текущий год
      const course = currentYear - this.year; // Вычисление курса
      return course > 5 ? 5 : course; // Возвращает текущий курс (1-5)
  }

}

// Пример использования
const student1 = new Student("Иван", "Иванов", 2020);
console.log(student1.getFullName() + " учится на " + student1.getCourse() + " курсе.");
