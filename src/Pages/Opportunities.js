import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getTreeData } from '../redux/actions.js'

import TreeList from '../Components/TreeList'
import Map from '../Components/Map'



function Opportunities({treeArray, treeData}) {

  const [renderMap, setRenderMap] = useState(false)

  function handleRenderMap(){
    const tree = document.querySelector('.trees')
    tree.classList.toggle('tree-list')
    return setRenderMap(!renderMap)
  }

  useEffect(() => {
    treeData()
  },[treeData])

    return (
        <div>
            <div className={'map-div'} onClick={handleRenderMap} ></div>
            <TreeList assets={treeArray}/>
            {renderMap ? <Map assets={treeArray}/> : null}
        </div>
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

export default connect(msp, mdp)(Opportunities)
