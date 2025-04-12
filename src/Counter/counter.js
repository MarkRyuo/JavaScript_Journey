

//* arrow function: const variable (parameters) => { function body }

const counter = 0 ;

const increment = () => {
  counter += 1;
}

const decrement = () => {
  counter -= 1;
}

const reset = () => {
  counter = 0;
}


let btnCounter = document.querySelector('.btn-counter');

const question = () => {
  let q1 = prompt("What is your name?");

  const count = 5 ;

  while (q1 === null || q1 === "") {
    let alertStorage = alert("Please enter your name");
    
    if(q1 === null || q1 === "") {
      q1 = prompt("Please enter your name");
      count -= 1;
      consolele.log(count);
    }
  }

}

btnCounter.addEventListener('click', question);