'use strict';
// -----------------------------------------------
// Мини - задача на синтаксис объектов.Напишите код, по строке на каждое действие.
// let user = {};
// user.name = 'Вася';
// user.surname = 'Петров';
// user['name'] = 'Сергей';
// delete user.name;
// console.log(user);
// -----------------------------------------------
// Определите, пуст ли объект
// function isEmpty (obj) {
//   for (let key in obj) {
//     return false;
//   }

//   return true;
// }

// let schedule = {};

// console.log(isEmpty(schedule));

// schedule['8:30'] = 'Подъем';

// console.log(isEmpty(schedule));
// -----------------------------------------------
// Сумма свойств
// let salaries = {
//   'Вася': 100,
//   'Петя': 250,
//   'Даша': 300,
// }

// let menu = {};

// function sumSalary (obj) {
//   let sum = 0;

//   for (let key in obj) {
//     sum += obj[key];
//   }

//   return sum;
// }
// console.log(sumSalary(menu));
// -----------------------------------------------
// Свойство с наибольшим значением
// let salaries = {
//   'Вася': 900,
//   'Петя': 4450,
//   'Даша': 700,
// }

// let menu = {};

// function getMaxSalaryPersonName (obj) {
//   let max = 0;
//   let maxName = '';

//   for (let key in obj) {
//     if (maxSalary < obj[key]) {
//       max = obj[key];
//       maxName = key;
//     }
//   }

//   return maxName;
// }
// console.log(getMaxSalaryPersonName(salaries));
// -----------------------------------------------
// let salaries = {
//   'Вася': 900,
//   'Петя': 'My menu',
//   'Даша': 700,
// }

// let menu = {};

// function isNumeric (n) {
//   return !isNaN(parseFloat(n) && isFinite(n))
// }

// function multiplyNumeric (obj) {
//   for (let key in obj) {
//     if (isNumeric(obj[key])) {
//       obj[key] *= 2;
//     }
//   }

//   return obj;
// }
// console.log(isNumeric('344px'));
// console.log(multiplyNumeric(salaries));
// -----------------------------------------------
(function () {
  function strReverse (str) {
    let newString = '';
    for (let i = str.length - 1; i >= 0; i -= 1) {
      newString += str[i];
    }
    return newString;
  }
  console.log(strReverse('Some string'));
}());
// -----------------------------------------------
// -----------------------------------------------
