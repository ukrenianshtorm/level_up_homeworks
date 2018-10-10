'use strict';
// --------------------------
var userName = prompt('Your name please: ', 'userName');
alert('Your name - ' + userName);
// --------------------------
var a = 1, b = 1, c, d;

c = ++a; console.log(c); // c = (a = a + 1) = 2; a = 2;
d = b++; console.log(d); // d = b;
//b = b + 1 = 2;

c = (2 + ++a); console.log(c); // c = 2 + (a = a + 1) = 2 + 3 = 5; a = 3;
d = (2 + b++); console.log(d); // d = 2 + b = 2 + 2 = 4;
//b = b + 1 = 3;

console.log(a); // 3
console.log(b); // 3
// -------------------------
var a = 2;
var x = 1 + (a *= 2);
//x = 5;
console.log(x);
// -------------------------
var a = 2;
var b = 4;

var c = (b += 5) - a++ * b - 3 + (b -= 3 + 1 - --a);
// (b += 5) or b = b + 5 or b = 9;
// a++ * b or 2 * 9 or 18, ++ ignored a = 2;
//(b -= 3 + 1 - --a) or b = b - (3 + 1 - 2) or b = 9 - (3 + 1 - 2) or b = 7 ; --a ok a++ ok; magic a = 2)))
// c = 9 - 18 - 3 + 7 = -5;

var correctAnswer = confirm(`Correct answer ?
var c = (b += 5) - a++ * b - 3 + (b -= 3 + 1 - --a);
// (b += 5) or b = b + 5 or b = 9;
// a++ * b or 2 * 9 or 18, ++ ignored a = 2;
//(b -= 3 + 1 - --a) or b = b = b - (3 + 1 - 2) or b = 9 - (3 + 1 - 2) or b = 7 ; --a ok a++ ok; magic a = 2)))
// c = 9 - 18 - 3 + 7 = ` + c + ';');
alert(correctAnswer);

if (correctAnswer == false) alert('Very bad')
else alert('Good :)');

console.log(a);
console.log(b);
console.log(typeof c);
console.log(c);
