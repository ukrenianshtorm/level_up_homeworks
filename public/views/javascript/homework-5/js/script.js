'use strict';
// -- -- -- -- -- -- -- -- -- -- -- -- --
// function sumTo (value) {
//   let result = 0;

//   for (let i = 1; i <= value; i += 1) {
//     result += i;
//   }

//   return result;
// }

// console.log('sumTo :', sumTo(100000));

// function sumTo (n) {
//   if (n > 1) {
//     return n + sumTo(n - 1)
//   }

//   return n;
// }

// console.log('sumTo :', sumTo(11383)); //Maximum number if greater => RangeError: Maximum call stack size exceeded

// function sumTo (n) {
//   return n * (n + 1) / 2;
// }

// console.log('sumTo :', sumTo(100000));

// Решение по формуле быстрее всего, потом цикл за ним уже рекурсия, чем меньше операций тем скорее вычисление!В рекурсии sumTo(
//     10000) ошибка потому что ограничено число вложений 10000 в браузере!
//   -- -- -- -- -- -- -- -- -- -- -- -- --
// Вычислить факториал

// function factorial (n) {
//   if (n > 1) {
//     return n * factorial(n - 1)
//   }

//   return n;
// }

// console.log('factorial :', factorial(5));
// -- -- -- -- -- -- -- -- -- -- -- -- --
// Числа Фибоначчи

// function fib (n) {
//   let a = 1;
//   let b = 1;
//   let c;

//   for (let i = 3; i <= n; i += 1) {
//     c = a + b;
//     a = b;
//     b = c;
//   }

//   return b;
// }

// console.log('fib :', fib(3));
// Первые два числа равны 1, затем 2(1 + 1), затем 3(1 + 2), 5(2 + 3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....Все вроде правильно почему с третьего?
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
// Проверка на NFE
// важность: 5 решение
// Каков будет результат выполнения кода ?

//   function g () {
//     return 1;
//   }

// alert(g); //выведет тело функции
// А такого ? Будет ли разница, если да– почему ?

//   (function g () {
//     return 1;
//   }); //Именованное функциональное выражение будет видно только внутри скобок, поэтому выдаст ошибку функция не определена

// alert(g);
// -- -- -- -- -- -- -- -- -- -- -- -- --
