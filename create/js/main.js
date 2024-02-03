import { cards } from "./array";
import { six } from "./outcomes";
import { thirtyseven } from "./outcomes";
import { aknight } from "./outcomes";
import {apple} from "./outcomes";
import {lilya} from "./outcomes";
import {ananlee} from "./outcomes";
import {babyblue} from "./outcomes";
import {getian} from "./outcomes";
import {jiu} from "./outcomes";
import {click} from "./outcomes";
import { DOMSelectors } from "./dom";
import { okmessage } from "./yes.";

let selected = null;

//creates character cards to interact with
function makeCards(arr){
  DOMSelectors.cardList.innerHTML = "";
    arr.forEach((character)=> {
    const newObject = document.createElement("div");
    newObject.innerHTML = 
    `
    <h2 class="card-title">${character.name}</h2>
    <img src="${character.pic}" alt="picture" class="card-img">
    <h3 class="card-price">${character.description}</h3>
    <div class="card-buttons">
                <button class="card-button">Choose this character</button>
            </div>
    `
    newObject.classList.add("card")
    DOMSelectors.cardList.appendChild(newObject)
  })
  
//show endings

  
  DOMSelectors.gallery.addEventListener("click", () => {
    if (!selected) {
      DOMSelectors.container.innerHTML = "";
      return;
    }
  });

};

makeCards(cards)
