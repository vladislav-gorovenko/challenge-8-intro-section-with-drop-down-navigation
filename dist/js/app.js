// query selectors
const menuBtnEl = document.querySelector(".menu-btn");
const hiddenMenuEl = document.querySelector(".hidden-menu");
const bodyEl = document.querySelector("body");
const menuNavItemEls = document.querySelectorAll(".menu-nav__item");

// event listeners
menuBtnEl.addEventListener("click", () => {
  activateBurgerMenu();
});

menuNavItemEls.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.target.parentElement.classList.toggle("active");
    e.target.querySelector("img").classList.toggle("down");
  });
});

// functions
function activateBurgerMenu() {
  hiddenMenuEl.classList.toggle("visible");
  bodyEl.classList.toggle("visible");
  menuBtnEl.classList.toggle("active");
}
