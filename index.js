// 1. Hoisting

// console.log(a);
// var a=5;

// 2. Data-Types in JS (reference vs primitive)

// let a=[10,11];
// b=a;
// b.pop();

// console.log(b);
// console.log(a);
// Reason: a is an array which is a reference datatype so its value is refering to b.
// i.e a=[10,11]=b

// 3. if( true/false)

// 4. Loops

// console.log("ammar")
// console.log("ammar")
// console.log("ammar")

//Run loop from 25-50

// for (let i = 25; i < 51; i++) {
//      console.log(i);
// }

// 5.Functions

// Here a,b are parameters which are the variables which stores data,which is then passed inside function body.
// function greet(a,b)
// {
//     console.log("Hello", a, b,"!");
// }

// // Here Ammar,Rafeh are arguments (values which will be given to function)
// greet("Ammar","Rafeh");

// 6.Object

// a)Blank object
let a={};
console.log(a);

// b)Filled object
let student={
    name:"Ammar",
    age:21,
    uni:"uoh",
    class:"bscs-5thA",
    greeting:function Hello() {
        console.log("hehe")
    }
    // here greeting is amethod not aproperty anymore b/c its value is a function

}
console.log(student.abc());