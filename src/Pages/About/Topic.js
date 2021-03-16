import React from 'react';
import { useParams } from 'react-router-dom';

export default function Topic() {
    let { topicId } = useParams();

    return (

        // Conditionally render The Story, Pickers, Growers, Recipients information

        <div>
            <h3>{topicId}</h3>
        </div>
    )
}
