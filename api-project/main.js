import './style.css';
const URL = "https://api.disneyapi.dev/character";
async function GetCharacter(){
  try {
    const response = await fetch(URL);
    const stuff = await response.json();
   const answer = stuff.data.forEach((name)=> console.log(name));  
    const names = stuff.data.filter((movie) => movie.films.includes("Hercules") )
    console.log(names)}
    catch (error) {
      console.log(error);}}
GetCharacter(URL)

