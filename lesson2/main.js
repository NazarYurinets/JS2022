// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// let array = [12, 'qwe', 333, false, true, 123, 'qwrasd', true, 987,[1,345,676]];
// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);
// console.log(array[4]);
// console.log(array[5]);
// console.log(array[6]);
// console.log(array[7]);
// console.log(array[8]);
// console.log(array[9][2]);
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(array[i]);
// }
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// let book1 ={
//     title: "Game of Thrones",
//     pageCount: 374,
//     genre: "fantasy"
// };
// let book2 ={
//     title: "Harry Potter ",
//     pageCount: 334,
//     genre: "fantasy"
// };
// let book3 ={
//     title: "The Alchemist",
//     pageCount: 145,
//     genre: "Quest",
// };

// console.log(book1["title"]);
// console.log(book3.pageCount);



// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
// let book1 = {
//     title: "Game of Thrones",
//     pageCount: 374,
//     genre: "fantasy",
//     authors: {name:'George R. R. Martin', age: 73}
// };
// console.log(book1);
// let book2 = {
//     title: "Harry Potter ",
//     pageCount: 334,
//     genre: "fantasy",
//     authors: {name:'J. K. Rowling', age: 56}
// };
// console.log(book2);
// let book3 = {
//     title: "The Alchemist",
//     pageCount: 145,
//     genre: "Quest",
//     authors: {
//         name:'Pablo Coelo',
//         age: 61
//     }
// };
// console.log(book3);
// console.log(book3.authors.name);
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {
        name: 'Anton',
        username:'qerqwer',
        password: 'f34f43f34f'
    },
    {
        name: 'Vasya',
        username:'asdgadsga',
        password: 'qrfreferf'
    },
    {
        name: 'Nazar',
        username:'qerqw123er',
        password: '98234134'
    },
    {
        name: 'Pablo',
        username:'qerqweqweeeeeeeeer',
        password: '09876534'
    },
    {
        name: 'Petro',
        username:'111qerqwer',
        password: 'qf43q4qf3'
    },
    {
        name: 'Mykola',
        username:'444qerqwer',
        password: 'q44fqffq4'
    },
    {
        name: 'Taras',
        username:'555qerqwer',
        password: 'q4f4ff4f'
    },
    {
        name: 'Marko',
        username:'666qerqwer',
        password: '34f34f4f3'
    },
    {
        name: 'Ira',
        username:'Iraqerqwer',
        password: 'qrefqrfqr'
    },
    {
        name: 'Anton',
        username:'qerqwer',
        password: '34f34f34f'
    },
];

// console.log(users[0].password);
// console.log(users[1].password);
// console.log(users[2].password);
// console.log(users[3].password);
// console.log(users[4].password);
// console.log(users[5].password);
// console.log(users[6].password);
// console.log(users[7].password);
// console.log(users[8]["password"]);
// console.log(users[9]["password"]);


for (let i = 0; i < users.length; i++){
    const element = users[i];
    console.log(users[i].password);
}



