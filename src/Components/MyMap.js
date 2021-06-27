// import React from 'react';
// this must not be considered a React component. It must be simply a react-leaflet component!
import { useMapEvents } from 'react-leaflet'

// child component necessary to use useMapEvents hook
function MyMap() {
  const map = useMapEvents({
    click: (e) => {
      // const { lat, lng } = e.latlng
      // setFormCoords([lng])
      console.log(e.latlng)
    },
  })
  return null
}

export default MyMap;