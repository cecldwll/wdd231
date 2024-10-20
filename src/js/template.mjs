// create HTML template for the park info section
export function parkInfoTemplate(info) {
    return `<a href="/" class="hero-banner__title">${info.name}</a>
      <p class="hero-banner__subtitle">
        <span>${info.designation}</span>
        <span>${info.states}</span>
      </p>`;
  }
  
  // create HTML template for media cards
  export function mediaCardTemplate(info) {
    return `<div class="media-card">
      <a href="${info.link}">
      <img src="${info.image}" alt="${info.name}" class="media-card__img">
      <h3 class="media-card__title">${info.name}</h3>
      </a>
     <p>${info.description}</p>
       </div>`;
  }
  
  
  // get the voice phone number from the phone numbers array
  function getVoicePhone(numbers) {
    const voice = numbers.find((number) => number.type === "Voice");
    return voice.phoneNumber;
  }
  
  // create HTML template for the footer section
  export function footerTemplate(info) {
    const voice = getVoicePhone(info.contacts.phoneNumbers);

    return `<section class="contact">
    <h3>Contact Info</h3>
    <h4>Phone:</h4>
    <p>${voice}</p>
  </section>
    `;
  }
  
  // alerts
  import spritePath from '../images/sprite.symbol.svg';
  export function alertTemplate(alert) {
    let alertType = "";
    switch (alert.category) {
      case "Park Closure":
        alertType = "closure";
        break;
      default:
        alertType = alert.category.toLowerCase();
    }
    
    return `<li class="alert">
              <svg class="icon" focusable="false" aria-hidden="true">
                <use href="${spritePath}#alert-${alertType}"></use>
              </svg>
              <div>
                <h3 class="alert-${alertType}">${alert.title}</h3>\
                <p>${alert.description}</p>
              </div>
            </li>`;
  }

  // visitor services
  export function visitorCenterTemplate(center) {
    const isOpen = new Date() >= new Date(center.operatingHours[0].standardHours.beginDate) && 
                   new Date() <= new Date(center.operatingHours[0].standardHours.endDate);
    
    return `<li class="visitor-center">
              <h3>${center.name}</h3>
              <p>${center.description}</p>
              <p>${center.directionsInfo}</p>
              <p>Open from ${center.operatingHours[0].standardHours.beginDate} to ${center.operatingHours[0].standardHours.endDate}</p>
              <p class="status ${isOpen ? 'open' : 'closed'}">${isOpen ? 'Currently Open' : 'Currently Closed'}</p>
            </li>`;
  }
  
  // activities
  export function activityTemplate(activity) {
    return `<li>${activity.name}</li>`;
  }
  