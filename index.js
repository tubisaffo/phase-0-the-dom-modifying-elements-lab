// Write your code here!
// const element = document.getElementById("main");
// element.style.height = "300px";
// element.style.backgroundColor = "#27647B";
// element.textContent = "You've changed what's on the screen!";
// element.style.fontSize = "24px";
// element.style.marginLeft = "30px";
// element.style.lineHeight = 2;
// element.className = "pet-listing dog";
// element.classList.remove("dog");
// element.classList.add("cat", "sale");
// const ul = document.getElementsByTagName("ul")[0];
// const secondChild = ul.querySelector("li:nth-child(2)");
// ul.removeChild(secondChild);

const main = document.querySelector('main#main')
document.body.removeChild(main)

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = 'SAFFO is the champion';
document.body.appendChild(newHeader)