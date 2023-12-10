const apikey="811a297c5528351aa682110d477b6633";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const weatherIcon=document.querySelector(".weather-icon");

const searchBox=document.querySelector(".search input")
const searchBtn=document.querySelector(".search button")

async function checkwether(city){
    const response=await fetch(apiurl+city+`&appid=${apikey}`)
    var data=await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+" %";
    document.querySelector(".wind").innerHTML=data.wind.speed +" Km/hour";

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="clear.png";
    }
    else if(data.weather[0].main=="drizzle"){
        weatherIcon.src="drizzle.png";
    }
    else if(data.weather[0].main=="rain"){
        weatherIcon.src="rain.png";
    }
    else if(data.weather[0].main=="mist"){
        weatherIcon.src="mist.png";
    }
}

searchBtn.addEventListener("click",()=>{
    checkwether(searchBox.value);
})