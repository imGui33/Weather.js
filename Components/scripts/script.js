

const api = {
    key: "a33d5f35bddc4f30eb67d26e2a775b88",
    base: "https://api.openweathermap.org/data/2.5/",
    lang: "pt_br",
    units: "metric"
}
let inputCity = document.querySelector(".inputSearchCity")
let submitInput = document.querySelector(".submit")


const searchCoordsCity = async(cidade) => {
    console.log(cidade)
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cidade}&limit=5&appid=${api.key}`)
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

            console.log(latitude, longitude)

            searchResultsCity(latitude, longitude)
        })
       
    }


const searchResultsCity = (latitude, longitude) => {
    fetch(`${api.base}weather?lat=${latitude}&lon=${longitude}&appid=${api.key}`)
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
    
}   


submitInput.addEventListener("click", () =>{
    // searchCoordsCity(inputCity.value)
    displayResults()
    
})



// function WeatherGet(param) {
//     return axios.get(`https://swapi.dev/api/${param}`)
// }
// function WeatherGet(param) {
//     return axios.get(`${api.base}/weather?q=${param}&lang=${api.lang}&units=${api.units}`)
// }