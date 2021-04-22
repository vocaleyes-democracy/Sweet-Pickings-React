import { APPLICATION_ID, API_KEY } from '../APIs/travelTimeAPI.js'
import { GET_GEO, GET_TREES } from './actionTypes'


export const sendGeocodingRequest = (location) => {
  // console.log(location)
  return function(dispatch) {
    fetch(`https://api.traveltimeapp.com/v4/geocoding/search?query=` + location, {
    method: "GET",
    credentials: "same-origin",
    headers: {
    "Content-Type": "application/json",
    "X-Application-Id": APPLICATION_ID,
    "X-Api-Key": API_KEY,
    "Accept-Language": "en-GB"
    }
    
    })
    .then(response => response.json()) // parses JSON response into native Javascript objects
    .then(data => {
    // data array is returned in order of: [lng, lat] which is backwards for our purposes
    console.log(data.features[0].geometry.coordinates) //coordinates come back that are from MapPage [getGeo]
    dispatch({ type: GET_GEO, payload: data.features[0].geometry.coordinates})
    })
    }

  }

  export const getTreeData = () => {
    return async function (dispatch) {
     let resp = await fetch("http://localhost:4000/assets")
     if (!resp.ok) {
       throw new Error(`HTTP error! status: ${resp.status}`);
     }
     let treeArray = await resp.json()
     return dispatch({type: GET_TREES, payload: treeArray})
    }
  }

  
  