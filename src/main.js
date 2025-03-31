


// * This is getting element by id 

let heading1 = document.getElementById('heading1');
console.log(heading1);

// * This is gettiing element by class name

let heading2 = document.getElementsByClassName("heading2");
console.log(heading2);

// * This is getting element by tag name

let heading3 = document.getElementsByTagName("h3");
console.log(heading3);

// * This is getting element using query selector

let heading4 = document.querySelector(".heading4");
console.log(heading4);

// * This is getting all element using query selector all

let heading5 = document.querySelectorAll("h5");
console.log(heading5);


// * 

/**
 * Retrieves the container element and selects all elements with the 'insert' class within it.
 * @type {HTMLElement} cont - The container element selected by its ID.
 * @type {NodeList} insert - A list of elements with the 'insert' class within the container.
 */
let cont = document.getElementById("container"); //* Get the Container
let insert = cont.querySelectorAll(".insert");  //* get all elements with class insert
console.log(insert);


//* Parent node Property

let parent = document.querySelector(".parent");
console.log(parent)
