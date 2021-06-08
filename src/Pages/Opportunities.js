import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { getTreeData } from '../redux/actions.js'
import TreeList from '../Components/TreeList'
import TreeCard from '../Components/TreeCard'
import Map from '../Components/Map'

function Opportunities({treeArray, treeData}) {

  useEffect(() => {
    treeData()
  },[treeData])

    return (
      <div>
        {treeArray.length === 0 ? <h1>Loading...</h1> : 
        <>
          <Switch>
            <Route path="/opportunities/:id" render={({match}) => {
              let id = parseInt(match.params.id)
              let opportunity = treeArray.find(tree => tree.id === id)
              
              return <TreeCard tree={opportunity} />
            }} />

            <Route path="/opportunities" render={() => {
              return (
                <>
                  {
                    treeArray.length === 0 ? <h1>Loading...</h1> : 
                      <div className={'map-tree-container'}>
                        <TreeList assets={treeArray}/>
                        <Map assets={treeArray}/>
                      </div>
                  }
                </>
              )
            }} />
          </Switch>
        </>
        }
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
