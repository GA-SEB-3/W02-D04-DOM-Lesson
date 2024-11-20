
// querySelector(): fetches an element for me


const mainTitleElement = document.querySelector("#main-title")

console.log(mainTitleElement)


const pElement = document.querySelector(".cool")

// .textContent: changes the text in html tag

if(pElement.textContent === ""){
    pElement.textContent = "New value given in JS file"
}
else{
    pElement.textContent = "Value was not empty"
}



// 
let myImageElement = document.querySelector("img")

myImageElement.src = "https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_640.jpg"


// all css properties are camelCased in JS
pElement.style.backgroundColor = "red"

myImageElement.style.width = "50px"

myImageElement.style.border = "solid green"