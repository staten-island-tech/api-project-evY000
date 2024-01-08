
const DOMSelectors = {
  Thing : document.getElementById("app"),
  Christmas: document.querySelector('#christmas'),
  body: document.querySelector('#body'),
  Halloween: document.querySelector('#halloween'),
  Input : document.querySelector('input'),
  Submit : document.querySelector("submit"),
  form: document.getElementById("form"),
}
function something(){
  DOMSelectors.form.addEventListener("submit",function(event){
      event.preventDefault()
      let user = DOMSelectors.Input.value;
      console.log(user)
})}
something()
async function GetInput(){
  try {
     /* let NameSearch = `https://api.disneyapi.dev/character?name=${DOMSelectors.Input}` 
     console.log(NameSearch) */
     let Link = "https://api.disneyapi.dev/character?page=1"
     // Set Link &pageSize=10000000 when all characters
     const response = await fetch(Link);
    const stuff = await response.json();  

    let user = DOMSelectors.Input.value;
    stuff.data.forEach((card)=> {card
      const FirstName = card.films
      const LastName = card.name
      const Image = card.imageUrl
      const cards = `<div tabindex ="7" class =  "Card">
      <h1> ${FirstName} </h1>
      <h2> ${LastName} </h2> 
      <img class ="imgs" src="${Image}" </div>`
      DOMSelectors.Thing.insertAdjacentHTML('beforeend', cards); 
})}
  catch(error) {
    console.log('error');}} 
 GetInput()  


DOMSelectors.Christmas.addEventListener("click", function(){
  if (document.body.classList.contains("normal")){
     document.body.classList.add("christmas")
     document.body.classList.remove("normal");
     document.body.classList.remove("halloween");
  } else{
        document.body.classList.add("normal");
        document.body.classList.remove("christmas");}
        document.body.classList.remove("halloween");
     });
DOMSelectors.Halloween.addEventListener("click", function(){
      if (document.body.classList.contains("normal")){
         document.body.classList.add("halloween")
         document.body.classList.remove("normal");
         document.body.classList.remove("christmas");
      } else{
            document.body.classList.add("normal");
            document.body.classList.remove("halloween");}
            document.body.classList.remove("christmas");
         });
//For Characters withj multiple words add %20 in between
/* const Link = "https://api.disneyapi.dev/character";
const Page2 = "https://api.disneyapi.dev/character?page=2&pageSize=50";
const Mouse = "https://api.disneyapi.dev/character?name=Mickey%20Mouse"; */


/* async function GetCharacter(){
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
      console.log(error);}} */
/* GetCharacter(Link)  */


/* async function TheMouse(){
  try{
  const GetMouse = await fetch(Mouse);
  const Mousey = await GetMouse.json();
  console.log(Mousey)}
  catch (error){
    console.log(error);}}
TheMouse(Mouse)
 */

 