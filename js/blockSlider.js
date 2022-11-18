const slideSoftSkills = document.querySelector(".contenair-softSkills");
const slideHardSkills = document.querySelector(".contenair-hardSkills");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;
  // les pixels du scroll et de la taille du client(fenêtre)
  //console.log(scrollTop, clientHeight);
  const topElementToTopViewPort = slideHardSkills.getBoundingClientRect().top;

  if (scrollTop > scrollTop + topElementToTopViewPort - clientHeight * 0.5) {
    slideSoftSkills.classList.add("active");
    slideHardSkills.classList.add("active");
  } else {
    slideSoftSkills.classList.remove("active");
    slideHardSkills.classList.remove("active");
  }
});
