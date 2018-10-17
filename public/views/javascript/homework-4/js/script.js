'use strict';
// --------------------------
// var i = 3;

// while (i) {
//   console.log(i--); // last 1 because i == 0 or false break cycle;
// }
// --------------------------
// Для каждого цикла запишите, какие значения он выведет.Потом сравните с ответом.

// Префиксный вариант

// var i = 0;
// while (++i < 5) console.log(i); // 1,2,3,4
// Постфиксный вариант

// var i = 0;
// while (i++ < 5) console.log(i); // 1,2,3,4,5
//-----------------------------
// Для каждого цикла запишите, какие значения он выведет.Потом сравните с ответом.

// Постфиксная форма:

// for (var i = 0; i < 5; i++) console.log(i); // 0, 1, 2, 3, 4
// Префиксная форма:

// for (var i = 0; i < 5; ++i) console.log(i); // 0, 1, 2, 3, 4
//------------------------------
// for (let i = 2; i <= 10; i += 2) {
//   console.log('i :', i);
// }
//------------------------------
// Перепишите код, заменив цикл for на while, без изменения поведения цикла.

//  for (var i = 0; i < 3; i++) {
//   console.log( "Номер " + i + "!" );
// }

// var i = 0;

// while (i < 3) {
//   console.log("Номер " + i + "!");

//   i += 1;
// }
// ------------------------------
// Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Cancel(ESC).

// Предполагается, что посетитель вводит только числа.Предусматривать обработку нечисловых строк в этой задаче необязательно.
// for ( ; ;) {
//   let number = prompt('Insert the number > 100 :', 'number');
//   if (number === null || number > 100 ) {
//     alert('Number > 100 or cancel');
//     break;
//   }
// }
// ------------------------------
// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
// Другими словами, n > 1 – простое, если при делении на любое число от 2 до n - 1 есть остаток.
// Создайте код, который выводит все простые числа из интервала от 2 до 10. Результат должен быть: 2, 3, 5, 7.
// P.S.Код также должен легко модифицироваться для любых других интервалов.
// next: 
//   for(let i = 2; i <= 10; i += 1) {
//   for(let n = 2; n < i; n += 1) {
//     if (i % n === 0) {
//       continue next;
//     }
//   }
//   console.log('i :', i);
// }
// ------------------------------
// Напишите if..else, соответствующий следующему switch:

// switch (browser) {
//   case 'IE':
//     alert('О, да у вас IE!');
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert('Да, и эти браузеры мы поддерживаем');
//     break;

//   default:
//     alert('Мы надеемся, что и в вашем браузере все ок!');
// }
// let browser = prompt('Введите название вашего браузера :', 'IE');

// if (browser === 'IE') {
//   alert('О, да у вас IE!');
// } else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
//   alert('Да, и эти браузеры мы поддерживаем');
// } else {
//   alert('Мы надеемся, что и в вашем браузере все ок!');
// }
// ------------------------------
// Перепишите код с использованием одной конструкции switch:

//  var a = +prompt('a?', '');

// if (a == 0) {
//   alert(0);
// }
// if (a == 1) {
//   alert(1);
// }

// if (a == 2 || a == 3) {
//   alert('2,3');
// }

// let a = +prompt('a?', '');

// switch (a) {
//   case 0:
//     alert('0');
//     break;
//   case 1:
//     alert('1');
//     break;
//   case 2:
//   case 3:
//     alert('2,3');
//     break;
//   default:
//   alert('No number 0-3');
//     break;
// }

// ------------------------------
// Обязателен ли "else" ?
//   важность : 4
// Следующая функция возвращает true, если параметр age больше 18. В ином случае она задаёт вопрос посредством вызова confirm и возвращает его результат.

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     // ...
//     return confirm('Родители разрешили?');
//   }
// }
// Будет ли эта функция работать как - то иначе, если убрать else?

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   }
//   // ...
//   return confirm('Родители разрешили?');
// }
// Есть ли хоть одно отличие в поведении этого варианта ?

// No, there is no difference.
//-------------------------------
// Перепишите функцию, используя оператор '?' или '||'
// важность: 4
// Следующая функция возвращает true, если параметр age больше 18. В ином случае она задаёт вопрос confirm и возвращает его результат.
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }
// var age = prompt('Ваш возраст?');

// if (checkAge(age)) {
//   alert('Доступ разрешен');
// } else {
//   alert('В доступе отказано');
// }

// Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.Сделайте два варианта функции checkAge:
// Используя оператор '?'
// function checkAge(age) {
//    return  age = (age > 18) ?  true : confirm('Родители разрешили?');
// }

// // Используя оператор ||
// function check(age) {
//   return age = (age > 18) || confirm('Родители разрешили?');
// }
// ------------------------------
// Функция min
// важность: 1
// Задача «Hello World» для функций:)
// Напишите функцию min(a, b), которая возвращает меньшее из чисел a, b.
// Пример вызовов:
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1
// function min(a,b) {
//   return (a < b) ? console.log(a) : console.log(b);
// }
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1
// ------------------------------
// Функция pow(x, n)
// важность: 4
// Напишите функцию pow(x, n), которая возвращает x в степени n.Иначе говоря, умножает x на себя n раз и возвращает результат.
//   pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x, n).

function pow(x, n) {
  let j = 1;

  for (let i = 1; i <= n  ; i += 1) {
    j = j * x;
    }
    return j;
  }

function calcPow() {
  for (; ;) {
    let x = +prompt('Введите число x:', 1);
    let n = +prompt('В какую степень возвести n:', 1);
    if (true && x > 0 && n > 0) {
      return pow(x, n)
    } else {
      alert('Число должно быть положительным и не строкой!');
    } 
  }
}
alert(calcPow());

// ------------------------------