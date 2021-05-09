import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'


// import { List } from 'semantic-ui-react'

function Tree({ tree }) {

  return (
    <Grid item xs={12} sm={4} lg={3}>
      <Card>{`${tree.type}: ${tree.variety}`}</Card>

    </Grid> 
    // <List as="h3" className="list-item">
    //   <List.Item className="list-item">
    //     <List.Icon name='leaf' color='green' />
    //     <List.Content>
    //       <List.Header>#{tree.id}</List.Header>
    //     </List.Content>
    //     <List.Content>
    //       <List.Description>Type: {tree.type}</List.Description>
    //     </List.Content>
    //     <List.Content>
    //       <List.Description>Variety: {tree.variety}</List.Description>
    //     </List.Content>
    //     <List.Content>
    //       <List.Description>Number of Assets: {tree.numberOfTrees}</List.Description>
    //     </List.Content>
    //     <List.Content>
    //       <List.Description>Address #1: {tree.address1}</List.Description>
    //     </List.Content>
    //     <List.Content>
    //       <List.Description>Address #2: {tree.address2}</List.Description>
    //     </List.Content>
    //   {tree.comment ? 
    //     (<List.Content>
    //       <List.Description>Comment: {tree.comment}</List.Description>
    //     </List.Content>)
    //     :
    //     null
    //   }
    //   </List.Item>
    // </List>
  )
}

export default Tree