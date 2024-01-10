let newArr = []



async function meow(API) {
  const api = "https://reverse1999-characters-kang-piscok.koyeb.app/api/v1/characters";

  try {
    const response = await fetch(api);
    
    if (!response.ok) {
      throw new Error('erm error !!');
    }
    
    const data = await response.json();
    displayData(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

meow();