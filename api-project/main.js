import './style.css';
const DOMSelectors = {
  Thing : document.getElementById("card"),
}
const Link = "https://api.disneyapi.dev/character";
const Page2 = "https://api.disneyapi.dev/character?page=2&pageSize=50"
const Mouse = "https://api.disneyapi.dev/character?name=Mickey%20Mouse";
 async function GetCharacter(){
  try {
    const response = await fetch(Link);
    const response2 = await fetch(Page2)
    const stuff = await response.json();
    const stuff2 = await response2.json();
    stuff.data.forEach((card)=> {
      const FirstName = card.films
      const LastName = card.name
      const Image = card.imageUrl
    const card2 = ` <div class = "Card">
    <h1> ${FirstName} </h1>
    <h2> ${LastName} </h2> 
    <img class ="imgs" src="${Image}"</div>`
    DOMSelectors.Thing.insertAdjacentHTML('afterend', card2);
    })
    stuff2.data.forEach((card)=> {
      const FirstName = card.films
      const LastName = card.name
      const Image = card.imageUrl
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
/* async function TheMouse(){
  try{
  const GetMouse = await fetch(Mouse);
  const Mousey = await GetMouse.json();
  console.log(Mousey)}
  catch (error){
    console.log(error);}}
TheMouse(Mouse)

 */