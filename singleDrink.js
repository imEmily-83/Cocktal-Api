import fetchDrink from "./assets/src/fetchDrink.js";
import displayDrink from "./assets/src/displaySingleDrinks.js";
const presentDrink = async()=>{
    const id  = localStorage.getItem("drink");
    if(!id){
        window.location.replace('index.html');
    }else{
        const drink = await fetchDrink(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        displayDrink(drink);
    }
  
}
window.addEventListener('DOMContentLoaded' , presentDrink);