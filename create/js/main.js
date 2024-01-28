import { cards } from "./array";
import { outcomes } from "./array";

const outcomes = {

}
const DOMSelectors = {
  results: document.querySelector("#horhorhorhor"),
  cardList: document.querySelector(".cardList"),
  outcomes: document.querySelector(".outcomes"),
  cards: document.querySelector("cards"),
}

let newArr = [];

//create functions
function show(arr){
DOMSelectors.cardList.innerHTML = "";
    arr.forEach((character)=> {
    const newObject = document.createElement("div");
    newObject.innerHTML = 
    `
    <h2 class="char-name">${character.name}</h2>
    <img src="${character.pic}" alt="picture" class="char-pic">
    <h3 class="char-desc">${character.description}</h3>
    `
    newObject.classList.add("card")
    DOMSelectors.cardList.appendChild(newObject)
  })};
  
show(cards);



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
