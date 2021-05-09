import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { sendGeocodingRequest } from '../redux/actions'
// import { APPLICATION_ID, API_KEY } from '../APIs/travelTimeAPI'



function Map({assets}) {

    // const tree1 = assets[0]
    // console.log(tree1)
    // const [long, lat] = tree1.geometry.coordinates
// having async issues with these variables.....
    // console.log(long)
    // console.log(lat)

  const [map, setMap] = useState({ lat: 51.62284989072822, lng: -3.943877083337367 })


  const renderMarkers = () => {
    return assets.map(asset => {
      return (<Marker  key={asset.id} position={[asset.geometry.coordinates[1], asset.geometry.coordinates[0]]}>
        <Popup>
          Asset #{asset.id}, {asset.numberOfTrees > 1 ? `${asset.numberOfTrees} trees`: `${asset.numberOfTrees} tree`}
    </Popup>
      </Marker>)
    })
  }


  return (
    <>
      <MapContainer className="map-container"
        center={[map.lat, map.lng]}
        zoom={11}
        
      >
        <TileLayer
          attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {renderMarkers()}
      </MapContainer>
    </>

  )

}

const msp = (state) => {
  return { coordinates: state.geoData }
}

const mdp = (dispatch) => {
  return {
    geoData: (location) => dispatch(sendGeocodingRequest(location))
  }
}

export default connect(msp, mdp)(Map)