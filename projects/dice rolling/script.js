function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;

    console.log(numOfDice);

    const diceResult = document.getElementById("diceResult")
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i=0; i<numOfDice;i++){
        const value = Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="dices/${value}.jpg">`)
    }
    
    diceResult.textContent=`dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join(" ");
}