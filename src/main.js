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

itemsss.style.fontSize = "20px" ;
console.log(itemsss);












