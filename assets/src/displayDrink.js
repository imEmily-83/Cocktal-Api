import { hideLoading } from "./loading.js";
import getElement from "./getElement.js";
const displayDrinks = ({drinks})=>{
    const cocktailContainer = getElement(".section-center");
    const alert = getElement(".title");
    if(!drinks){
        // hideLoader
        hideLoading();
        alert.textContent = "sorry there is no result matced with your  search";
        cocktailContainer.innerHTML = null;
    }else{
        const newDrinks = drinks.map((item)=>{
            const {idDrink : id , strDrink : name , strDrinkThumb : image}= item
            return`<a  href = "drink.html">
            <article class ="cocktail" data-id="${id}">
            <img src="${image}" alt="${name}"/>
            <h3> ${name}</h3>
            </article>
            </a>`
        }).join("");
        // hideLoader  
        hideLoading();
        cocktailContainer.innerHTML = newDrinks;
        alert.textContent = "";
    return cocktailContainer;
    }
   
}
export default displayDrinks;