// const element = document.getElementById("fruits");

// const firstChild = element.firstElementChild;
// console.log(firstChild);

// firstChild.style.backgroundColor = "yellow";




// const ulElements = document.querySelectorAll("ul");

// const newH1 = document.createElement("h1");
// newH1.id="myH1";

// newH1.textContent = "this is the header";

// document.body.prepend(newH1);
// document.getElementById("vegetables").append(newH1);
// document.getElementById("vegetables").removeChild(newH1);

// const headerr = document.getElementById("myH1");
// // headerr.textContent = "documenttttttttt";

// document.body.removeChild(newH1);





// const newListItem = document.createElement("li");

// newListItem.textContent = "coconut";
// newListItem.id = "coconut";
// newListItem.style.fontWeight="bold";

// document.body.append(newListItem);

// const boxes = document.querySelectorAll("#fruits li");
// console.log(boxes);
// document.body.insertBefore(boxes[0],  newListItem);




// const myBox = document.getElementById("myBox");

// function changeColor(event){
//     event.target.style.backgroundColor = "tomato"
//     event.target
// }

// myBox.addEventListener("click",changeColor);

// myBox.addEventListener("mouseover", event =>{
//     event.target.style.backgroundColor="yellow";
//     event.target.textContent="sdf";
// })

// myBox.addEventListener("mouseout", event =>{
//     event.target.style.backgroundColor="yellow";
//     event.target.textContent="sdsdfsdff";
// })





// const myBox = document.getElementById("myBox");
// const moveAmount=1;
// let x=0;
// let y=0;


// document.addEventListener("keydown", event=>{
//     if(event.key=="ArrowUp"){
//         y-=moveAmount;
//     }

//     if(event.key=="ArrowDown"){
//         y-=moveAmount;
//     }

    
//     myBox.style.marginTop=`${y}px`;
//     myBox.style.marginLeft=`${x}px`;
// });





// const myButton = document.getElementById("myButton");
// const myImg = document.getElementById("myImg");

// myButton.addEventListener("click", ()=>{myImg.style.display="none"})


const myButton = document.getElementById("myButton");
myButton.classList.add("enabled")

myButton.addEventListener("mouseover", ()=>{
    myButton.classList.add("hover");
})
myButton.addEventListener("mouseout", ()=>{
    myButton.classList.remove("hover");
})




