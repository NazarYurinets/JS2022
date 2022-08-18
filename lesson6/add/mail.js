// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
let cutString = (str, n) =>{
    let string = []
    while (str.length){
        string.push(str.substr(0,n))
        str = str.slice(n)
    }
   return string
}
document.write(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.

// document.writeln(delete_characters(str, 7)); // Каждый
let str2 = 'Каждый охотник желает знать';
let deleteCharacters = (str, length) =>{
    let subString = str.substring(str, length);
    document.write(subString);
}
deleteCharacters(str2, 7);

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let str3 = "HTML JavaScript PHP";
let insertDash = str => {
    let newStr = str.replaceAll(' ', '-').toUpperCase();
    document.write(newStr);
}
insertDash(str3)

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let c = 'javascript is cool';
let firstLetterToUpperCase = str =>{
    let firstLetter = str[0].toUpperCase();
    let nextLetter = str.slice(1, str.length)
    let concat = firstLetter.concat(nextLetter);
    document.write(concat);
}
firstLetterToUpperCase(c);
// - Дано список імен.
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
let validName = n => {
    let newName = n.replaceAll('..', ' ')
        .replaceAll('---', ' ')
        .replaceAll('__', ' ')
    console.log(newName);
}
validName(n1);
validName(n2);
validName(n3);

//
//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let randomNumber = (arr,num) =>{
    for (let i = 0; i < num; i++) {
        arr.push(Math.round(Math.random()*100))
    }
    console.log(arr)
}
let array = [];
randomNumber(array,15)
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
let arraySort =[];
randomNumber(arraySort,10);
let sorts = arraySort.sort((a , b) => a - b );
console.log(sorts);
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
let arrayFilter =[];
randomNumber(arrayFilter,10);
let filter = arrayFilter.filter(a => (a %2 === 0));
console.log(filter);
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let capitalize = str =>{
    let array = str.split(' ');
    let newArray =[];
    for (let arrayElement of array) {
        let firstLetterToUpperCase = arrayElement[0].toUpperCase();
        let nexLetter = arrayElement.slice(1, arrayElement.length);
        let concat = firstLetterToUpperCase.concat(nexLetter);
        newArray.push(concat);
    }
    let newString = newArray.join(' ');
    console.log(newString);
}
capitalize(c)

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях

