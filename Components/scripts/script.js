

const api = {
    key: "a33d5f35bddc4f30eb67d26e2a775b88",
    base: "https://api.openweathermap.org/data/2.5/",
    lang: "pt_br",
    units: "metric"
}
let inputCity = document.querySelector(".inputSearchCity")
let submitInput = document.querySelector(".submit_btn")


const searchCoordsCity = async(cidade) => {
    console.log(cidade)
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cidade}&limit=5&appid=${api.key}&lang=${api.lang}`)
        .then(async(res) => {
            if (!res.ok) {
                throw new Error(`http error: status ${response.status}`)
            }
            return await res.json()
        })
        .catch(error => {
            alert(error.message)
        }).then(async(corpo) => {
            let latitude = corpo[0].lat
            let longitude = corpo[0].lon

           

            searchResultsCity(latitude, longitude)
        })
       
    }


const searchResultsCity = (latitude, longitude) => {
    fetch(`${api.base}weather?lat=${latitude}&lon=${longitude}&appid=${api.key}&lang=${api.lang}`)
    .then((res) => {
        if (!res.ok) {
            throw new Error(`http error: status ${response.status}`)
        }
        return res.json()
    })
    .catch(error => {
        alert(error.message)
    }).then((weather) => {
        displayResults(weather)
    })
   
    }



const displayResults = (weather) => {
    console.log(weather)
    let CityName = document.querySelector('.CityName')
    let temperature = document.querySelector('.temperature')
    let now_weather= document.querySelector('.now_weather')
    let humidity = document.querySelector('.humidity')
    let speed_wind = document.querySelector('.speed_wind')

    // if(weather['weather'][0]['main'] == )

    if(weather['weather'][0]['id'] == 741){ 
        document.body.classList.remove("sunny")
        document.body.classList.add("rain")
    } else {
        document.body.classList.remove("rain")
        document.body.classList.add("sunny")

    }


    let temperatureFinal = weather['main']['temp']-273.15
    temperatureFinal = temperatureFinal.toString().substring(0, 2)
    console.log(temperatureFinal)
    let temporal = weather['weather'][0]['description'][0].toUpperCase() + weather['weather'][0]['description'].substr(1)

   
    CityName.innerHTML = `${weather.name}<br> `
    temperature.innerHTML = `${temperatureFinal} C°<br>`

    now_weather.innerHTML = `${temporal}<br>`
    humidity.innerHTML = `${weather['main']['humidity']}% <br>`
    speed_wind.innerHTML = `${weather['wind']['speed']} KM/HR <br>`

    
}   


submitInput.addEventListener("click", () =>{
    event.preventDefault()
    searchCoordsCity(inputCity.value)
    displayResults()
    
})



// function WeatherGet(param) {
//     return axios.get(`https://swapi.dev/api/${param}`)
// }
// function WeatherGet(param) {
//     return axios.get(`${api.base}/weather?q=${param}&lang=${api.lang}&units=${api.units}`)
// }