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
//     if (max < obj[key]) {
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
// (function () {
//   function strReverse (str) {
//     let newString = '';
//     for (let i = str.length - 1; i >= 0; i -= 1) {
//       newString += str[i];
//     }
//     return newString;
//   }
//   console.log(strReverse('Some string'));
// }());
// -----------------------------------------------
// let obj1 = {
//   'name': 'Alex',
//   'age': 18,
// };
// let obj2 = {
//   'name': 'Alex',
//   'age': 18,
//   c: 78
// };
// (function () {
//     function compareObjects (a, b) {
//       if (count !== count2) {
//         return false;
//       }
//       for (let key in a) {
//         if (key) {
//           compareObjects(a, b + 1)
//         } else {
//           if (a['key'] !== b['key']) {
//             return false;
//           }
//         }

//       }

//       return true;
//     }
// -----------------------------------------------
// (function () {
//   function drawArea (N) {
//     let j = '@';
//     let k = '-';

//     for (let i = 1; i <= N; i += 1) {
//       if (i === 1 || i === N) {
//         console.log(i + j.repeat(N));
//       } else {
//         console.log(i + j + k.repeat(N - 2) + j);
//       }
//     }
//   }
//   drawArea(7); // -> http://prntscr.com/jpobhn
// }());
// -----------------------------------------------
(function () {
  function comparisonString (str1, str2) {
    let len = Math.max(str1.length, str2.length);
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < len; i += 1) {
      sum1 += str1.charCodeAt(i) || 0;
      sum2 += str2.charCodeAt(i) || 0;
    }

    return sum1 === sum2;
  }
  console.log(comparisonString('clock', 'lockc'));; // -> true.
  console.log(comparisonString('tree', 'three')); // -> false.
  console.log(comparisonString('mttudd', 'dutmtd')); // -> true.
}());
// -----------------------------------------------
// function reduceRight (arr, callback, initialValue) {
//   const len = arr.length;

//   let acc = initialValue === undefined ? arr[len - 1] : initialValue;
//   let i = initialValue === undefined ? len - 2 : len -1;

//   for(; i >= 0; i -= 1) {
//     acc = callback(acc, arr[i], i);
//   }

//   return acc;
// }
// console.log(reduceRight([1, 2, 3], function (acc, next) {
//   return acc + next;
// }));
//---------------------------------------------------
