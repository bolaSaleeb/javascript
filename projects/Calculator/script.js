const display = document.getElementById("display");

function appendToDisplay(input){
    display.value+=input;
    console.log(display); 
}

function clearDisplay(input){
    display.value="";
}



function calculate(){

    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = "Error";
    }
}