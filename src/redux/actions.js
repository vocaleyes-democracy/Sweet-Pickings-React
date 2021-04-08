import { APPLICATION_ID, API_KEY } from './travelTimeAPI'
import { GET_GEO } from './actionTypes'


export const sendGeocodingRequest = (location) => {
  return function(dispatch) {
    fetch(`https://api.traveltimeapp.com/v4/geocoding/search?query=` + location, {
    method: "GET",
    credentials: "same-origin",
    headers: {
    "Content-Type": "application/json",
    "X-Application-Id": APPLICATION_ID,
    "X-Api-Key": API_KEY
    }
    
    })
    .then(response => response.json()) // parses JSON response into native Javascript objects
    .then(data => {
    
    console.log(data)
    dispatch({ type: GET_GEO, payload: data })
    })
    }

  }

  
  