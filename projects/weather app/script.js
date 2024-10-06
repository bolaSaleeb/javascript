// function task1(callback){
//     setTimeout(() => {
//         console.log("Task 1 complete");
//         callback();
//     }, 2000);
// }

// function task2(callback){
//     setTimeout(() => {
//         console.log("Task 2 complete");
//         callback();
//     }, 1000);
// }

// function task3(callback){
//     setTimeout(() => {
//         console.log("Task 3 complete");
//         callback();
//     }, 3000);
// }

// function task4(){
//     setTimeout(() => {
//         console.log("Task 4 complete");
        
//     }, 4000);
// }

// // task1(()=>{task2(()=>{task3(()=>{task4()})})});
// // task1(task2(task3(task4())));




//Promises

// function walkDog(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             const dogWalked = true;

//             if(dogWalked){
//                 resolve("You walked the dog!!");
//             }else{
//                 reject("you didn't walk the dog")
//             }
//         }, 1500);
//     })
// }

// function cleanKitchen(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             const kitchenCleaned = true;

//             if(kitchenCleaned){
//                 resolve("You cleaned the kitchen!!");
//             }else{
//                 reject("you didn't clean the kitchen")
//             }
//         }, 1500);
//     })
// }

// function takeOutTrash(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             const trashTaken = false;

//             if(trashTaken){
//                 resolve("You took out the trash");
//             }else{
//                 reject("you didn't take out the trash");
//             }
//         }, 1500);
//     })
// }

// walkDog().then(value=>{console.log(value); return cleanKitchen();})
//          .then(value=>{console.log(value); return takeOutTrash();})
//          .then(value=>{console.log(value); console.log("You finished all assigned tasks")})
//          .catch(error=>{console.log(error)});





//Async/Await

function walkDog(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const dogWalked = true;

            if(dogWalked){
                resolve("You walked the dog!!");
            }else{
                reject("you didn't walk the dog")
            }
        }, 1500);
    })
}

function cleanKitchen(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const kitchenCleaned = true;

            if(kitchenCleaned){
                resolve("You cleaned the kitchen!!");
            }else{
                reject("you didn't clean the kitchen")
            }
        }, 1500);
    })
}

function takeOutTrash(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const trashTaken = false;

            if(trashTaken){
                resolve("You took out the trash");
            }else{
                reject("you didn't take out the trash");
            }
        }, 1500);
    })
}

// walkDog().then(value=>{console.log(value); return cleanKitchen();})
//          .then(value=>{console.log(value); return takeOutTrash();})
//          .then(value=>{console.log(value); console.log("You finished all assigned tasks")})
//          .catch(error=>{console.log(error)});


async function doChores(){
    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);
    }catch(error){
        console.log(error);
    }
}

doChores();
