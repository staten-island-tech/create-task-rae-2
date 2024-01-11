import { images } from "./array";

let newArr = [];



async function meow(API) {
  const api = "https://reverse1999-characters-kang-piscok.koyeb.app/api/v1/characters";
}

try {
  const response = await fetch(api);
  
  if (!response.ok) {
    throw new Error('erm error !!');
  }
  
  const hehe = await response.json();
  displayData(hehe);
} catch (error) {
  console.error('Error fetching data:', error);
}


function displayData(hehe) {
  hehe.forEach((data) => {
    const charInfo = document.createElement('div');

    charInfo.innerHTML = `
    
    `
  });
}

meow();

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
