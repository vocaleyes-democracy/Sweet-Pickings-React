import React, { useState } from 'react'
import {
  MapContainer,
  TileLayer,
  MapConsumer,
} from 'react-leaflet'

import MyMap from './MyMap'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '40vw',
    height: '60vh',
    marginTop: '20px'
  },
}))


function Map2({formCoords, setFormCoords, clicked, setClicked}) {
  const classes = useStyles()
  const [map, setMap] = useState([51.63019953098332, -3.9596806597695333])

  

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
            setClicked(true)
          })
          return null
        }}
      </MapConsumer>
    </MapContainer>
  )
}

export default Map2
