const btnArrow = document.querySelector(".btnupArrow");
// const body = document.querySelector("body");
// btnArrow.style.opacity = "0";

btnArrow.addEventListener("click", getArrowUpWindow);
function getArrowUpWindow() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

export { getArrowUpWindow };
