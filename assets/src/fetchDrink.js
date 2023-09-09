import { showLoading } from "./loading.js";
const fetchDrink =async(url)=>{
showLoading();
try{
 const responnse = await fetch(url);
const data = await responnse.json();
return data;
    }catch (error){
        console.log(error);
    }

}
export default fetchDrink;