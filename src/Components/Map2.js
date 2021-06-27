import React, { useState } from 'react'
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  MapConsumer,
} from 'react-leaflet'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '40vw',
    height: '60vh',
  },
}))

function Map2({formCoords, setFormCoords}) {
  const classes = useStyles()
  const [map, setMap] = useState([51.63019953098332, -3.9596806597695333])

  // child component necessary to use useMapEvents hook
  function MyMap() {
    const map = useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng
        // setFormCoords([lng])
      },
    })
    return null
  }

  return (
    <MapContainer 
    className={classes.root} 
    center={[map[0], map[1]]} 
    zoom={13}
    scrollWheelZoom={false} 
    doubleClickZoom={false}
    > 
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapConsumer
      scrollWheelZoom={false} 
      doubleClickZoom={false}>
        {(map) => {
          // console.log("map center:", map.getCenter());
          map.on('click', function (e) {
            const { lat, lng } = e.latlng
            // console.log(lat, lng)
            setFormCoords([lng,lat])
          })
          return null
        }}
      </MapConsumer>
    </MapContainer>
  )
}

export default Map2
