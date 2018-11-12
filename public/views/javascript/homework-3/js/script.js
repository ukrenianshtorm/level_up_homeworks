'use strict';
// // --------------------------
// var userName = prompt('Your name please: ', 'userName');
// alert('Your name - ' + userName);
// // --------------------------
// if ("0") {
//   alert('Привет');   // "0" CONVERTS TO true BECAUSE IT'S NOT A FALSY VALUE
// }
// //---------------------------
// var company = prompt('Каково «официальное» название JavaScript?', '');
// if (company === 'ECMAScript') {
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
// } else if  (a === 0) {
//   alert(0);
// } else {
//   alert('The error you entered is not a number');
// }
// //-------------------------------
// let login = prompt('Your login please: ', '')

// if (login === "Админ") {
//   let password = prompt('Your password please: ', '')
//   if (password === 'Чёрный Властелин') {
//     alert('Добро пожаловать!');
//   } else if (password === null) {
//     alert('Вход отменен');
//   } else {
//     alert('Пароль не верен');
//   }
// } else if (login === null) {
//   alert('Вход отменен');
// } else {
//   alert('Я вас не знаю');
// }
// //-----------------------------------
// let a = 3;
// let b = -1;

// let result = (a + b < 4)? 'few' : 'many';
// console.log(result); 
// //--------------------------------------
// let login = '';

// let message =  (login === 'Вася') ? 'Привет' : 
//   (login === 'Директор') ? 'Здравствуйте' :
//   (login === '') ? 'Нет логина': '';
// console.log(message); 
//------------------------------------------
// console.log(null || 2 || undefined); // || stumbles on the "truth" and returns the value 2
//------------------------------------------
// alert(alert(1) || 2 || alert(3)); //FIRST ALERT WILL SHOW "1" AND RETURN UNDEFINED AND IT'S NOT TRUE. THEN 2 IS TRUE AND IT'S DISPLAYED
//------------------------------------------
// alert(alert(1) && alert(2)); FIRST GOES && COMPARISON AND IT RETURNS 3. THEN null || 3 RETURNS 3 AND STOPS.
//------------------------------------------
// alert(null || 2 && 3 || 4); // SHOW 3 because that expression null || 2 false, and that expression 3 || 4 stumbles on the "truth" and return 3 , false && 3 return 3 and alert show him
//------------------------------------------
//between 14 and 90
// let age = 34;s

// if ((age >= 14) && (age <= 90)) {
//   console.log('age between 14 and 90');
// } else {
//   console.log(false);
// }
//------------------------------------------
//not between 14 and 90
// let age = 12;

// if (age < 14 || age > 90) {
//   console.log('age not between 14 and 90');
// } else {
//   console.log(false);
// }
// //not between 14 and 90
// let age = 13;

// if (!(age >= 14 && age <= 90)) {
//   console.log('not between 14 and 90');
// } else {
//   console.log(false); 
// }
// if (-1 || 0) alert('первое'); // ||stumbles on the "truth" and returns the value -1
// if (-1 && 0) alert('второе'); //&& stumbles on a "lie" and returns the false
// if (null || -1 && 1) alert('третье'); //&& OPERATOR HAS HIGHER PRIORITY THAN ||. SO -1 && 1 -> 1 AND NULL || 1 -> 1
// --------------------------------------
// "" + 1 + 0  // '10' when added with a string will be a string
// let c = "";
// let b = null == "\n0\n";

// console.log('b :', b);
// console.log(typeof b);
// "" - 1 + 0  // -1 приводим к числу 
// true + false  // + приводит к числу 1 + 0 = 1
// 6 / "3"  // оператор деления приводит к числу 6 / 3 = 2
// "2" * "3" // умножение приводит к числу 2 * 3 = 6
// 4 + 5 + "px" // 9px  when added with a string will be a string
// "$" + 4 + 5 // $45  when added with a string will be a string
// "4" - 2 // приводим к числу 4 - 2 = 2
// "4px" - 2 // приводим к числу - 4px не получается, строка минус число будет NAN 
// 7 / 0 // infinity - число всегда при делении на ноль -infinity
// "  -9\n" + 5 // swhen added with a string will be a string
// "  -9\n" - 5// -14  // приводим к числу пробелы игнорируются -9 - 5 = -14  
// 5 && 2 // true \ && Запинается на лжы 5 правда 2 правда возвращает второе т.е. 2
// 2 && 5 // true \ && Запинается на лжы 2 правда 5 правда возвращает второе т.е. 5

// 5 || 0 // Запинается на правде 5 правда вернет 5

// 0 || 5 // Запинается на правде  0 ложь 5 правда вернет 5
// null + 1  // приводим к числу 0 + 1 = 1
// undefined + 1 // неопределенно с оператором  всегда NaN
// null == "\n0\n" // сравниваем null со строкой "\n0\n" ложь
// +null == +"\n0\n" // приводим к числу 0 === 0 правда
