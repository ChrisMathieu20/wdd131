// Author and Place Title
document.querySelector("#author").innerHTML = "Christian Mathieu Ramasinjanahary";
document.querySelector(".place-title").innerHTML = "Madagascar";

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