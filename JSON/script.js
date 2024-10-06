// const names = ["bola","sandy","salah"];

// const person = {
//     "name":"bola",
//     "age": 25,
//     "isEmployed": true,
//     "hobbies": ["workout","jump rope", "muscle ups"]
// };



// const jsonString = JSON.stringify(person);


// const parsedData = JSON.parse(jsonString);


// const t = fetch("person.json")
//     .then(response => response.json())
//     .then(value =>console.log(value));
    
// console.log(t);

// console.log(jsonString);
// console.log(names);
// console.log(t);







// fetch("https://pokeapi.co/api/v2/pokemon/spongebob")
//     .then(response=>{
//         if(!response.ok){
//             throw new Error("Could not fetch resource");
//         }
//         return response.json(); 
//     })
//     .then(data => console.log(data))
//     .catch(error => console.log(error))



async function fetchData(){
    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src=pokemonSprite;
        imgElement.style.display="block"; 
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}