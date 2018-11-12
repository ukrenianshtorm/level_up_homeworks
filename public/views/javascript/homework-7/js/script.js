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
//   let sumSalary = 0;

//   for (let key in obj) {
//     sumSalary += obj[key];
//   }

//   return sumSalary;
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

// function maxSalaryName (obj) {
//   let maxSalary = 0;
//   let nameSalary = '';

//   for (let key in obj) {
//     if (maxSalary < obj[key]) {
//       maxSalary = obj[key];
//       nameSalary = key;
//     }
//   }

//   return nameSalary;
// }
// console.log(maxSalaryName(salaries));
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
// (function () {
//   function strReverse (str) {
//     let newString = '';
//     for (let i = str.length - 1; i >= 0; i -= 1) {
//       newString += str[i];
//     }
//     console.log(newString);
//   }
//   strReverse('Some string');
// }());
// -----------------------------------------------
var obj1 = {};
var obj2 = {};

function compasionObject (obj1, obj2) {
  var keysobj1 = Object.keys(obj1);
  var keysobj2 = Object.keys(obj2);
  if (keysobj1.length != keysobj2.length) {
    return false;
  }
  return !keysobj1.filter(function (key) {
      if (typeof obj1[key] == "object" || Array.isArray(obj1[key])) {
        return !Object.equals(obj1[key], obj2[key]);
      } else {
        return obj1[key] !== obj2[key];
      }
    })
    .length;

}
console.log(compasionObject(obj1, obj2));
// -----------------------------------------------
