import React from 'react'
import { Header, Container } from 'semantic-ui-react'
import apples from '../images/apples.jpg'

export default function HeaderImg() {

  return (
    <Container center>
      <Header
        as="h1"
        style={{
          width: 1024,
          height: 320,
          display: "inline-block",
          opacity: 0.9,
          backgroundImage: `url(${apples})`,
          backgroundSize: "cover",
          marginBottom: 0,
          textAlign: "center"
        }}
      >
      </Header>
    </Container>
      
      // <Image
      //   src='../assets/images/apples.jpg'
      //   alt="apples hanging from tree"
      //   fluid
      //   style={{
      //     background-position: 
      //   }}
        // as='a'
        // href='/about'
        // centered={true}
      // content="testing testing"
      // />
  )
}