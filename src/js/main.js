// importing functions and data from other files
import { getParkData, getInfoLinks } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { mediaCardTemplate } from "./template.mjs";

// // getting park data
// const parkData = getParkData();

// display park name and description
function setParkIntro(data) {
  const introEl = document.querySelector(".intro");
  introEl.innerHTML = `<h1>${data.fullName}</h1>
  <p>${data.description}</p>`;
}

// display park info links (media cards)
function setParkInfoLinks(data) {
  const infoEl = document.querySelector(".info");
  const html = data.map(mediaCardTemplate);
  infoEl.insertAdjacentHTML("afterbegin", html.join(""));
}

// // set header and footer
// setHeaderFooter(parkData);

// // set park introduction
// setParkIntro(parkData);

// // set park info links
// setParkInfoLinks(parkInfoLinks);

async function init() {
  const parkData = await getParkData();
  const links = getInfoLinks(parkData.images);
  setHeaderFooter(parkData);
  setParkIntro(parkData);
  setParkInfoLinks(links);
}

init();