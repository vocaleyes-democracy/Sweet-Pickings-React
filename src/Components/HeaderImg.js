import React from 'react'
import { Image } from 'semantic-ui-react'

export default function HeaderImg(){

    return (
        <Image 
            src='/public/images/applepic.jpg' 
            alt="apples hanging from tree" 
            fluid 
            // content="testing testing"
        />
    )
}