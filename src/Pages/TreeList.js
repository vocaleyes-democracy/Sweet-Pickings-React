import React from 'react'
import Tree from './Tree.js'

function TreeList({ trees }){

  const renderTrees = () => {
    // console.log(trees)
    return trees.map(tree => <Tree key={tree.id} tree={tree}/> )
  } 

  return(
    <div className="tree-page">
      <h1>Grower Tree List:</h1>
      {renderTrees()}
    </div>
  )
}

export default TreeList