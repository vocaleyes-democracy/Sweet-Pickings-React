import React, { useState } from 'react'
import { connect } from 'react-redux'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { sendGeocodingRequest, getTreeData } from '../redux/actions'



function MapPage(props) {

  const renderMarkers = () => {
    const addressArray = props.assets.map(asset => `${asset.address1}, ${asset.address2}`)
    console.log(addressArray) // address array - success!

    const data = props.geoData(addressArray[0])
    console.log(data) // comes thru as undefined

    // const [lng, lat] = props.geoData(props.trees[0].address1, props.trees[0].address2)
    // return props.assets.map(tree => <Marker position={[lat, lng]}>
    //   <Popup>
    //     You are in {props.trees.address2}!
    // </Popup>
    // </Marker>)
  }
  

  

  const [map, setMap] = useState({ lat: 51.6182, lng: -3.9864, zoom: 11, city: "Sketty" })
  const [geo, setGeo] = useState({data: props.geoData("17 Glan yr Afon Gardens, Sketty, Swansea SA2 9HX, UK")})

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
            You are in {map.city}!
        </Popup>
        </Marker>
        {renderMarkers()}
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