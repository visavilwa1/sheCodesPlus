let city = "Sydney";
let apiKey = "11563084a62edb76b2t83b933f14960o";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Sydney&key=${apiKey}&untis=metric`;

function displayTemperature(response) {
  let temperature = Math.round(response.data.temperature.current);
  let city = response.data.city;

  let headingElement = document.querySelector("#h1");
  headingElement.innerHTML = `It ${temperature} degrees in ${city}`;
}

axios.get(apiUrl).then(displayTemperature);
