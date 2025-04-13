

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
  let count = 5 ;

  while (q1 === null || q1 === "") {    
    if(q1 === null || q1 === "") {
      q1 = prompt("Please enter your name");
      count -= 1;
    }

    if (count === 0) {
      alert("You have exceeded the number of attempts");
      break;
    }
  }

  localStorage.setItem('name', q1); //* saving the name in local storage

  const savedItem = localStorage.getItem('name'); //* getting the name from local storage
  
  if (savedItem) {
    alert(`Welcome Back ${savedItem}`);
  }

}

btnCounter.addEventListener('click', question);




