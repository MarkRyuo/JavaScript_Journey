
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
  card.style.boxShadow = "10px 10px 5px 0px rgba(0,0,0,0.75)";
});



//* Event Listeners 

//* Element.addEventListener("click", function) ;


const cardButtonPrimary = document.querySelector(".card_button_primary");

function alertBtn() {
  alert("You clicked the button");
}

cardButtonPrimary.addEventListener("click", alertBtn)