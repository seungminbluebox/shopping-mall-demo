class Dress {
  constructor(type, color) {
    this.type = type;
    this.color = color;
  }
}
let arr = [];
let typeArray = ["shirts", "pants", "skirt"];
let colorArray = ["blue", "yellow", "pink"];

window.onload = first();

function first() {
  for (let i = 0; i < colorArray.length; i++) {
    for (let j = 0; j < typeArray.length; j++) {
      const newDress = new Dress(typeArray[i], colorArray[j]);
      arr.push(newDress);
    }
  }
  for (i of arr) {
    createProduct(i);
  }
}
function logo() {
  document.querySelector("#list").innerHTML = "";
  arr = [];
  typeArray = ["shirts", "pants", "skirt"];
  colorArray = ["blue", "yellow", "pink"];
  first();
}
function createProduct(i) {
  const newElement = document.createElement("div");
  newElement.classList.add("product");
  const imgElement = document.createElement("img");
  imgElement.src = `./img/${i.color}_${i.type}.png`;
  imgElement.classList.add("productImg");
  newElement.appendChild(imgElement);
  const textElement = document.createTextNode(`${i.type}, ${i.color}`);
  newElement.appendChild(textElement);
  const parentElement = document.querySelector("#list");
  parentElement.appendChild(newElement);
}
function filter(type = "", color = "") {
  document.querySelector("#list").innerHTML = "";
  for (i of arr) {
    if (i.color === color) {
      createProduct(i);
    }
    if (i.type === type) {
      createProduct(i);
    }
  }
}
