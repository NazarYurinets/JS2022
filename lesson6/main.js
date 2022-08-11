// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let xxx = 'hello world';
console.log(xxx.length)
let qqq = 'lorem ipsum';
console.log(qqq.length)
let zzz = 'javascript is cool';
console.log(zzz.length)

// let upperCase = 'hello world';
// console.log(upperCase.toUpperCase());
// let upper = 'lorem ipsum;
// console.log(upper.toUpperCase());
// let toUpper = 'javascript is cool';
// console.log(toUpper.toUpperCase());
//
// let upperCase = 'HELLO WORLD';
// console.log(upperCase.toLowerCase());
// let upper = 'LOREM IPSUM;
// console.log(upper.toLowerCase());
// let toUpper = 'JAVASCRIPT IS COOL';
// console.log(toUpper.toLowerCase());
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
console.log(str.substring(1, 13))
let strClean = str.trim()
console.log(strClean);
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//    let str = 'Ревуть воли як ясла повні';
//     // ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//     function stringToArray(str) {
//         return str.split(' ')
//     }
//
// console.log(stringToarray(str));


//
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let arr = [10,8,-7,55,987,-1011,0,1050,0];
let map1 = arr.map( num => "" + num )
console.log(map1);
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
function sortNums(num, direction) {
    let sortArr = [];
    if (direction ==="wqe"){
        sortArr = num.sort((a,b) => a - b);
    } else if (direction === "wqe"){
        sortArr = num.sort((a,b) => b - a);
    }
    return sortArr;
}
console.log(sortNums([11,21,3], "wqe"));

const numbers = [11,21,3];
const sorted = numbers.sort((a, b) => a + b);
console.log(sorted);

//
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// -- відсортувати його за спаданням за monthDuration
let coursesMouth = coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration)
console.log(coursesMouth);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let coursesFilter = coursesAndDurationArray.filter(courses => courses.monthDuration > 5)
console.log(coursesFilter);
//

//
// описати колоду карт


let cards = [
    {cardSuit: 'clubs', value: 'Ace', color:'black'},
    {cardSuit: 'clubs', value: 2, color:'black'},
    {cardSuit: 'clubs', value: 3, color:'black'},
    {cardSuit: 'clubs', value: 4, color:'black'},
    {cardSuit: 'clubs', value: 5, color:'black'},
    {cardSuit: 'clubs', value: 6, color:'black'},
    {cardSuit: 'clubs', value: 7, color:'black'},
    {cardSuit: 'clubs', value: 8, color:'black'},
    {cardSuit: 'clubs', value: 9, color:'black'},
    {cardSuit: 'clubs', value: 10, color:'black'},
    {cardSuit: 'clubs', value: 'Jack', color:'black'},
    {cardSuit: 'clubs', value: 'Queen', color:'black'},
    {cardSuit: 'clubs', value: 'King', color:'black'},

    {cardSuit: 'diamonds', value: 'Ace', color:'red'},
    {cardSuit: 'diamonds', value: 2, color:'red'},
    {cardSuit: 'diamonds', value: 3, color:'red'},
    {cardSuit: 'diamonds', value: 4, color:'red'},
    {cardSuit: 'diamonds', value: 5, color:'red'},
    {cardSuit: 'diamonds', value: 6, color:'red'},
    {cardSuit: 'diamonds', value: 7, color:'red'},
    {cardSuit: 'diamonds', value: 8, color:'red'},
    {cardSuit: 'diamonds', value: 9, color:'red'},
    {cardSuit: 'diamonds', value: 10, color:'red'},
    {cardSuit: 'diamonds', value: 'Jack', color:'red'},
    {cardSuit: 'diamonds', value: 'Queen', color:'red'},
    {cardSuit: 'diamonds', value: 'King', color:'red'},

    {cardSuit: 'hearts', value: 'Ace', color:'red'},
    {cardSuit: 'hearts', value: 2, color:'red'},
    {cardSuit: 'hearts', value: 3, color:'red'},
    {cardSuit: 'hearts', value: 4, color:'red'},
    {cardSuit: 'hearts', value: 5, color:'red'},
    {cardSuit: 'hearts', value: 6, color:'red'},
    {cardSuit: 'hearts', value: 7, color:'red'},
    {cardSuit: 'hearts', value: 8, color:'red'},
    {cardSuit: 'hearts', value: 9, color:'red'},
    {cardSuit: 'hearts', value: 10, color:'red'},
    {cardSuit: 'hearts', value: 'Jack', color:'red'},
    {cardSuit: 'hearts', value: 'Queen', color:'red'},
    {cardSuit: 'hearts', value: 'King', color:'red'},
    {value: 'Joker', color:'red'},

    {cardSuit: 'spades', value: 'Ace', color:'black'},
    {cardSuit: 'spades', value: 2, color:'black'},
    {cardSuit: 'spades', value: 3, color:'black'},
    {cardSuit: 'spades', value: 4, color:'black'},
    {cardSuit: 'spades', value: 5, color:'black'},
    {cardSuit: 'spades', value: 6, color:'black'},
    {cardSuit: 'spades', value: 7, color:'black'},
    {cardSuit: 'spades', value: 8, color:'black'},
    {cardSuit: 'spades', value: 9, color:'black'},
    {cardSuit: 'spades', value: 10, color:'black'},
    {cardSuit: 'spades', value: 'Jack', color:'black'},
    {cardSuit: 'spades', value: 'Queen', color:'black'},
    {cardSuit: 'spades', value: 'King', color:'black'},
    {value: 'Joker', color:'black'},
];
// - знайти піковий туз
let filter0 = cards.filter(value => value.value === 'Ace' && value.cardSuit === 'clubs');
console.log(filter0);
// - всі шістки
let filter1 = cards.filter(value => value.value === 6);
console.log(filter1);
// - всі червоні карти
let filter2 = cards.filter(value => value.color === 'red');
console.log(filter2 );
// - всі буби
let filter3 = cards.filter(value => value.cardSuit === 'diamonds');
console.log(filter3);
// - всі трефи від 9 та більше
let filter4 = cards.filter(value => value.value > 8 + '' && value.cardSuit === 'spades');
console.log(filter4);

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let reduce = cards.reduce(function (accumulator, card) {
    if (card.cardSuit === 'spades') {
        accumulator.spades.push(card);
    }
    if (card.cardSuit === 'diamonds') {
        accumulator.diamonds.push(card);
    }
    if (card.cardSuit === 'hearts') {
        accumulator.hearts.push(card);
    }
    if (card.cardSuit === 'clubs') {
        accumulator.clubs.push(card);
    }
    return accumulator;
}, {spades: [], diamonds: [], hearts: [], clubs: []});
console.log(reduce);