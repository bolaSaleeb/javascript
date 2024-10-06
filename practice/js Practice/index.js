// console.log("my first webpage");

// window.alert(`this is an alert`);


// document.getElementById("myH1").textContent = "Hi";



/***************************************************/
/***************************************************/
/***************************************************/


// let firstName = "Bro"
// let favoriteFood = "Pizza";
// let email = "bsaleeb@gmail.com";

// console.log(typeof firstName);
// console.log(`your name is ${firstName}`);



/***************************************************/
/***************************************************/
/***************************************************/


// let online = true;

// console.log(typeof online);



/***************************************************/
/***************************************************/
/***************************************************/



// let fullName = "Bola Saleeb";
// let age=25
// let student=false

// document.getElementById("p1").innerText="Hello";
// document.getElementById("p2").textContent = fullName;




/***************************************************/
/***************************************************/
/***************************************************/
//ACCEPTING USER INPUT
//1. window prompt (rarely used)
//2. HTML textbox

// let username;
// 
// username = window.prompt("what is your username?");


//////////////


// let username;
// document.getElementById("mySubmit").onclick = function(){
//     username = document.getElementById("myText").value;
//     document.getElementById("myH1").innerText = username;
//     console.log(username);
// }




/***************************************************/
/***************************************************/
/***************************************************/
//TYPE CONVERSION

// let age = window.prompt("How old are you?");
// age = Number(age);
// console.log(age, typeof age);


////////////////////

// let count=0;
// const decreaseBtn = document.getElementById("decreaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const increaseBtn = document.getElementById("increaseBtn");
// const countLabel = document.getElementById("countLabel");


// increaseBtn.onclick = function(){
//     count++;
//     countLabel.textContent = count+"";
// }

// decreaseBtn.onclick = function(){
//     count--;
//     countLabel.textContent = count+"";
// }

// resetBtn.onclick = function(){
//     count=0;
//     countLabel.textContent=count+"";
// }


/***************************************************/
/***************************************************/
/***************************************************/


// const myButton = document.getElementById("myButton");
// const myLabel = document.getElementById("myLabel");
// const min=1;
// const max=6;
// let randomNum;

// myButton.onclick = function(){
//     let randomNum = Math.floor(Math.random()*max)+min;
//     myLabel.textContent = randomNum;
// }




/***************************************************/
/***************************************************/
/***************************************************/
//Visa Part


// const myCheckbox = document.getElementById("myCheckbox");
// const visaBtn = document.getElementById("visaBtn");
// const masterCardBtn = document.getElementById("masterCardBtn");
// const payPalBtn = document.getElementById("payPalBtn");
// const mySubmit = document.getElementById("submitBtn");
// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");


// mySubmit.onclick = function(){
//     if(myCheckbox.checked){
//         subResult.textContent = "You are subscribed";
//     }
//     else{
//         subResult.textContent = "You are not subscribed";
//     }

//     if(visaBtn.checked){
//         paymentResult.textContent="You are paying with vis";
//     }
    
// }


/***************************************************/
/***************************************************/
/***************************************************/


// let phoneNumber = "123-21321-213";
// phoneNumber = phoneNumber.replaceAll("-","");
// console.log(phoneNumber);




/***************************************************/
/***************************************************/
/***************************************************/
//Functions


// const textBox = document.getElementById("textBox");
// const to = document.getElementById("textBox");
document.getElementsByClassName("sdfds")



/***************************************************/
/***************************************************/
/***************************************************/
//Arrays

let username = "Bro Code";
let letters = [...username];
console.log(letters);










