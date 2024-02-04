import { cards } from './array.js'; 
import { six, thirtyseven, aknight, apple, lilya, ananlee, babyblue, getian, jiu, click } from './outcomes.js'; 

let now = 0;
let outcomes = [];

function init() {
    charactercards();
}

function charactercards() {
    const character = cards[now];
    DOMSelectors.cardList.innerHTML = "";
    const newObject = document.createElement("div");
    newObject.innerHTML = 
    `
    <h2 class="card-title">${character.name}</h2>
    <img src="${character.pic}" alt="picture" class="card-img">
    <h3 class="card-price">${character.description}</h3>
    <div class="card-buttons">
        <button class="card-button yes">Yes</button>
        <button class="card-button no">No</button>
    </div>
    `
    newObject.classList.add("card")
    DOMSelectors.cardList.appendChild(newObject);
}

function yess() {
  const thing = charoutcome(cards[now])
  if (outcomes.length === 0) {
    outcomes.push(thing);
  }
  now++;
  if (now < cards.length) {
      charactercards();
  } else {
      DOMSelectors.cardList.innerHTML = ""; 
  }

}

function nothing() {
    now++;
    if (now < cards.length) {
        charactercards();
    } else {
        DOMSelectors.cardList.innerHTML = ""; 
    }
}

function characteroutcomes() {
  DOMSelectors.cardList.innerHTML = ""; 
  outcomes.forEach(outcome => {
      const newObject = document.createElement("div");
      newObject.innerHTML = 
      `
      <h2 class="outcome-title">${outcome.title}</h2>
      <img src="${outcome.image}" alt="outcome image" class="outcome-img">
      <h3 class="outcome-description">${outcome.description}</h3>
      `
      newObject.classList.add("outcome")
      DOMSelectors.cardList.appendChild(newObject);
  });
}

function outcome(character) {
    switch (character.name) {
        case "Six":
            return six[0];
        case "37":
            return thirtyseven[0];
        case "A Knight":
            return aknight[0];
        case "APPLe":
            return apple[0];
        case "Lilya":
            return lilya[0];
        case "An An Lee":
            return ananlee[0];
        case "Baby Blue":
            return babyblue[0];
        case "Getian":
            return getian[0];
        case "Jiu Niangzi":
            return jiu[0];
        case "Click":
            return click[0];
        default:
            return {};
    }
}

// DOM Selectors
const DOMSelectors = {
    cardList: document.getElementById('container')
};

// Event listeners
DOMSelectors.cardList.addEventListener('click', (event) => {
    if (event.target.classList.contains('yes')) {
        yess();
    } else if (event.target.classList.contains('no')) {
        nothing();
    }
    document.querySelector('.play').addEventListener('click', () => {
      next();
  });
  
  document.querySelector('.gallery').addEventListener('click', () => {
      characteroutcomes();
  });

  function next() {
    if( now < cards.length){
      charactercards();
    } else{
      DOMSelectors.cardList.innerHTML = "youve gone thru all the characters"
    }
  }

});

init();
