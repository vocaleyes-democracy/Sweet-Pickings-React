import { combineReducers } from 'redux'
import { GET_GEO, GET_TREES } from './actionTypes'

const defaultState = {
  geoData: [],
  trees: []
}


function geoReducer(currentState = defaultState.geoData, action) {
  switch(action.type) {
    case GET_GEO:
        return [...currentState, action.payload]
      default: 
      return currentState
  }
}

function treeReducer(currentState = defaultState.trees, action) {
  switch(action.type) {
    case GET_TREES:
      return action.payload
      default:
        return currentState
  }
}


const rootReducer = combineReducers({
  geoData: geoReducer,
  trees: treeReducer
})

export default rootReducer