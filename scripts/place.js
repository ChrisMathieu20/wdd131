let temperature = document.getElementById("temperature");
let windSpeed = document.getElementById("wind");

const temper = parseInt(temperature);
const wspeed = parseInt(windSpeed);

function calculateWindChill(temp, speed) {
    let calcul = "";
    if (temp <= 10 && speed > 4.8){
        calcul = Math.round(13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16))
    } else {
        calcul = "N/A";
    }
    return calcul;
}

const windChill = calculateWindChill(temper, wspeed);
let unit = "";
if (windChill !== "N/A") {
    unit = "°C";
}
document.getElementById("windchill").textContent = windChill + unit;