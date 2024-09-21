import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

const disclaimerLink = document.querySelector('.disclaimer a');
disclaimerLink.textContent = parkData.fullName;
disclaimerLink.href = parkData.url;

function parkInfoTemplate(info) {
    return `<a href="/" class="hero-banner__title">${info.name}</a>
    <p class="hero-banner__subtitle">
      <span>${info.designation}</span>
      <span>${info.states}</span>
    </p>`;
  }

document.title = parkData.name;

const heroImage = document.querySelector('.hero-banner img');
heroImage.src = parkData.images[0].url;
heroImage.alt = parkData.images[0].altText;

const heroContent = document.querySelector('.hero-banner__content');
heroContent.innerHTML = parkInfoTemplate(parkData);