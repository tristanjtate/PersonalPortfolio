// off-screen menu and hamMenu and menu items

// variables to select by class
const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
const menuItems = document.querySelectorAll(
  ".off-screen-menu li"
); /*all menu items*/

// event listener for clicks on hamMenu and when click is detected
// we want to toggle the 'active' class for both hamMenu and offScreenMenu
hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    hamMenu.classList.remove(
      "active"
    ); /*removes active class for menu appearing*/
    offScreenMenu.classList.remove("active");
  });
});

// animate skills

document.addEventListener("DOMContentLoaded", () => {
  const skillBars = document.querySelectorAll(".skill-percent");

  skillBars.forEach((bar) => {
    const percentage = bar.getAttribute("data-per");
    bar.style.width = percentage; // apply percent
  });
});
