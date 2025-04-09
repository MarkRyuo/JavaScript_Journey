//* Dom Manipulation



//* getElementById("idName")

const mainText = document.getElementById("main-text") ;
console.log(mainText);


//* getElementsByClassName(".className")

const items = document.getElementsByClassName("items") ;
console.log(items);


//* getElementByTagName("h1")

const h1 = document.getElementsByTagName("h1") ;
console.log(h1);


//* document.createElement("li") ;
//? First grab the parent element of li element
let ul = document.getElementsByTagName("ul")[0]; 
//* Create a new li element
let list = document.createElement("li");
list.innerHTML = "Beyond to the Infinite"
//* Append the new li to the ul
ul.appendChild(list);


//* document.querySelector("")

const itemss = document.querySelector(".items");

itemss.style.color = "red"


//*document.querySelectorAll("")


const itemsss = document.querySelectorAll(".items");

itemsss.forEach(item => {
  item.style.fontSize = "2rem";
  item.style.color = "green";
})

//* If we use querySelectorAll use forEach loop to change the style


//* Creating Elements, Appending Elements, && Modyfying Attributes & Classes

const newDiv = document.createElement("div"); //? Create a new div element
console.log(newDiv); 

newDiv.setAttribute("id", "container") //? Set the id attribute of the new div
newDiv.setAttribute("className", "container") //? Set the class(className) attribute of the new div

//? Can we delete a attribute? Yes, we can use removeAttribute() method
newDiv.removeAttribute("className") //? Remove the class(className) attribute of the new div

console.log("This is the id attribute: " newDiv.getAttribute("id")):

let main = document.querySelector("main"); //* Call the main element
main.appendChild(newDiv); //* Append the new div to the main element

