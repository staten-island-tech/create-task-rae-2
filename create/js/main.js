const images =[
  six = 'https://static.wikia.nocookie.net/reverse1999/images/f/f1/6.png/revision/latest?cb=20231118210048', //six
  tri = 'https://static.wikia.nocookie.net/reverse1999/images/8/87/37.png/revision/latest/scale-to-width-down/286?cb=20231019203459', //37
  a_knight = 'https://static.wikia.nocookie.net/reverse1999/images/e/e1/A_Knight_Suitcase.png/revision/latest?cb=20231015180431', //a knight
  apple = 'https://static.wikia.nocookie.net/reverse1999/images/f/fc/APPLe.png/revision/latest?cb=20231029183031', //apple
  alient = 'https://static.wikia.nocookie.net/reverse1999/images/4/4f/AliEn_T.png/revision/latest/scale-to-width-down/350?cb=20231111141405', // alient t
  ananlee = 'https://static.wikia.nocookie.net/reverse1999/images/6/64/An-an_Lee.png/revision/latest?cb=20231020001311', //an an lee
  babyblue = 'https://static.wikia.nocookie.net/reverse1999/images/c/c6/Baby_Blue.png/revision/latest/scale-to-width-down/1000?cb=20231022043712', //baby blue
  balloonparty = 'https://static.wikia.nocookie.net/reverse1999/images/b/bb/Balloon_Party_Chibi.png/revision/latest?cb=20231024175713', //balloon party
  bette = 'https://static.wikia.nocookie.net/reverse1999/images/0/0d/Bette.png/revision/latest?cb=20231111164507', //bette
  bkornblume = 'https://static.wikia.nocookie.net/reverse1999/images/a/ac/Bkornblume.png/revision/latest/scale-to-width-down/333?cb=20231025015231', //bkornblume

];


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
