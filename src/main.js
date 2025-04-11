//* Traverse DOM

//* Parent Node Traversal

let ul = document.querySelector("ul");
console.log(ul.parentNode);
console.log(ul.parentElement);


//* Child Node Traversal

console.log(ul.childNodes);
// console.log(ul.firstChild)
// console.log(ul.lastChild);
console.log(ul.children);

ul.children[0].style.textTransform = "uppercase";
ul.children[1].style.color = "red";