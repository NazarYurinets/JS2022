// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// function User(id, name, surname , email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// // let xxx = new User(12,'Nazar', 'Yurynets','nazar.yurynets@gmail.com', 380730091402);
// // console.log(xxx)
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
// let users = [
//     new User(3, "vasya", "baklajan", "hjhqwe@qwef","+3805767667"),
//     new User(1, "pavlo", "pnh", "hjgqwe@qwef","+3805767667"),
//     new User(2, "petro", "baranow", "klkqwe@qwesdf","+380573312667"),
//     new User(10, "sasha", "baran234ow", "qsdfwe@qwef","+2232767667"),
//     new User(4, "nazar", "barasddfnow", "qsdfwe@qwef","+3805767667"),
//     new User(8, "anton", "baranow", "qwebvb@qwef","+3805767667"),
//     new User(9, "stepan", "yurynets", "qvwe@qwef","+3805767667"),
//     new User(7, "ivan", "baranow12", "qwnbe@qwef","+3805767667"),
//     new User(5, "jon", "stepanov", "nmqwe@qwef","+3805767667"),
//     new User(6, "li", "urumaky", "mlkjlwe@qwef","+3805767667")
// ];
// console.log(users)
// //
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filterUser = users.filter((item) =>{
//     if (item.id % 2 ===0){
//         return item;
//     }
// })
//
// console.log(filterUser);
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sortUser = users.sort(function(a,b){
//     return a.id - b.id
// })
// console.log(sortUser);


//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
function Client(id, name, surname, email, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.order = order;
}
// створити пустий масив, наповнити його 10 об'єктами Client
let arrClient = [
    new Client(3, "vasya", "baklajan", "hjhqwe@qwef",["laptop", "vacuum", "cleaner", "freezer"]),
    new Client(1, "pavlo", "pnh", "hjgqwe@qwef",["pc", "vacuum", "cleaner", "freezer"]),
    new Client(2, "petro", "baranow", "klkqwe@qwesdf",["cd", "vacuum"]),
    new Client(10, "sasha", "baran234ow", "qsdfwe@qwef",["sdfdg", "vacuum", "cleaner", "freezer"]),
    new Client(4, "nazar", "barasddfnow", "qsdfwe@qwef",["sofa", "cleaner", "freezer"]),
    new Client(8, "anton", "baranow", "qwebvb@qwef",["apple", "vacuum", "cleaner", "freezer"]),
    new Client(9, "stepan", "yurynets", "qvwe@qwef",["banana", "vacuum",  "freezer"]),
    new Client(7, "ivan", "baranow12", "qwnbe@qwef",["laptop", "vacuum", "cleaner", "freezer","vacuum", "cleaner", "freezer"]),
    new Client(5, "jon", "stepanov", "nmqwe@qwef",["laptop"]),
    new Client(6, "li", "urumaky", "mlkjlwe@qwef",["laptop", "vacuum", "cleaner", "freezer","weet"])
]
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortClient = arrClient.sort((a, b) => a.order.length - b.order.length)
console.log(sortClient);

//
/ Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
function Car(model, producer, year, maxSpeed, volume){
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.model = volume;
    this.drive = () =>{
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    this.info = () =>{
        console.log(`модель - ${this.model}`, `виробник ${this.producer}`, `рік${this.year}` )
    };
    this.increaseMaxSpeed = (newSpeed) =>{
        this.maxSpeed = maxSpeed + newSpeed;
    };
    this.changeYear = (newValue) =>{
        this.year = newValue
    };
    this.addDriver = (driver) =>{
        this.drive = driver
    };
}
let addCar = new Car('audi', 'Germany', 2010, 270, 2.0);
// console.log(addCar);
// addCar.drive();
// addCar.info();
// addCar.increaseMaxSpeed(60);
// addCar.drive();
// addCar.changeYear(2020)
// addCar.info();
// addCar.addDriver('Vasya')
// console.log(addCar);
// //
// // - (Те саме, тільки через клас)
// // Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Cars {
//     constructor(model, producer, year, maxSpeed, capacity) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.capacity = capacity
//     };
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} кілометри на годину `);
//     };
//
//     info() {
//         console.log(`модель - ${this.model}`, `виробник ${this.producer}`, `рік${this.year}`)
//     };
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed = this.maxSpeed + newSpeed;
//     };
//
//     changeYear(newValue) {
//         this.year = newValue
//     };
//
//     addDriver(driver) {
//         this.drive = driver
//     };
// }
// let addCars = new Cars('audi', 'Germany', 2010, 270, 2.0);
// console.log(addCars);
// addCar.drive();
// addCar.info();
// addCar.increaseMaxSpeed(60);
// addCar.drive();
// addCar.changeYear(2020)
// addCar.info();
// addCar.addDriver('Vasya')
// console.log(addCars);
//



// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


// class Popelushka {
//     constructor(name, age, size,) {
//         this.name = name;
//         this.age = age;
//         this.size = size;
//     };
// }
//     let popelushka = [
//         new Popelushka('olha', 22, 40),
//         new Popelushka('olena', 20, 40),
//         new Popelushka('maria', 19, 40),
//         new Popelushka('nika', 23, 40),
//         new Popelushka('darina', 18, 40),
//         new Popelushka('yulia', 22, 36),
//         new Popelushka('britny', 22, 39),
//         new Popelushka('marine', 32, 38),
//         new Popelushka('katia', 24, 40),
//         new Popelushka('sakura', 17, 40)
// ];
// console.log(popelushka)
// class Prince {
//     constructor(name,age,shoe) {
//     this.name = name;
//     this.age = age;
//     this.shoe = shoe;
//     };
// }
//     let prince = new Prince("vasya", 22, 45)
//
// let found = (popelushka,prince) =>{
// for (let popelushkaElement of popelushka){
//     if (popelushkaElement.size === prince.shoe){
//         return `${popelushkaElement.name} повинна бути з тобою`
// }
// }
// };
// console.log(found(popelushka,prince));
//dsf
//
// let popelushaFind = popelushka.find((item) => item.size === prince.shoe);
//
// console.log(popelushaFind);



