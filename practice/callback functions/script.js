
// hello(function(){
//     console.log('bye');
// });




// function hello(callback){
//     console.log("hello");
//     callback();
// }

// // function hello(){
// //     setTimeout(function(){
// //         console.log("Hello");
// //     }, 3000);
// // }

// function goodbye(){
//     console.log("Goodbye");
// }


// let numbers = [1,2,3,4,5];

// numbers.forEach(double);
// numbers.forEach(display);

// function display(element){
//     console.log(element);
// }

// function double(element, index, array){
//     array[index] = element*2;
// }

// const numbers = [1,2,3,4,5];

// const result = numbers.map(square);
// console.log(result);

// function square(element){
//     return Math.pow(element,2);
// }


// const grades = [76, 50, 90, 86,80, 90];

// const maximum = grades.reduce(function(previous, next){return Math.max(previous,next)});
// console.log(maximum);


// const hello = function(){
//     console.log("Hello");
// }
// hello();


// const person = {
//     firstName:"Spongebob",
//     secondName: "Squarepants",
//     age: 30,
//     isEmployed:true,
//     sayHello: (name)=>{console.log(name)}
// }


// person.sayHello("sponge");



// class MathUtil{
//     static PI = 3.14149;

//     static getDiameter(radius){
//         return radius*2;
//     }
// }
// MathUtil.PI = 15;
// console.log(MathUtil.getDiameter(MathUtil.PI));

// class User{

//     static userCount=0;

//     constructor(username){
//         User.userCount++;
//     }

// }

// const user1 = new User("sdfds");
// const user2 = new User("sdfds");

// console.log(User.userCount);


// class Rectangle{
//     constructor(width, height){
//         this.width = width;
//         this.height = height;
//     }

//     set width(newWidth){
//         if(newWidth>0){
//             this._width = newWidth;
//         }else{
//             console.log("sdfds");
//         }
//     }

//     set height(newHeight){

//     }

//     get wiidth(){
//         return this._width;
//     }
// }


// const rectangle = new Rectangle(100,100);
// console.log(rectangle.wiidth);


const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age:30,
    job: "Fry"
}


const {lastName,firstName,age,job} = person1;
console.log(firstName);

