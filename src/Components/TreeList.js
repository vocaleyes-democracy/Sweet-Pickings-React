import React from 'react'
import Tree from './Tree.js'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

function TreeList({ assets }){

  const renderTrees = () => {
    return assets.map(tree =>  {
      return (
      <Grid item key={tree.id} xs={12} sm={6}>
        <Tree tree={tree}/>
      </Grid>
      )
    } )
  } 

  return(
    <div className={'trees tree-list'}>
    <Container>
      <Grid container>
        {renderTrees()}
      </Grid>
    </Container>
    </div>
  )
}

export default TreeList