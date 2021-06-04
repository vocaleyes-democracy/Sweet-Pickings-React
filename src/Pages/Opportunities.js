import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getTreeData } from '../redux/actions.js'
import TreeList from '../Components/TreeList'
import Map from '../Components/Map'

function Opportunities({treeArray, treeData}) {

  useEffect(() => {
    treeData()
  },[treeData])

    return (
        <div>
            <div className={'map-tree-container'}>
              <TreeList assets={treeArray}/>
              <Map assets={treeArray}/>
            </div>
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
