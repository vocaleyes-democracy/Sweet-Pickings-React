import { APPLICATION_ID, API_KEY } from '../APIs/travelTimeAPI.js'
import { GET_GEO, GET_TREES, ADD_A_TREE } from './actionTypes'

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
    return function (dispatch) {
      fetch("http://localhost:4000/assets")
      .then(r => r.json())
      .then(treeArray => dispatch({type: GET_TREES, payload: treeArray}))
    }
  }


  export const addATree = (assetObj) => {
    return function (dispatch) {
      fetch("http://localhost:4000/assets", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(assetObj)
    })
    .then(r => r.json())
    .then(treeObj => {dispatch({type: ADD_A_TREE, payload: treeObj})})
    }
  }

  
  