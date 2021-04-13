import React from 'react'
import { connect } from 'react-redux'
import TreeList from './TreeList'
import MapPage from './MapPage'

function TreePage({trees}){

  

  return(
    <>
      <TreeList />
      <MapPage />
    </>
  )
}

const msp = (state) => {
  return {treeArray: state.trees}
}

export default connect(msp)(TreePage)