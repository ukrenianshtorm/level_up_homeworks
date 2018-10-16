'use strict';
// // --------------------------
// var userName = prompt('Your name please: ', 'userName');
// alert('Your name - ' + userName);
// // --------------------------
// if ("0") {
//   alert('Привет');   // yes  message because "0" == true
// }
// //---------------------------
// var company = prompt('Каково «официальное» название JavaScript?', '');
// if (company == 'ECMAScript') {
//   alert('Верно!');
// } else {
//   alert('Не знаете? «ECMAScript»!');
// }
// //----------------------------
// var a = prompt('Введите число', 0);
// if (a > 0) {
//   alert(1);
// } else if (a < 0) {
//   alert(-1);
// } else if  (a == 0) {
//   alert(0);
// }
//   else {
//   alert('The error you entered is not a number');
// }
// //-------------------------------
// let login = prompt('Your login please: ', '')

// if (login == "Админ") {
//   let password = prompt('Your password please: ', '')
//   if (password == 'Чёрный Властелин') {
//     alert('Добро пожаловать!');
//   } else if (password == null) {
//     alert('Вход отменен');
//   } else {
//     alert('Пароль не верен');
//   }
// } else if (login == null) {
//   alert('Вход отменен');
// } else {
//   alert('Я вас не знаю');
// }
// //-----------------------------------
// let a = 3, b = -1;

// let result = (a + b < 4)? 'few' : 'many';
// console.log(result); 
// //--------------------------------------
// let login = '';

// let message =  (login == 'Вася') ? 'Привет' : 
//   (login == 'Директор') ? 'Здравствуйте' :
//   (login == '') ? 'Нет логина': '';
// console.log(message); 
//------------------------------------------
// console.log(null || 2 || undefined); // 2
//------------------------------------------
// alert(alert(1) || 2 || alert(3)); // 1, 2 
//------------------------------------------
// alert(alert(1) && alert(2)); // 1, undefined
//------------------------------------------
// alert(null || 2 && 3 || 4); // 3
//------------------------------------------
//between 14 and 90
// let age = 34;

// if ((age > 13) && (age < 89)) {
//   console.log('between 14 and 90');
// } else {
//   console.log(false);
// }
//------------------------------------------
//not between 14 and 90
// let age = 90;

// if (age > 13 && age < 89) {
//   console.log(true);
// } else {
//   console.log('not between 14 and 90'); //ok
// }
// //not between 14 and 90
// let age = 90;

// if (!(age > 13 && age < 89)) {
//   console.log('not between 14 and 90');
// } else {
//   console.log(false); 
// }
// if (-1 || 0) alert('первое'); //true
// if (-1 && 0) alert('второе'); //false
// if (null || -1 && 1) alert('третье'); //true
// --------------------------------------
// "" + 1 + 0  // '10'
// "" - 1 + 0  // -1
// true + false  // 1
// 6 / "3" = 3
// "2" * "3" = 6
// 4 + 5 + "px" // 9px
// "$" + 4 + 5 // $45
// "4" - 2 // 2
// "4px" - 2 // Nan
// 7 / 0 // infinity
// "  -9\n" + 5 // ' -9\n+5'
// "  -9\n" - 5// -14
// 5 && 2 // true \ 2
// 2 && 5 // true \ 5

// 5 || 0 // true \ 5

// 0 || 5 // true \ 5
// null + 1  // 1
// undefined + 1 //NAN
// null == "\n0\n" // false
// +null == +"\n0\n" //true