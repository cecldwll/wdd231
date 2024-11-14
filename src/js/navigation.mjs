function mainMenuHandler(ev) {
    let target = ev.target;
    // toggle the show class on the global-nav
    document.querySelector(".global-nav").classList.toggle("show");
    // check to see if ev.target is the button or something inside the button
    if (target.tagName != "BUTTON") {
      target = target.closest("button");
    }
    // check to see if we just opened or closed the menu
    if (document.querySelector(".global-nav").classList.contains("show")) {
      target.setAttribute("aria-expanded", true);
    } else {
      target.setAttribute("aria-expanded", false);
    }
  
    console.log("toggle");
  }
  
  function subMenuHandler(ev) {
    ev.currentTarget
      .closest("li")
      .querySelector(".global-nav__submenu")
      .classList.toggle("show");
    ev.currentTarget.querySelector(".icon").classList.toggle("rotate");
  }
  
  export default function enableNavigation() {
    const menuButton = document.querySelector("#global-nav-toggle");
    const subMenuToggles = document.querySelectorAll(
      ".global-nav__split-button__toggle"
    );
    // when the main menu button is clicked:
    menuButton.addEventListener("click", mainMenuHandler);
    subMenuToggles.forEach((toggle) => {
      //for each submenu toggle
      toggle.addEventListener("click", subMenuHandler);
    });
  }