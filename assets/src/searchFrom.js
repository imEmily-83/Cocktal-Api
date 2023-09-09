import getElement from "./getElement.js";
import showDrink from "./presentDrink.js";
const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const  formSearch = getElement(".search-form");
const  inputSearch = getElement('[name ="drink"]');
    formSearch.addEventListener("keyup",(e)=>{
        e.preventDefault();
        const value = inputSearch.value
        if(!value){
            showDrink(`${baseUrl}a`)
        };
        showDrink(`${baseUrl}${value}`);
        
    })