const container = document.querySelector("#container");
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

const p = document.createElement("p");
p.classList.add("para");
p.textContent = "Hey I'am red";
p.style.color = "red";
container.appendChild(p);

const h3 = document.createElement("h3");
h3.classList.add("heading");
h3.textContent = "Hey I'am blue";
h3.style.color = "blue";
container.appendChild(h3);

const divWithBorder = document.createElement("div");
divWithBorder.style.cssText = "background: pink; border-style: solid;";

const h1 = document.createElement("h1");
h1.textContent = "I am in h1";
divWithBorder.appendChild(h1);

const p2 = document.createElement("p");
p2.textContent = "ME TOO!";
divWithBorder.appendChild(p2);
container.appendChild(divWithBorder);
