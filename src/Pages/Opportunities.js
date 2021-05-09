import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getTreeData } from '../redux/actions.js'

import TreeList from '../Components/TreeList'



function Opportunities({treeArray, treeData}) {

  useEffect(() => {
    treeData()
  },[treeData])

    return (
        <div>
            {/* BROWSE OPPORTUNITIES */}
            <TreeList assets={treeArray}/>
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
