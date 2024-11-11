// 1. Что выведет функция?

//  function f() {
// alert(this);
//  }

//  let user = {
//  g: f.bind(null)
//  };

//  user.g(); // ответ  мод.окно с null. f.bind(null) создает новую функцию,
 // в которой this будет привязан к null. Это означает, что когда g будет вызвана,
 // this внутри функции f будет равен null. 


// 2. Можем ли мы изменить this дополнительным связыванием?
//  function f() {
//  alert(this.name);
//  }
//  f = f.bind({ name: "Вася" }).bind({ name: "Петя" });
//  f();// "Вася" нет не можем. особенность JS 
 //Экзотический объект bound function, возвращаемый при первом вызове f.bind(...), 
 //запоминает контекст (и аргументы, если они были переданы) только во время создания.
 //Можно сделать новую привязку, но нельзя изменить существующую.

 
//3. В свойство функции записано значение. Изменится ли оно
//после применения bind?

// function sayHi() {
// alert(this.name);
// }

// sayHi.test = 5;
// let bound = sayHi.bind({
//  name: "Вася"
//  });
//  alert( bound.test );
 //Ответ: undefined.
//Результатом работы bind является другой объект. У него уже нет свойства test.
// но  свойство test у функции sayHi останется равным 5.


//4. Вызов askPassword() в приведённом ниже коде должен
//проверить пароль и затем вызвать user.loginOk/loginFail в
//зависимости от ответа.
//Однако, его вызов приводит к ошибке. Почему?

// function askPassword(ok, fail) {
// let password = prompt("Password?", '');
// if (password == "rockstar") ok();
// else fail();
// }
// let user = {
// name: 'Вася',
// loginOk() {
// alert(`${this.name} logged in`);
// },
// loginFail() {
// alert(`${this.name} failed to log in`);
// },
// };
// askPassword(user.loginOk, user.loginFail);

//Ошибка происходит потому, что askPassword получает функции loginOk/loginFail без контекста.
//Когда они вызываются, то this=undefined.
//Можно использовать bind, чтобы передать в askPassword функции loginOk/loginFail с уже привязанным контекстом:
// askPassword(user.loginOk.bind(user), user.loginFail.bind(user)); это не вызовет ошибки

//5. Объект user был изменён. Теперь вместо двух функций
//loginOk/loginFail у него есть только одна – user.login(true/false).
//Что нужно передать в вызов функции askPassword в коде
//ниже, чтобы она могла вызывать функцию user.login(true) как
//ok и функцию user.login(false) как fail?

// function askPassword(ok, fail) {
// let password = prompt("Password?", '');
// if (password == "rockstar") ok();
// else fail();
// }
// let user = {
// name: 'John',
// login(result) {
// alert( this.name + (result ? ' logged in' : ' failed to log in') );
// }
// };
//askPassword(?, ?);

// ОТВЕТ: askPassword(() => user.login(true), () => user.login(false));
// была использована стрелочную функцию-обёртку в которой мы получаем user извне. 

//6. Напишите в указанном месте конструкцию с методом bind()
//так, чтобы this внутри функции func всегда указывал на value.
//из переменной elem.

// const elem = {value: ‘Привет’}
// function func(surname, name) {
// alert(this.value + ', ' + surname + ' ' + name);
// }

//Тут напишите конструкцию с bind() 
// ОТВЕТ:  func= func.bind(elem);
//func('Иванов', 'Иван'); //тут должно вывести 'привет, Иванов Иван'
//func('Петров', 'Петр'); //тут должно вывести 'привет, Петров Петр'

// 7. Есть функция которая складывает три числа.Выполните
//каррирование.
// const sum = (a, b, c) => a + b + c

const sum = (a) => (b) => (c) => a + b + c;

console.log(sum (100)(10)(1));

//8. Реализовать таймер-функцию используя замыкания. Функция
//принимает два аргумента начальное значение и значение
//завершения. Таймер движется назад.При достижении точки
//завершения в консоль выводится значение таймера и
//сообщение о завершении работы таймера.

function countdownTimer(start,end) {
    // Внутренняя функция, которая позволяет использовать параметры
    function startCountdown(current) {
        const timerInterval = setInterval(() => {
            //console.log(current); // Выводим текущее значение по  желанию

            // Если достигли точки завершения
            if (current <= end) {
                clearInterval(timerInterval); // Останавливаем таймер
                console.log(`Точка завершения: ${current} достигнута. Отсчет завершен`);
            }

            current--; // Уменьшаем текущее значение
        }, 500); // Интервал в 1 секунду
    }
    let current = start;
    startCountdown(current); // Передаем начальное значение во внутреннюю функцию
}

// Пример использования
countdownTimer(10, 5); // Таймер от 10 до 5

