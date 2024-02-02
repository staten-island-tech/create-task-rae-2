import { cards } from "./array";
import { six } from "./outcomes";
import { DOMSelectors } from "./dom";

let selected = [];

//create functions
function makeCards(arr){
  DOMSelectors.cardList.innerHTML = "";
    arr.forEach((character)=> {
    const newObject = document.createElement("div");
    newObject.innerHTML = 
    `
    <h2 class="card-title">${character.name}</h2>
    <img src="${character.pic}" alt="picture" class="card-img">
    <h3 class="card-price">${character.description}</h3>
    `
    newObject.classList.add("card")
    DOMSelectors.cardList.appendChild(newObject)
  })};

makeCards(cards)

//show endings
