'use strict';
//-----------------------------------------------
// Интерфейс суммы
// showSumNumber();

// function showSumNumber() {
//   let a = +prompt('Input number a: ', 1);
//   let b = +prompt('Input number b: ', 1);

//   let result = a + b;

//   return alert('Sum : ' + a + ' + ' + b + ' = ' +result.toFixed(2));
// }
//-----------------------------------------------
// Почему 6.35.toFixed(1) == 6.3 ?
// console.log(6.35.toFixed(1));
//6.35 является бесконечной двоичной дробью(интерпретатор видит как 6.34..9), поэтому округлится вниз.
//-----------------------------------------------
// Сложение цен
// console.log((0.1 * 10 + 0.2 * 10) / 10 + '$');
//-----------------------------------------------
// Бесконечный цикл по ошибке
// var i = 0;
// while (i != 10) {
//   i += 0.2;
// }
// интерпретатор при сложении i += 0.2; не станет равным 10 он видит его как бесконечную двоичную дробь
//-----------------------------------------------
// Формула Бине
// function fibBinet(n) {
//   let y = (1 + Math.sqrt(5)) / 2;

//   return Math.ceil(Math.pow(y, n) / Math.sqrt(5));
// }
// console.log(fibBinet(77));
// Результаты разные потому что при округлении бесконечных дробей будут копиться ошибки в вычислениях 
//-----------------------------------------------
// Случайное из интервала(0, max)
// function randomMaxNumber(max) {
//   return Math.random() * max;
// }
// console.log(randomMaxNumber(20));
//-----------------------------------------------
// Случайное из интервала(min, max)
// function randomMinMaxNumber(min, max) {
//   return (min + Math.random() * (max - min));
// }
// console.log(randomMinMaxNumber(10, 20));
//-----------------------------------------------
// Случайное целое от min до max
// function randomInteger(min, max) {
//   let result;

//   result = (min - 0.5 + Math.random() * (max - min + 1));
//   result = Math.round(result)
//   return result;
// }
// console.log(randomInteger(1, 3));
//-----------------------------------------------
// Сделать первый символ заглавным
// let str = 'java Script';

// function ucFirst(str) {
//   if (!str) return str;

//   return str.charAt(0).toUpperCase() + str.slice(1);
// }
// console.log(ucFirst(str));
//-----------------------------------------------
// Проверьте спам
// let str = 'Java Script xXxl';

// function checkSpam(str) {
//   let UpperStr = str.toUpperCase();

//   return !!(~UpperStr.indexOf('XXX') || ~UpperStr.indexOf('VIAGRA'));
// }
// console.log(checkSpam(str));
//-----------------------------------------------
// Усечение строки
// function truncate(str, maxLength) {
//   return (str.length > maxLength) ? console.log(str.slice(0, maxLength - 3) + '...') : console.log(str);
// }
// truncate("Вот, что мне хотелось бы сказать на эту тему:", 10);
// truncate("Всем привет!", 20);
//-----------------------------------------------
// Выделить число
// function extractCurrencyValue(str) {
//   return +str.slice(1);
// }
// console.log(typeof extractCurrencyValue('$120'));
//-----------------------------------------------

