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

let dateTimeModif = `Last modified: <span>${dd}/${mm}/${yyyy} ${hours}:${minutes}:${seconds}</span>`;

lastModified.innerHTML = dateTimeModif;