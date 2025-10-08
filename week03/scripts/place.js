// Author and Place Title
document.querySelector("#author").innerHTML = "Christian Mathieu Ramasinjanahary";
document.querySelector(".place-title").innerHTML = "Madagascar";

// The current year
const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = today.getFullYear();
const lastModified = document.querySelector("#lastModified");
const lastModifDate = new Date(document.lastModified);
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
let formattedDate = `${yyyy}-${mm}-${dd}`;
let hours = String(today.getHours()).padStart(2, '0');
let minutes = String(today.getMinutes()).padStart(2, '0');
let seconds = String(today.getSeconds()).padStart(2, '0');

// Last Modified - Date and Time
let dateTimeModif = `Last modified: <span>${dd}/${mm}/${yyyy} ${hours}:${minutes}:${seconds}</span>`;
lastModified.innerHTML = dateTimeModif;

// Weather
const temperature = 22;
const conditions = "Partly Cloudy";
const wind = 9.7;
const Tw = (T,V) => 13.12+(0.6215*T)-(11.37*(V**0.16))+(0.3965*T*(V**0.16));
const windChill = Math.round(Tw(temperature,wind)*10)/10;
document.querySelector("#temperature").textContent = `${temperature}°C`;
document.querySelector("#conditions").innerHTML = conditions;
document.querySelector("#wind").textContent = `${wind}km/h`;
document.querySelector("#windChill").textContent = `${windChill}°C`;