import React from 'react'
import { Image } from 'semantic-ui-react'

export default function HeaderImg() {

  return (
    <Image
      src='/images/applepic.jpg'
      alt="apples hanging from tree"
      fluid
      as='a'
      href='/about'
      centered={true}
    // content="testing testing"
    />
  )
}