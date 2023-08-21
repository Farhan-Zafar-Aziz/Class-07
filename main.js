"use strict";
//when we store different type values we use object 
let userName = "Hamzah";
let age = 20;
let isMarried = true;
// here we can use different properties and methods
let user1 = {
    userName: "Hamzah",
    age: 20,
    isMarried: false,
    greet: function () {
        console.log("Hello");
    },
};
console.log(user1); //{ userName: 'Hamzah', age: 20, isMarried: false }
//when I want to access user age 
console.log(user1.age); //20
user1.greet(); //20
//when we use same properties then we use object for more property values 
//for example
//Object 
let car = {
    name: "BMW",
    model: 2023,
    color: "Black",
};
console.log(car); // { name: 'BMW', model: 2023, color: 'Black' }
console.log(car.name + car.model + car.color); //BMW2023Black
let Gaari = {
    name: "BMW",
    model: 2023,
    color: "Black",
    start: function () {
        console.log("Engine Started");
    }
};
Gaari.start(); // Engine Started
//JSON (Javascript Object Notation)
//JSON is a text based data formate that is used to store and transfer data.
//JSON syntax like object but Json is totaly different from Object
//we can send all our data using JSON bcz JSON understands the all languages 
//JSON only contain properties cann`t contain functions/methods
//JSON ,we will convert in TS and also use for store arrays
//JSON SYNTAX
//  {
//       "name": "BMW",
//       "model": 2023,
//       "color": "Black",
//       "family": ["father","mother","brother"]
// }
//THREE TYPES ERROR
//1.syntax error
// lett firstName = "Hamzah"; // "lett" is error correct is (let)
//2.property error
// let name = "Aziz";
// console.logg(name); //"logg" or "loger" is errors correct is (log) property
// or [].splice
//3.Type Error
//message:string =2;
//you cann`t use nmbr type in string
//Module
//you can use module for store multiple and many values in an other file 
//by export and import 
//you use for methods/functions etc
