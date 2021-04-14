import React from 'react'
import Tree from './Tree.js'

function TreeList({ assets }){

  const renderTrees = () => {
    return assets.map(tree => <Tree key={tree.id} tree={tree}/> )
  } 

  return(
    <div className="tree-page">
      <h1>Assets:</h1>
      {renderTrees()}
    </div>
  )
}

export default TreeList