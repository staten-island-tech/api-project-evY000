import './style.css';
const DOMSelectors = {
  Thing : document.getElementById("card"),
}
const Link = "https://api.disneyapi.dev/character";
const Mouse = "https://api.disneyapi.dev/character?name=Mickey%20Mouse";
 async function GetCharacter(){
  try {
    const response = await fetch(Link);
    const stuff = await response.json();
    stuff.forEach((card)=> {
      const FirstName = card.films
      const LastName = card.name
      const Image = card.url
    const card2 = ` <div class = "Card">
    <h1> ${FirstName} </h1>
    <h2> ${LastName} </h2> 
    <img class ="imgs" src="${Image}"</div>`
    DOMSelectors.Thing.insertAdjacentHTML('afterend', card2);
    })
  }
    catch (error) {
      console.log(error);}}
GetCharacter(Link) 
async function TheMouse(){
  try{
  const GetMouse = await fetch(Mouse);
  const Mousey = await GetMouse.json();
  console.log(Mousey)}
  catch (error){
    console.log(error);}}
TheMouse(Mouse)

