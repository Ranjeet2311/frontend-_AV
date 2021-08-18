// const burger = document.querySelector(".burger")
const burgerDisplay = document.querySelector("#burger");
const burgerClose = document.querySelector("#burger-close");
const logoSection = document.querySelector(".logo-section");
const navMenu = document.querySelector(".nav-menu");

burgerDisplay.addEventListener("click", () => {
  logoSection.classList.remove("r-hide");
  logoSection.classList.remove("side-hide");

  navMenu.classList.remove("r-hide");

  burgerDisplay.style.display = "none";
  burgerClose.style.display = "block";
});
burgerClose.addEventListener("click", () => {
  logoSection.classList.add("r-hide");
  navMenu.classList.add("r-hide");

  burgerClose.style.display = "none";
  burgerDisplay.style.display = "block";
});
