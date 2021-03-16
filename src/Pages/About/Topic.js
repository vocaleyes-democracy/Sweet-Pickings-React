import React from 'react';
import { useParams } from 'react-router-dom';

export default function Topic() {
    let { topicId } = useParams();

    const AboutContent = () => {
        if ((topicId === 'story')) {
            return (
                <p>Story About Info</p>
            )
        } else if ((topicId === 'pickers')) {
            return (
                <p>Pickers About Info</p>
            )
        } else if ((topicId === 'growers')) {
            return (
                <p>Growers About Info</p>
            )
        }
        // Need to add info for Recipients and Gallery
    }

    return (
        <div>
            <h3>{AboutContent()}</h3>
            {/* <h3>{topicId}</h3> */}
        </div>
    )
}
