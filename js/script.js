'use strict';

// Task 10

// let numOrStr = prompt('input number or string');
// console.log(numOrStr)
//
// if(numOrStr === null) {
//     console.log('вы отменили');
// } else if( numOrStr.trim() === '' ) {
//     console.log('Empty String');
// } else if( isNaN( +numOrStr ) ) {
//     console.log(' number is Ba_NaN');
// } else {
//     console.log('OK!');
// }

// let numOrStr = prompt('input number or string');
// console.log(numOrStr);
// switch (numOrStr){
//     case null:
//         console.log('вы отменили');
//         break;
//     case '':
//         console.log('Empty String');
//         break;
//     default:
//         switch (isNaN(+numOrStr)){
//             case true:
//                 console.log(' number is Ba_NaN');
//                 break;
//             default:
//                 console.log('OK!');
//         }
// }

//Task 11
const a = 3;
const b = 5;
// Если переменная a равна нулю, то выведите ‘Верно’, иначе выведите ‘Неверно’.

a === 0? console.log('Верно'):console.log('Неверно');

// Если переменная a больше нуля, то выведите ‘Верно’, иначе выведите ‘Неверно’.
a > 0? console.log('Верно'):console.log('Неверно');

// Если переменная a меньше нуля, то выведите ‘Верно’, иначе выведите ‘Неверно’.
a < 0? console.log('Верно'):console.log('Неверно');

// Если переменная a больше или равна нулю, то выведите ‘Верно’, иначе выведите ‘Неверно’.
a >= 0? console.log('Верно'):console.log('Неверно');

// Если переменная a меньше или равна нулю, то выведите ‘Верно’, иначе выведите ‘Неверно’.
a <= 0? console.log('Верно'):console.log('Неверно');

// Если переменная a не равна нулю, то выведите ‘Верно’, иначе выведите ‘Неверно’.
a !== 0? console.log('Верно'):console.log('Неверно');

// Если переменная a равна ‘test’, то выведите ‘Верно’, иначе выведите ‘Неверно’.
a == 'test'? console.log('Верно'):console.log('Неверно');

// Если переменная a равна ‘1’ и по значению и по типу, то выведите ‘Верно’, иначе выведите ‘Неверно’.
a === 1? console.log('Верно'):console.log('Неверно');

// Если переменная a больше нуля и меньше 5-ти, то выведите ‘Верно’, иначе выведите ‘Неверно’.
a > 0 && a<5 ? console.log('Верно'):console.log('Неверно');

// Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной на экран.
a === 0 || a===2 ? console.log(`${a + 7}`):console.log(`${a/10}`);

// Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания).
a <= 1 && b>=3 ? console.log(`${a + b}`):console.log(`${a - b}`);

// Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите ‘Верно’, в противном случае выведите ‘Неверно’.
a > 2 && a <11 || b>=6 && b<14 ? console.log('Верно'):console.log('Неверно');

// Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение ‘1’, то в переменную result запишем ‘зима’, если имеет значение ‘2’ – ‘весна’ и так далее. Решите задачу через switch-case.
// const num = +prompt('Введите число от 1 до 4 включительно');
// let result = null;
// switch (num){
//     case 1:
//        result = 'зима';
//        break;
//     case 2:
//         result = 'весна';
//         break;
//     case 3:
//         result = 'лето';
//         break;
//     case 4:
//         result = 'осень';
//         break;
//     default:
//         result = 'Вы ввели число не от 1 до 4';
// }
// alert(result);

