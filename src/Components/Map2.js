import React, { useState, useRef, useMemo } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
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

  const center = {
    lat: 51.63019953098332,
    lng: -3.9596806597695333,
  }
  
  function DraggableMarker() {
    const [position, setPosition] = useState(center)
    const markerRef = useRef(null)
    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current
          if (marker != null) {
            setPosition(marker.getLatLng())
          }
        },
      }),
      [],
    )
  
  
    return (
      <Marker
        draggable={true}
        eventHandlers={eventHandlers}
        position={position}
        ref={markerRef}>
        <Popup minWidth={90}>
          <span>
           
          </span>
        </Popup>
      </Marker>
    )
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
      <DraggableMarker />
    </MapContainer>
  )
}

export default Map2
