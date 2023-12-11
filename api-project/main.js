import './style.css';
const URL = "https://api.disneyapi.dev/character";
async function GetCharacter(){
  try {
    const response = await fetch(URL);
    const stuff = await response.json();
   //const answer = stuff.info.data.films.filter((name)=> console.log(name.info.data.films.includes("Hercules")));  
    console.log(stuff)}
    catch (error) {
      console.log(error);}}
GetCharacter(URL)

