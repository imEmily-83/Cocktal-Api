import fetchDrink from "./fetchDrink.js";
import displayDrinks from "./displayDrink.js";
import { setDrink } from "./setDrink.js";
import './searchFrom.js'
const showDrink = async (url)=>{
    //fetch drinks
const data = await fetchDrink(url);
// display drinks
const section =  await displayDrinks(data);
if(section){
    setDrink(section);
}
}
export default showDrink;