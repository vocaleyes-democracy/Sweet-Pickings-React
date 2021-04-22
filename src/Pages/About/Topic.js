import React from 'react';
import { useParams } from 'react-router-dom';
import TreeForm from '../TreeForm';
import TreePage from '../TreePage'
import GalleryPage from '../GalleryPage'
import Story from './Story'
import Pickers from './Pickers'
import Growers from './Growers'


export default function Topic() {
    let { topicId } = useParams();

    const AboutContent = () => {
        if ((topicId === 'story')) {
            return (
                <Story />
            )
        } else if ((topicId === 'pickers')) {
            return (
              <Pickers />
            )
        } else if ((topicId === 'growers')) {
            return (
                <>
                    <Growers />
                    <TreeForm />
                    <TreePage />
                </>
            )
        } 
         // Need to add more info for Recipients and Gallery
        else if ((topicId === 'recipients')) {
          return (
              <>
                  <p>Recipients Info</p>
              </>
          )
      } else if ((topicId === 'gallery')) {
        return (
            <>
                <GalleryPage />
            </>
        )
    }
       
    }

    return (
        <div>
            <h3>{AboutContent()}</h3>
            {/* <h3>{topicId}</h3> */}
        </div>
    )
}
