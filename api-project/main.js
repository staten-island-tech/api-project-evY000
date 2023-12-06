import './style.css';

const APIFilter = "https://api.disneyapi.dev/character";
async function GetCharacter(APIFilter){
  try {
    const response = await fetch(APIFilter);
    const data = await response.json();
    document.getElementById("api-response").textContent = data.films;}
    catch (error) {
      console.log(error);
    }
  }
GetCharacter(APIFilter)
