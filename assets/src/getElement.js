const getElement  = (selection)=>{
    const element =  document.querySelector(selection);
    if(element)return element;
    throw new Error("there was an error with element you select !")
}
export default getElement;