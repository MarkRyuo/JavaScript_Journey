

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
  let q1 = prompt('What is your name?');

}

btnCounter.addEventListener('click', question);