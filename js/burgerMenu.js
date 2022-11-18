/*-----------------affichage de la modale latérale de navigation (cache ma photo et le description des projets)----------------------*/
const iconeBurger = document.querySelector(".navbar-mobile i");
const modalBurger = document.querySelector(".modal");
const myPicture = document.querySelector(".myPicture");
const descriptionProjects = document.querySelectorAll(".text-center");

iconeBurger.addEventListener("click", toggleClassElements);
function toggleClassElements() {
  modalBurger.classList.toggle("change-modal");
  iconeBurger.classList.toggle("fa-times");
  myPicture.classList.toggle("remove-myPicture");
  descriptionProjects.forEach((element) => {
    element.classList.toggle("remove-descriptif");
  });
}
