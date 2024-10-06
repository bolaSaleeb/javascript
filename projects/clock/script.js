

function updateClock(){
    const now = new Date();
    const hours = now.getHours().toString().padStart(2,0);
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);

    const timeString = `${hours}:${minutes}:${seconds}`;

    document.getElementById("clock").textContent = timeString;
}


function keepClockRunning(){
    for(var i=0; i<1000; i++){
        setTimeout(updateClock(), 1000);
    }
    
}

setInterval(updateClock, 1000);