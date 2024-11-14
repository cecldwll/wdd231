// conditions.js
import { getParkAlerts } from './parkService.mjs';
import { alertTemplate } from './template.mjs';
import { getVisitorCenterData } from './parkService.mjs';
import { visitorCenterTemplate } from './template.mjs';
import { activityTemplate } from './template.mjs';
import { getParkData } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";

// function setParkIntro(data) {
//     const introEl = document.querySelector(".intro");
//     introEl.innerHTML = `<h1>${data.fullName}</h1>
//     <p>${data.description}</p>`;
// }
  
function setAlerts(alerts) {
  const alertsContainer = document.querySelector(".alerts > ul");
  alertsContainer.innerHTML = "";
  const html = alerts.map(alertTemplate).join("");
  alertsContainer.insertAdjacentHTML("beforeend", html);
}

function setVisitorCenters(centers) {
  const centersContainer = document.querySelector(".visitor ul");
  centersContainer.innerHTML = "";
  const html = centers.map(visitorCenterTemplate).join("");
  centersContainer.insertAdjacentHTML("beforeend", html);
}

function setActivities(activities) {
  const activitiesContainer = document.querySelector(".activities ul");
  activitiesContainer.innerHTML = "";
  const html = activities.map(activityTemplate).join("");
  activitiesContainer.insertAdjacentHTML("beforeend", html);
}

async function init() {
    const parkData = await getParkData();
    setHeaderFooter(parkData);
    const alerts = await getParkAlerts(parkData.parkCode);
    const visitorCenters = await getVisitorCenterData(parkData.parkCode);
    setAlerts(alerts);
    setVisitorCenters(visitorCenters);
    setActivities(parkData.activities);
  }

init();
