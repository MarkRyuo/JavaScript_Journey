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
//? First grab the parent element of li
let ul = document.getElementsByTagName("ul");
let list = ul.createElement("li").innerHtml = "New Item";



//* document.querySelector("") 



//*document.querySelectorAll("")
