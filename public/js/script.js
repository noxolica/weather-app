const inputBox = document.querySelector("[data-search-city]")
const inputContainer = document.querySelector(".input-container")
const options = {
  types: ["(cities)"]
}

const searchBox = new google.maps.places.Autocomplete(inputBox, options)

google.maps.event.addListener(searchBox, "place_changed", () => {
  const place = searchBox.getPlace()
  if (place === null) {
    return
  }

  inputContainer.classList.add("is-loading")

  const latitude = place.geometry.location.lat()
  const longitude = place.geometry.location.lng()

  fetch("/weather", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      latitude: latitude,
      longitude, longitude
    })
  }).then(res => res.json()).then(data => {
    updateDisplay(data, place.name)
    inputContainer.classList.remove("is-loading")
    inputBox.value = ""
  })
})


updateDisplay = (data, location) => {
  const weatherNode = document.querySelector('[data-weather]')
  const temperatureNode = document.querySelector('[data-temperature]')
  const locationNode = document.querySelector('[data-location]')

  weatherNode.textContent = data.summary
  temperatureNode.textContent = `${data.temperature} °C`
  locationNode.textContent = location
}