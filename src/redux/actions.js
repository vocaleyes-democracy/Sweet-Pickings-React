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
    // data array is returned as [lng, lat]
    console.log(data.features)
    dispatch({ type: GET_GEO, payload: data})
    })
    }

  }

  export const getTreeData = () => {
    return async function (dispatch) {
     let resp = await fetch("http://localhost:4000/trees")
     if (!resp.ok) {
       throw new Error(`HTTP error! status: ${resp.status}`);
     }
     let treeArray = await resp.json()
     console.log(treeArray)
     return dispatch({type: GET_TREES, payload: treeArray})
    }
  }

  
  