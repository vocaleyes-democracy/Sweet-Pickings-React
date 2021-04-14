import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import TreeList from './TreeList'
import MapPage from './MapPage'
import { getTreeData } from '../redux/actions.js'

function TreePage(props) {

  useEffect(() => {
    props.treeData()
  },[])

  return (
    <>
      <TreeList assets={props.treeArray}/>
      <MapPage assets={props.treeArray}/>
    </>
  )
}

const msp = (state) => {
  return { treeArray: state.trees }
}

const mdp = (dispatch) => {
  return {
    treeData: () => dispatch(getTreeData())

  }
}

export default connect(msp, mdp)(TreePage)