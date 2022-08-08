// //
// // - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і
// function squareRectangle(a, b) {
//     return  a * b;
// }
// let squareR = squareRectangle(10, 20)
// console.log(squareR);
//
// // - створити функцію яка обчислює та повертає площу кола з радіусом r
// function radiusCircle (r) {
//     let radius = 3.14 * r * 2;
//     return radius;
// }
// console.log(radiusCircle(10));
// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function squareCylinder(h, r) {
//     let square = 2 * 3.14 * h * r;
//     return square;
// }
// console.log(squareCylinder(10, 10));
// - створити функцію яка приймає масив та виводить кожен його елемент
// const names = ['sophie', 'george', 'waldo', 'stephen', 'henry'];
// function allNames() {
//     return names
// }
// console.log(allNames())

//  let names = ['sophie', 'george', 'waldo', 'stephen', 'henry'];
//  function allNames(names) {
//      for (let i = 0; i < names.length; i++) {
//          console.log(names[i])
//      }
//  }
//      allNames(names)
//
// // }
// // - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function paragraph(text) {
//     document.write(`<p>${text}</p>`)
// }
// paragraph("Hello world")
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function arrey (text){
//     document.write(`<ul>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`</ul>`)
// }
// arrey("hello world")
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function ulText(arguments, number) {
//     document.write(`<ul>`)
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${arguments}</li>`)
//     }
//     document.write(`</ul>`)
// }
// ulText("Hello World", 3)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let array = [true, 234, false, 'string', 1234, 'text'];
function list(arguments) {
    document.write(`<ul>`);
    for (let i = 0; i < arguments.length; i++) {
        document.write(`<li>${arguments[i]}</li>`)

    }
    document.write(`</ul>`);
}
list(array);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let objectArr = [
    {id: 1, name: 'Mikola', age: 45},
    {id: 2, name: 'Ruslan', age: 41},
    {id: 4, name: 'Pavlo', age: 15}
]
function diferent(objectItems) {
    for (const objectItem of objectItems) {
        document.write(`<div>${objectItem.id} -- ${objectItem.name} -- ${objectItem.age} </div>`)
    }

}
diferent(objectArr)
// - створити функцію яка повертає найменьше число з масиву
// let array = [24,457,2364,2]
//  function maxNumb(arr) {
//      let min = arr[0];
//     for (let number of arr) {
//         if (number < min) {
//             min = number;
//         }
//      }
//      return min;
//  }
//
//  console.log(maxNumb(array));
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

function sum() {
    let xxx = 0;
    for (const argument of arguments) {
        xxx += argument
    }
    return xxx;
}
let arr = sum (12, 345, 55, 1)
console.log(arr)
