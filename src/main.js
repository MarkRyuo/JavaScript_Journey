
// let main  = document.querySelector("main");

// main.style.padding = "10px 20px";

// let div = document.querySelectorAll("div");

// div.forEach(divs => {
//   divs.style.height = "300px";
//   divs.style.alignContent = "center"
//   divs.style.display = "grid";
//   divs.style.gridTemplateRow = "repeat(2, 1fr)";
// })


let cardButton = document.querySelectorAll("#card_button");

cardButton.forEach(card => {
  card.style.height = "50px";
  card.style.boxShadow = "-33px 48px 5px 0px rgba(0,0,0,0.75)";


});



//* Event Listeners 

//* Element.addEventListener("click", function) ;


const cardButtonPrimary = document.querySelector(".card_button--primary");

function alertBtn() {
  alert("You clicked the button");
}

cardButtonPrimary.addEventListener("click", alertBtn);


//* Element.addEventListener("mousehover", function) ;

const cardButtonHover = document.querySelector(".card");

function hoverButton() {
  cardButtonHover.style.backgroundColor = "red";
}

cardButtonHover.addEventListener("mouseover", hoverButton);


const cardButtonSecondary = document.querySelector(".card_button--secondary");

function iloveyou() {
  
  if(cardButtonSecondary) {
    alert("I love You") ;
    cardButtonSecondary.style.backgroundColor = "red";
  }
}



//* if(condition) {
//*   // code to be executed if condition is true
//* } else {
//*   // code to be executed if condition is false
//* }