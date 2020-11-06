const closeBtn = document.querySelector(".close-btn");
const menu = document.querySelector(".aside-panel");
const logo = document.querySelector(".logo");
// const links = Document.querySelectorAll(".list-item");
logo.addEventListener("click", showMenu);
closeBtn.addEventListener("click", hideMenu);
// hide menu logic
function hideMenu() {
  const hiddenMenu = document.querySelector(".hide-menu");
  if (hiddenMenu) {
    menu.classList.remove("hide-menu");
  }
  menu.classList.add("hide-menu");
}
// show menu logic
function showMenu() {
  menu.classList.remove("hide-menu");
}
