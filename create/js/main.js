import { cards } from "./array";
import { outcomes } from "./array";

const DOMSelectors = {
  results: document.querySelector("#horhorhorhor"),
  cardList: document.querySelector(".cardList"),
  outcomes: document.querySelector(".outcomes"),
  cards: document.querySelector("cards"),
}

let newArr = [];

//create functions


//show endings WITHOUT the secret endings
//if an ending has been reached, don't do anything. 
//if an ending has been reached, two separate secret endings will trigger


//inserts the ending:

/* function newstuff() {
  const whatever = {
      name: DOMSelectors.nameofrecipe.value,
      picture: DOMSelectors.picture.value,
      recipe: DOMSelectors.recipe.value,
  };
  insert(whatever, DOMSelectors);
}

function insert(whatever, DOMSelectors) {
  DOMSelectors.container.insertAdjacentHTML("afterbegin",
  `<div class="parentcard">
      <h2 class="card-title">${whatever.name}</h2>
          <img src="${whatever.picture}" alt="picture" class="image"></img>
      <h2 class="card-price">${whatever.recipe}</h2>
      <button>kms</button>
  </div>`);
  clear(DOMSelectors);
  remove();
} */
