import React from 'react'
import { List } from 'semantic-ui-react'

function Tree({ tree }) {

  return (
    <List as="h3" className="list-item">
      <List.Item className="list-item">
        <List.Icon name='leaf' color='green' />
        <List.Content>
          <List.Header>#{tree.id}</List.Header>
        </List.Content>
        <List.Content>
          <List.Description>Type: {tree.type}</List.Description>
        </List.Content>
        <List.Content>
          <List.Description>Variety: {tree.variety}</List.Description>
        </List.Content>
        <List.Content>
          <List.Description>Number of Assets: {tree.numberOfTrees}</List.Description>
        </List.Content>
        <List.Content>
          <List.Description>Address #1: {tree.address1}</List.Description>
        </List.Content>
        <List.Content>
          <List.Description>Address #2: {tree.address2}</List.Description>
        </List.Content>
      </List.Item>
    </List>
  )
}

export default Tree