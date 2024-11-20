
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

// creating an element and adding to the page

 const bodyElement = document.querySelector("body")

 console.log(bodyElement)


 const h2Element = document.createElement('h2')

 h2Element.textContent = "comments section"

 bodyElement.appendChild(h2Element)

//  const h3elements = document.querySelector("h3")
//  console.log(h3elements)


//  getting many elements
// querySelectorAll(): returns ALL instances of elements
const h3elements = document.querySelectorAll("h3")

console.log(h3elements)

h3elements.textContent = "Text changed"

h3elements.forEach((oneH3Element,index)=>{
    console.log(index)
    // oneH3Element.textContent = "Changed text"
    if(index ===1){
        oneH3Element.textContent = "CHANGED for Hasan"
    }
})

// gets the attribute of element
console.log(myImageElement.getAttribute("src"))

// ca
myImageElement.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzX9A_f_jDYExfolsAhVX7IgctPaA9qU0KUg&s")

console.log(myImageElement.hasAttribute("href"))

myImageElement.removeAttribute("src")