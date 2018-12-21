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
//   'Date': {
//     'user': 1,
//     'user2': 2,
//   },
//   'Time': {
//     'wight': '10px',
//     'height': '12px',
//   },
// };
// let obj2 = {
//   'name': 'Alex',
//   'age': 18,
//   'Date': {
//     'user': 1,
//     'user2': 2,
//   },
//   'Time': {
//     'wight': '10px',
//     'height': '12px',
//   },
// };

// function compareObjects (a, b) {
//   let count1 = 0;
//   let count2 = 0;

//   for (let key in a) {
//     count1 += 1;
//   }
//   for (let key in b) {
//     count2 += 1;
//   }
//   if (count1 !== count2) {
//     return false;
//   }
//   for (let key in a) {
//     if (typeof a[key] === 'object') {
//       if (!compareObjects(a[key], b[key])) {
//         return false;
//       }
//     } else if (a[key] !== b[key]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(compareObjects(obj1, obj2));
// -----------------------------------------------
// (function () {
//   function drawArea (n) {
//     let j = ' @ ';
//     let k = ' - ';

//     for (let i = 1; i <= n; i += 1) {
//       if (i === 1 || i === n) {
//         console.log(i + j.repeat(n));
//       } else {
//         console.log(i + j + k.repeat(n - 2) + j);
//       }
//     }
//   }
//   drawArea(7); // -> http://prntscr.com/jpobhn
// }());
// -----------------------------------------------
(function () {
  function comparisonString(str1, str2) {
    let pos = 0;

    if (str1.length !== str2.length) {
      return false;
    }
    for (let i = 0; i < str1.length; i += 1) {
      pos = str2.indexOf(str1[i]);
      if (!~pos) {
        return false;
      }
      str2 = str2.slice(0, pos) + str2.slice(pos + 1);
    }
    return true;
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
