import React, { useState, useRef, useEffect } from 'react'
import { connect } from 'react-redux'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { sendGeocodingRequest } from '../redux/actions'



function MapPage(props) {


  // function renderGeo(){
  //   console.log(props.geoData("474 48th Avenue, Long Island City, NY 11109"))
  // }

  const [map, setMap] = useState({ lat: 51.6182, lng: -3.9864, zoom: 11, city: "Sketty" })
  const [geo, setGeo] = useState({data: props.geoData("Sketty, Swansea SA2 9EB, UK")})
   
  return (
    <>
    <h1>{geo.data}</h1>
      <MapContainer className = "map-container"
        
        center={[map.lat, map.lng]}
        zoom={map.zoom}
      >
        <TileLayer
          attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[map.lat, map.lng]}>
        <Popup>
          Welcome to {map.city}!
        </Popup>
        </Marker>
      </MapContainer>

    </>

  )

}

const mdp = (dispatch) => {
  return {
    geoData: (location) => dispatch(sendGeocodingRequest(location))
  }
}

export default connect(null, mdp)(MapPage)