import React, { useState, useRef, useMemo, useCallback } from 'react'
import { MapContainer, TileLayer, Marker, Popup
 // MapConsumer
} from 'react-leaflet'
// import L from "leaflet";
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
    // const [draggable, setDraggable] = useState(false)
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
    // const toggleDraggable = useCallback(() => {
    //   setDraggable((d) => !d)
    // }, [])
  
    return (
      <Marker
        draggable={true}
        eventHandlers={eventHandlers}
        position={position}
        ref={markerRef}>
        <Popup minWidth={90}>
          <span>
            Test Test
          </span>
        </Popup>
      </Marker>
    )
  }

  // const layer = L.layerGroup().addTo(map);
  // console.log("layer in Map2", layer)

  // function updateMarkers(e) {
  //   layer.clearLayers();
  //     L.marker(
  //       e.latLng
  //     ).addTo(layer);
  // }

  // const icon = L.icon({
  //   iconSize: [25, 41],
  //   iconAnchor: [10, 41],
  //   popupAnchor: [2, -40],
  //   iconUrl: "https://unpkg.com/leaflet@1.7/dist/images/marker-icon.png",
  //   shadowUrl: "https://unpkg.com/leaflet@1.7/dist/images/marker-shadow.png"
  // });
  
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
      {/* <MapConsumer
      scrollWheelZoom={false} 
      doubleClickZoom={false}>
        {(map) => {
          // console.log("map center:", map.getCenter());
          map.on('click', function (e) {
            const layer = L.layerGroup().addTo(map);
            console.log("layer in Map2", layer)
            const { lat, lng } = e.latlng
            console.log("lat, long in Map2", lat, lng)

            // layer.clearLayers();
            layer.removeLayer()

            L.marker([lat, lng], { icon }).addTo(layer);
            // updateMarkers(e)
            setFormCoords([lng,lat])
            setClicked(true)
          })
          return null
        }}
      </MapConsumer> */}
      <DraggableMarker />
    </MapContainer>
  )
}

export default Map2
