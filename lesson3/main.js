// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
//
let a = 0;

if (a !== 0){
    console.log('Вірно');
}else {
    console.log('Невірно');
}
//
// let a = -3;
//
// switch (a) {
//     case 0:
//         console.log("False")
//         break
//     default:
//         console.log("True");
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 54;
if (time > 0 && time <= 15 ){
    console.log('the first quarter');
}else if(time > 15 && time <= 30){
    console.log('the second quarter');
}else if (time > 30 && time <= 45) {
   console.log( "third quarter");
}else if (time > 45 && time <= 60) {
     console.log( "fourth quarter");
}else {
    console.log('wrong time');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day = +prompt("enter the date from 1 to 31");
// if(day <= 10){
//     console.log('the first decade of the month');
// }else if (day <= 20){
//     console.log('the second decade of the month');
// }else if (day <= 31){
//     console.log('the three decade of the month');
// }else {
//     console.log('wrong day');
// }
//
// // - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// let schedule = +prompt("Schedule for the week");
// switch (schedule) {
//     case 1:
//         console.log('Sunday');
//         break;
//     case 2:
//         console.log('Monday');
//         break;
//     case 3:
//         console.log('Tuesday');
//         break;
//     case 4:
//         console.log('Wednesday');
//         break;
//     case 5:
//         console.log('Thursday');
//         break;
//     case 6:
//         console.log('Friday');
//         break;
//     case 7:
//         console.log('Saturday');
//         break;
//
// }
//
// //     - Користувач вводить або має два числа.
// //         Потрібно знайти та вивести максимальне число з тих двох .
// //         Також потрібно врахувати коли введені рівні числа.
// let a = +prompt("Введіть перше число")
// let b = +prompt("Введіть друге число")
// if (a > b) {
//     console.log(`Перше число - більше`);
// }else if (a < b) {
//     console.log(`Друге число - більше`);
// } else {
//     console.log("Числа рівні")
// }
//



//     - є змінна х, яка мож//     е прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)


let x = +prompt('enter something');
if (!x){
    x = "default";
    console.log(x);
}else{
    console.log(x);
}

let s = NaN || "default";
console.log(s)

