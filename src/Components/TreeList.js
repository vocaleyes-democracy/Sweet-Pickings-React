import React from 'react'
import Tree from './Tree.js'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

function TreeList({ assets }){

  const renderTrees = () => {
    return assets.map(tree =>  {
      return (
      <Grid item key={tree.id} xs={12} sm={6} lg={4}>
        <Tree tree={tree}/>
      </Grid>
      )
    } )
  } 

  return(
    <div className={'trees'}>
    <Container>
      <Grid container spacing={4}>
        {renderTrees()}
      </Grid>
    </Container>
    </div>
  )
}

export default TreeList