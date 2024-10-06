// console.log(`Hello`);
// window.alert(`this is an alert`);

// document.getElementById("myH1").textContent = "Hello";
// document.getElementById("myP").textContent = "I like pizza";

// let username;

//  document.getElementById("mySubmit").onclick = function(){
//     username = document.getElementById("myText").value;
//     console.log(username);
//  };


// const decreaseBtn = document.getElementById("decreaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const increaseBtn = document.getElementById("increaseBtn");
// const countLabel = document.getElementById("countLabel");
// let count = 0;

// increaseBtn.onclick = function(){
//    count++;
//    countLabel.textContent = count;
// }

// decreaseBtn.onclick = function(){
//    count--;
//    countLabel.textContent = count;
// }

// resetBtn.onclick = function(){
//    count=0;
//    countLabel.textContent = count;
// }

// const fullName = "Bro Code";

// let firstName = fullName.slice(0,3);
// let lastName = fullName.slice(4,8);
// console.log(firstName);
// console.log(lastName);

// let userName = window.prompt("Enter your username");

// userName = userName.trim();
// let letter = userName.charAt(0);
// letter = letter.toUpperCase();


// let extraChars = userName.slice(1);
// extraChars = extraChars.toLowerCase();
// userName = letter+extraChars;
// console.log(userName);


// userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();
// console.log(userName);

// function isEven(number){
//    return number%2 === 0? true:false;
// }

// console.log(isEven(6));

// const textBox = document.getElementById("textBox");
// const toFahrenheit = document.getElementById("toFahrenheit");
// const toCelsius = document.getElementById("toCelsius");
// let temp;

// function convert(){
//    if(toFahrenheit.checked){
//       console.log("checked");
//    }
//    console.log("sdfds");
// }

// function rollDice(){
//    const numOfDice = document.getElementById("numOfDice").value;
//    const diceResult = document.getElementById("diceResult");
//    const diceImages = document.getElementById("diceImages");
//    const values = [];
//    const images = [];

//    for(let i=0; i<numOfDice; i++){
//       const value = Math.floor(Math.random()*6) + 1;
//       values.push(value);
//       images.push(`<img src="dice_images/${value}.png">`)
//    }

//    diceResult.textContent = `dice: ${values.join(', ')}`;
//    diceImages.innerHTML = images.join('');
// }


// function generatePassword(length, includeLowerCase, includeUppercase, includeNumbers, includeSymbols){

//    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
//    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//    const numberChars = "0123456789";
//    const symbolChars = "!@#$%^&*()_+";

//    let allowedChars = "";
//    let password = "";

//    allowedChars+= includeLowerCase? lowercaseChars:"";
//    allowedChars+= includeUppercase? uppercaseChars:"";
//    allowedChars+= includeNumbers? numberChars: "";
//    allowedChars+= includeSymbols? symbolChars: "";

//    console.log(allowedChars);

//    return "";
// }

// const passwordLength = 12;
// const includeLowerCase = true;
// const includeUppercase = true;
// const includeNumbers = true;
// const includeSymbols = true;

// const password = generatePassword(passwordLength, includeLowerCase, includeUppercase, includeNumbers, includeSymbols);
// console.log(`Generated Password: ${password}`);


// goodbye(hello);

// function hello(callback){
//    setTimeout(function(){
//       console.log("hello!");
//    }, 3000);
   
// }

// function goodbye(callback){
   
//    console.log('goodbye');
//    callback();
// }

// class Product{
//    constructor(name, price){
//       this.name = name;
//       this.price = price;
//    }

//    displayProduct(){
//       console.log(`Product: ${this.name}`);
//       console.log(`Price: ${this.price.toFixed(4)}`);
//    }
// }

// const product1 = new Product("Shirt", 19.99);
// const product2 = new Product("Pants", 22.50);
// const product3 = new Product("Pants", 22.50);

// product2.displayProduct();


// class Animal{
//    alive = true;

//    eat(){
//       console.log(`This ${this.name} is eating`);
//    }
//    sleep(){
//       console.log(`This ${this.name} is sleeping`);
//    }
// }

// class Rabbit extends Animal{
//    name = "Rabbit";  
// }

// class Fish extends Animal{
//    name = "Fish";
// }

// class Hawk extends Animal{
//    name = "Hawk";
// }

// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();

// console.log(rabbit.alive);
// fish.sleep();


// class User{
//    static userCount = 0;

//    constructor(username){
//       this.username = username;
//       User.userCount++;
//    }

//    static getUserCount(){
//       console.log(`There are ${User.userCount} users online`);
//    }
// }

// const user1 = new User("Spongebob");
// const user2 = new User("Patric");
// User.getUserCount();
// console.log(User.userCount);

// class Animal{

//    constructor(name, age){
//       this.name = name;
//       this.age = age;
//    }

//    move(speed){
//       console.log(`The ${this.name} moves at a speed of ${speed} mph`);
//    }
// }
// class Rabbit extends Animal{
//    constructor(name, age, runSpeed){
//       super(name, age);
//       this.runSpeed = runSpeed;
//    }

//    run(){
//       console.log(`This ${this.name} can run`);
//       super.move(this.runSpeed);
//    }

// }
// class Fish extends Animal{
//    constructor(name, age, swimSpeed){
//       super(name, age);
//       this.swimSpeed = swimSpeed;
//    }

//    swim(){
//       console.log(`This ${this.name} can swim`);
//    }
// }
// class Hawk extends Animal{
//    constructor(name, age, flySpeed){
//       super(name, age);
//       this.flySpeed = flySpeed;
//    }

//    run(){
//       console.log(`This ${this.name} can fly`);
//    }
// }

// const rabbit = new Rabbit("rabbit", 1, 23);


class Address{

   constructor(street, city, country){
      
   }
}

