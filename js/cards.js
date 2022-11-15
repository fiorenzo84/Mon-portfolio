/*-----------------Les projets pour les cartes (datas)----------------------*/
class DataCards {
  constructor(linkNavigateur, linkGithub, backGroundImg) {
    this.linkNavigateur = linkNavigateur;
    this.linkGithub = linkGithub;
    this.backGroundImg = backGroundImg;
  }
}
const myObj1 = new DataCards(
  "https://fiorenzo84.github.io/Generateur-de-citations",
  "https://github.com/fiorenzo84/Generateur-de-citations",
  "./assets/citations.png"
);

const myObj2 = new DataCards(
  "https://fiorenzo84.github.io/Recherche-API-Wikipedia/",
  "https://github.com/fiorenzo84/Recherche-API-Wikipedia",
  "./assets/wikipedia.png"
);
const myObj3 = new DataCards(
  "https://fiorenzo84.github.io/Quiz/",
  "https://github.com/fiorenzo84/Quiz",
  "./assets/quiz.png"
);
const myObj4 = new DataCards(
  "https://fiorenzo84.github.io/Quiz/",
  "https://github.com/fiorenzo84/Quiz",
  "./assets/quiz.png"
);

/*---------------------Création des cartes------------------------*/
const contenairCards = document.querySelector(".contenair-cards-projects");
let cards = [];
cards.push(myObj1, myObj2, myObj3, myObj4);

cards.forEach((el) => {
  let allCards = document.createElement("figcaption");
  allCards.className = "cards";
  allCards.innerHTML = `
                        <img src ="${el.backGroundImg}" class="styleBackground">
                         <div class= "contenair-logo"> 
                          <a href="${el.linkNavigateur}"> 
                            <i class="fa-solid fa-tv"></i>   
                          </a>
                          <a href="${el.linkGithub}">
                            <i class="fa-brands fa-github"></i>  
                          </a>
                         </div>
                        `;
  contenairCards.appendChild(allCards);
});
