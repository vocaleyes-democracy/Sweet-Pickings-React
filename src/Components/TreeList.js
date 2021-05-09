import React from 'react'
import Tree from './Tree.js'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

function TreeList({ assets }){

  const renderTrees = () => {
    return assets.map(tree => <Tree key={tree.id} tree={tree}/> )
  } 

  return(
    <Container>
      <Grid container className="tree-page">
        {renderTrees()}
      </Grid>
    </Container>
  )
}

export default TreeList