/*---------------------masque la flèche quand on arrive sur l'accueil------------------------*/
const btnArrow = document.querySelector(".btnupArrow");
btnArrow.style.opacity = "0";

window.addEventListener("scroll", () => {
  btnArrow.style.opacity = "1";
});

/*---------------------flèche qui remonte document------------------------*/
btnArrow.addEventListener("click", getArrowUpWindow);
function getArrowUpWindow() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

export { getArrowUpWindow };
