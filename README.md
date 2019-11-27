# Weather App

This is a weather app powered by Dark Sky API and Google Places API. I used Bulma to do some styling because I currently don't fare well with layout design.

It relies on an Express server to make calls to Dark Sky. We needed to a server because Dark Sky only supplies developers with private API keys.

## This app simply does the following

1. Accept a city's latitude and longitude from the client using Google Places Autocomplete.
2. Request weather data from Dark Sky.
3. Update the page for the client with weather information.

## Motivation

I made this to get practice connecting client code with server code, but without the use of frontend frameworks like Vue or React. It seems like it would be possible to supplement this weather app with more APIs. Perhaps an integration that recommends local activities based on weather would be an interesting way to extend the app.
