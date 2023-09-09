export function showLoading(){
const element = document.querySelector(".loading");
element.classList.remove("hide-loading");
}
export function hideLoading(){
const element = document.querySelector(".loading");
element.classList.add("hide-loading")
}