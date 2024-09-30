// off-screen menu and hamMenu

// variables to select by class
const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

// event listener for clicks on hamMenu and when click is detected
// we want to toggle the 'active' class for both hamMenu and offScreenMenu
hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});
