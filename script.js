const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";

document.querySelector("body").appendChild(h2);
const date =  new Date().getFullYear();

const div = document.createElement("div");
const copyright = document.createTextNode("copyright " + date);
div.appendChild(copyright);
document.body.appendChild(div);

