// 1.Используя метод map() напишите код, который получает из
// массива строк новый массив, содержащий их длины.
let names = ["Лад", "Академия", "HTML", "CSS", "JavaScript"];

const nameLengths = names.map(function (name) {
  return name.length;
});

// получили массив с длинами
console.log(nameLengths); // 4,3,10

// 2.Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17,
// 19]. Используя метод reduce() напишите функцию
// currentSums(numbers), которая возвращает новый массив из
// такого же числа элементов, в котором на каждой позиции
// будет находиться сумма элементов массива numbers до этой
// позиции включительно.

function currentSums(numbers) {
  const sums = [];
  numbers.reduce((accumulator, currentValue, index) => {
      accumulator += currentValue;
      sums[index] = accumulator; // сохраняем текущую сумму в массив
      return accumulator; // возвращаем текущую сумму для следующей итерации
  }, 0);
  return sums;
}

// Пример использования
const numbers2 = [2, 3, 5, 7, 11, 13, 17, 19];

console.log(currentSums(numbers2)); // [2, 5, 10, 17, 28, 41, 58, 77]

// 3.Напишите код, который получает из массива чисел новый
// массив, содержащий пары чисел, которые в сумме должны
// быть равны семи: (0:7), (1:6) и т.д.

function findPairs(numbers) {
  const pairs = [];
  const seen = new Set(); // Множество для отслеживания посещенных значений

  for (const number of numbers) {
      const complement = 7 - number; // Находим дополнение до 7
      if (seen.has(complement)) {
          pairs.push([complement, number]); // Если дополнение найдено, добавляем пару
      }
      seen.add(number); // Добавляем текущее число в множество
  }
  return pairs;
}
const numbers3 = [0, 1, 2, 3, 4, 5, 6, 7];
console.log(findPairs(numbers3)); // [ [ 3, 4 ], [ 2, 5 ], [ 1, 6 ], [ 0, 7 ] ]
console.log(findPairs(numbers2)); // [ [ 2, 5 ] ]

// 4.Напишите код, создающий массив, который будет состоять из
// первых букв слов строки str.
function firstLetters(str) {
  const resultArray = [];
  const array = str.trim().split(" ");// Массив слов

  for (const word of array) {
      letter = word.slice(0,1); // Находим 1 букву
      resultArray.push(letter); // добавляем букву массив
      }
  return resultArray;
}

console.log(firstLetters("мама мыла Шиву мама мыла Раму"));//[ 'м', 'м', 'Ш', 'м', 'м', 'Р' ]

// 5.Напишите код, создающий массив, который будет состоять из
// строк, состоящих из предыдущего, текущего и следующего
// символа строки str.

function threetLetters(str) {
    
  // функция обратного вызова
function getChars(value, index, str) {
  // Возвращаем строку состоящую из предыдущего, текущего и следующего символа
      return str.substring(index - 1, index + 2);
  }  
  // Применяем метод map к строке
  let resultArray = Array.prototype.map.call(str, getChars);    
  return resultArray;
}

console.log(threetLetters("мамаМылаШиву"));//[  'ма',  'мам', 'ама', 'маМ', 'аМы', 'Мыл', 'ыла', 'лаШ', 'аШи',  'Шив', 'иву', 'ву']

// 6.Напишите код, преобразующий массив цифр, которые
// располагаются неупорядоченно, в массив цифр
// расположенных по убыванию их значений.
const numbers6 = [200, 15, 5, 35];
numbers6.sort( (a, b) => b-a);
console.log(numbers6); //[ 200, 35, 15, 5 ]
console.log(numbers3.sort( (a, b) => b-a)); // [ 7, 6, 5, 4,  3, 2, 1, 0 ]
console.log(numbers2.sort( (a, b) => b-a)); // [ 19, 17, 13, 11, 7,  5,  3,  2 ]

// 7.Напишите код, объединяющий три массива цифр, и
// располагающий цифры, в полученном массиве, в порядке
// убывания их значений через пробел.
 
 const first = [ 19, 17, 13, 11, 7,  5,  3,  2 ];
 const second = [ 7, 6, 5, 4,  3, 2, 1, 0 ];
 const third = [200, 15, 5, 35];
const resultThreeArrayNumbers = first.concat(second).concat(third);
resultThreeArrayNumbers.sort((a,b)=>b-a);
console.log(resultThreeArrayNumbers.join(" "));   // 200 35 19 17 15 13 11 7 7 6 5 5 5 4 3 3 2 2 1 0   

// 8.Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5],
// [6]]. Найдите сумму элементов этого массива. Массив, конечно
// же, может быть произвольным.
 const twoMetricArray = [[1, 2, 3], [4, 5], [6]];
 
function sumTwoMetricArray(twoMetricArray){
 let sumArray = []; 
 for (const innerArray of twoMetricArray) {
   sumArray = sumArray.concat(innerArray); // объединяем числа в один массив
  }

return sumArray.reduce((prev,current) => prev +=current); // новый массив сумма элементов.
}

console.log(sumTwoMetricArray(twoMetricArray));

// 9.Дан массив с числами. Не используя метода reverse
// переверните его элементы в обратном порядке.

const numsArr = [1, 2, 3, 4];
const reversedArray = numsArr.reduceRight((acc, cur) => {
  acc.push(cur);
  return acc;
}, []);

console.log(reversedArray); // [4, 3, 2, 1]

// 10. Дан массив с числами. Узнайте сколько элементов с начала
// массива надо сложить, чтобы в сумме получилось больше 10-ти.

const numsArr10 = [5, 2, 3, 4, 5]; // Пример массива

const count = numsArr10.reduce((acc, cur) => {
  // Увеличиваем сумму и счётчик
  if (acc.sum > 10) {
    return acc; // Если сумма больше 10, возвращаем аккумулятор без изменений
  }
  
  acc.sum += cur; // Добавляем текущее значение к сумме
  acc.count++; // Увеличиваем счётчик элементов

  return acc; // Возвращаем обновлённый аккумулятор
}, { sum: 0, count: 0 }).count; // Начинаем с объекта

console.log(count); // Выводим количество элементов, необходимых для превышения 10

// 11. Напишите функцию arrayFill, которая будет заполнять
// массив заданными значениями. Первым параметром функция
// принимает значение, которым заполнять массив, а вторым -
// сколько элементов должно быть в массиве. Пример:
// arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].


function arrayFill(value, count) {
  // Создаем новый массив с заданным количеством элементов
  return Array.from({ length: count }, () => value);
}

// Пример использования
const filledArray = arrayFill('x', 5);
console.log(filledArray); // ['x', 'x', 'x', 'x', 'x']

