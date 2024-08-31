let cityInput = document.getElementById("inputLoc");
let searchBtn = document.getElementById("searchBtn");

let showLocation = document.getElementById("location");
let image = document.getElementById("image");
let temperatureC = document.getElementById("temp");
let feelsLike = document.querySelector(".feelsLike");
let wind = document.querySelector(".wind");
let cloud = document.getElementById("cloud");
let time = document.getElementById("time");
let text = document.getElementById("text");
let hide = document.querySelector(".hide");
let error = document.querySelector(".error");

let getData = async (Data) => {
    let API = await fetch(`http://api.weatherapi.com/v1/current.json?key=65979c917f83467e81e83221240607&q=${Data}&aqi=yes`);
    let resuldJson = await API.json();
    return resuldJson;

    // if(API.status ==404){
    //     error.classList.add("hide")
    // }
    // if(resuldJson.status ==400){
    //     // error.classList.add("hide")
    //     document.querySelector("hide").style.display ="block"
    // }
};

searchBtn.addEventListener("click", async () => {
    let input = cityInput.value;
    let linkApi = await getData(input);

    showLocation.innerText = `${linkApi.location.country}, ${linkApi.location.name}`;
    image.src = `${linkApi.current.condition.icon}`;
    temperatureC.innerText = `${linkApi.current.temp_c}°C`;
    feelsLike.innerText = `Feels like: ${linkApi.current.feelslike_c}°C`;

    wind.innerText = `Wind: ${linkApi.current.wind_mph} mp/h`;
    cloud.innerText = `Cloud: ${linkApi.current.cloud}`;

    time.innerText = `${linkApi.location.localtime}`;
    text.innerText = `${linkApi.current.condition.text}`;
});

cityInput.addEventListener("keyup", (eve) => {
    eve.preventDefault();
    if (eve.keyCode === 13) {
        searchBtn.click();
    };
});