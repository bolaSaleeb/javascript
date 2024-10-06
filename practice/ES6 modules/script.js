// import {PI, getCircumference, getArea} from './mathUtil.js';
// console.log(PI);



// function func1(callback){
//     setTimeout(() => {
//         console.log("task 0");
//         callback();
//     }, 3000);
// }

// function func2(){
//     console.log("task 1");
//     console.log("task 2");
//     console.log("task 3");
    
// }


// func1(func2);




// try{
//     console.log(x);
// }
// catch(error){
//     console.error(error);
// }
// finally{
//     console.log("this always executes");
// }
// console.log("you have reached the end");

try{
    const dividend = Number(window.prompt("Enter a dividened"));
    const divisor = Number(window.prompt("Enter a divisor"));

    console.log(divisor);

    if(typeof(divisor) == "string"){
        throw new Error("You can't divide by zero");
    }

    const result = dividend/divisor;
    console.log(dividend/divisor);
}
catch(error){
    console.log(error);
}

console.log("you have reached the end...");