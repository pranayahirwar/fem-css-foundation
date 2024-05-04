const menuLogo = document.querySelector(".menu-logo");
const nav = document.querySelector(".nav");
const closeLogo = document.querySelector(".close-logo");
// stop overflow, in mobile view and user have clicked on hamburger icon to view nav list
const stopBodyOverflow = document.querySelector(".body"); 

menuLogo.addEventListener("click", () => {
  // console.log("show nav list clicked");

  // These CSS property are going to hide the menu logo and show the close logo or toggle them when they are clicked
  // use toggle method, which will add class if not present on element or remove 
  // class if it's present on element

  nav.classList.toggle("show-nav-list");
  menuLogo.classList.toggle("remove-menu-logo-from-dom");
  closeLogo.classList.toggle("show-close-logo");
  stopBodyOverflow.classList.toggle("body-no-scroll");
});

closeLogo.addEventListener("click", () => {
  nav.classList.toggle("show-nav-list");
  menuLogo.classList.toggle("remove-menu-logo-from-dom");
  closeLogo.classList.toggle("show-close-logo");
  stopBodyOverflow.classList.toggle("body-no-scroll");
});
