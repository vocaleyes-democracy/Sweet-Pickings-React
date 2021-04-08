import { combineReducers } from 'redux'
import { GET_GEO } from './actionTypes'

const defaultState = {
  geoData: []
}


function geoReducer(currentState = defaultState.geoData, action) {
  switch(action.type) {
    case GET_GEO:
      return action.payload
      default: 
      return currentState
  }
}


const rootReducer = combineReducers({
  geoData: geoReducer
})

export default rootReducer