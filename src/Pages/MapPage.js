import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { sendGeocodingRequest, getTreeData } from '../redux/actions'



function MapPage(props) {

  

  

  const [map, setMap] = useState({ lat: 51.6182, lng: -3.9864, zoom: 11, city: "Sketty" })
  // const [geo, setGeo] = useState({data: props.geoData("17 Glan yr Afon Gardens, Sketty, Swansea SA2 9HX, UK")})

  return (
    <>
      <MapContainer className="map-container"
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

const msp = (state) => {
  return { geoArray: state.geoData }
}

const mdp = (dispatch) => {
  return {
    geoData: (location) => dispatch(sendGeocodingRequest(location))
  }
}

export default connect(null, mdp)(MapPage)