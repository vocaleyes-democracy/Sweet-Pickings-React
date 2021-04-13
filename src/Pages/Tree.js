import React from 'react'
import { List } from 'semantic-ui-react'

function Tree({ tree }){

  return(
    <List>
    <List.Item>
      <List.Icon name='tree' color='green' />
      <List.Content>Tree #{tree.id}</List.Content>
      <List.Content>Variety: {tree.variety}</List.Content>
      <List.Content>Number of Trees: {tree.numberOfTrees}</List.Content>
      <List.Content>Address #1: {tree.address1}</List.Content>
      <List.Content>Address #2: {tree.address2}</List.Content>
    </List.Item>
    </List>
  )
}

export default Tree