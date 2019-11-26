const searchElement = document.querySelector('[data-search-city')
const searchBox = new google.maps.places.SearchBox(searchElement)

searchBox.addListener("places_changed", () => {
  const place = searchBox.getPlaces()[0]
  if (place === null) {
    return
  }
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
    // setWeather(data, place.formatted_address)
    console.log(data);

  })
})