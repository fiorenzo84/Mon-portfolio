const iconeBurger = document.querySelector(".navbar-mobile i");
const modalBurger = document.querySelector(".modal");
const myPicture = document.querySelector(".myPicture");

// fonction changement de class d'icone et affiche la modale
iconeBurger.addEventListener("click", toggleClassElements);
function toggleClassElements() {
  console.log("lancement modale et fermeture modale");
  modalBurger.classList.toggle("change-modal");
  iconeBurger.classList.toggle("fa-times");
  myPicture.classList.toggle("display-myPicture");
}

export { toggleClassElements };
