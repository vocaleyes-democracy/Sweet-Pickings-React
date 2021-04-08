import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function MapPage() {

  const [map, setMap] = useState({ lat: 51.6182, lng: -3.9864, zoom: 10 })


  return (
    <>
      <h1>Map Page Rendered</h1>
      <MapContainer
        center={[map.lat, map.lng]}
        zoom={map.zoom}
        style={{ width: '65%', height: '900px', float: "right" }}
      >
        <TileLayer
          attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>

    </>

  )




}

export default MapPage