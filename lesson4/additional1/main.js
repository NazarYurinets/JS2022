// --створити масив з:
//     - з 5 числових значень
// let arr = [1, 232, 434, 4, 55]
// let qwe = ['qwe', 'red', 'gray', 'qbj','asd' ]
// let zxc = [1, true, false,'ewr', true ]
// console.log(arr);
// console.log(qwe);
// console.log(zxc);
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let zxc = [00, 11, 22,'33', 44 ];
// console.log(zxc[3]);


// let xxx =[]
// xxx[0] = 1;
// xxx[1] = 2;
// xxx[2] = 44;
// console.log(xxx)
//
//
//
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
// let x = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0
// while (i < x.length){
//     let numb = x[i]
//     console.log(numb)
//     i++
// }
//     2. перебрати його циклом for
//   let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     console.log(arrElement)
// }
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let arrNumberOdd = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < arrNumberOdd.length) {
//     if (i % 2 !== 0) {
//         console.log(arrNumberOdd[i])
//     }
//     i++
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let arrNumberOdd = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < arrNumberOdd.length; i++) {
//     const arrNumberOddElement = arrNumberOdd[i];
//     if (i % 2 === 0)
//         console.log(arrNumberOddElement)
// }
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let evenNumbers = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < evenNumbers.length){
//     if (evenNumbers[i] % 2 === 0){
//     console.log(evenNumbers[i])
// }
//     i++
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// let evenNumbers = [2,17,13,6,22,31,45,66,100,-18];
// for (let j = 0; j < evenNumbers.length; j++) {
//     const evenNumber = evenNumbers[j];
//     if (evenNumber % 2 === 0 ){
//         console.log(evenNumber)
//     }
// }
// 7. замінити кожне число кlet ратне 3 на слово "okten"
// let evenNumbers = [2,17,13,6,22,31,45,66,100,-18];
// for (let evenNumber of evenNumbers) {
//     if (evenNumber % 3 === 0){
//         evenNumber = "okten"
//         console.log(evenNumber)
//     }
//
// }

// 8. вивести масив в зворотньому порядку.
// let evenNumbers = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = evenNumbers.length - 1; i >= 0 ; i--) {
//     const evenNumber = evenNumbers[i];
//     console.log(evenNumber)
//
// }
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 1. перебрати його циклом while
// let x = [2,17,13,6,22,31,45,66,100,-18];
// let i = x.length - 1
// while (i >= 0){
//     let numb = x[i]
//     console.log(numb)
//     i--
// }

//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (i = 1; i <= number.length; i++ ){
//     console.log(number[i])
// }
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
//   let string = ["page1","page2","page3","page4","page5","page6","page7", "page8","page9","page10"];
//  for (i = 0; i <= string.length; i++ ){
//      console.log(string[i])
// }
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let string = [1233,true,214,"page4","page5",false,"page7", 12444,"page9",true];
// for (let i = 0; i < string.length; i++) {
//     const stringElement = string[i];
//     if (typeof stringElement === "boolean"){
//         console.log(stringElement)
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let string = [1233,true,214,"page4","page5",false,"page7", 12444,"page9",true];
// for (let i = 0; i < string.length; i++) {
//     const stringElement = string[i];
//     if (typeof stringElement === "string"){
//         console.log(stringElement)
//     }
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let string = [1233,true,214,"page4","page5",false,"page7", 12444,"page9",true];
// for (let i = 0; i < string.length; i++) {
//     const stringElement = string[i];
//     if (typeof stringElement === "number"){
//         console.log(stringElement)
//     }
// }
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let string = [1233, true, 214, "page4","page5",false,"page7", 12444,"page9",true];
// let i = 0;
// while (i < string.length){
//     let xxx = string[i]
//     if (typeof xxx === "string") {
//         console.log(xxx)
//     }
//     i++
// }
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let strArr = []
// strArr[1] = 12
// strArr[2] = 12
// strArr[3] = 23
// strArr[4] = 44
// strArr[5] = 145
// strArr[6] = 145
// strArr[7] = 16
// strArr[8] = 18
// strArr[9] = 16
// strArr[10] = 19
//
// for(let i = 0; i < strArr.length; i++){
//     console.log(strArr[i]);
// }
// // - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for(let i = 0; i < 10; i++){
//     document.write(`<div>test </div>`)
//     console.log([i])
// }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for(let i = 0; i < 100; i++){
//     document.write(`<h2>123</h2>`)
//     console.log([i])
// }
// // - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for(let i = 0; i < 100; i += 2){
//     document.write(`${i}`)
//     console.log([i])
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//  for(let i = 0; i < 100; i++){
//      if( i % 2 === 0)
//         console.log([i])
//     document.write(`${i}`)
//
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for(let i = 0; i < 100; i++){
//     if( i % 2 === 1 && i !== 0 ){
//         console.log(i)
//         document.write(`${i}`)
//     }
// }
// //
//
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор


