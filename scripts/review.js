const visits = document.querySelector(".visits");
let countVisits = Number(window.localStorage.getItem("numVisits-ls")) || 1;
if (countVisits > 1) {
    let nth = "";
    let mod = countVisits % 10;
    if (mod == 2) {
        nth = "nd";
    } else if (mod == 3) {
        nth = "rd";
    } else {
        nth = "th";
    }
    visits.textContent = "This is your " + countVisits + nth + " review";
} else {
    visits.textContent = `This is your first review. 😎`;
}
countVisits++;
localStorage.setItem("numVisits-ls", countVisits);