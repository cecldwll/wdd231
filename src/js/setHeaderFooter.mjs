// import templates for park info and footer
import { parkInfoTemplate, footerTemplate } from "./template.mjs";
import enableNavigation from "./navigation.mjs";

// set header information like disclaimer, page title, and hero banner
function setHeaderInfo(data) {
  const disclaimer = document.querySelector(".disclaimer > a");
  disclaimer.href = data.url; 
  disclaimer.innerHTML = data.fullName; 
  document.querySelector("head > title").textContent = data.fullName; 
  document.querySelector(".hero-banner > img").src = data.images[0].url; 
  document.querySelector(".hero-banner__content").innerHTML =
    parkInfoTemplate(data); 
}

// set footer information
function setFooter(data) {
  const footerEl = document.querySelector("#park-footer");
  footerEl.insertAdjacentHTML("afterbegin", footerTemplate(data)); // add footer content
}

// set both header and footer using park data
export default function setHeaderFooter(parkData) {
  setHeaderInfo(parkData); 
  setFooter(parkData); 
  enableNavigation();
}
