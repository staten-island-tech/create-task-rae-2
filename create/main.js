let newArr = []



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