import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { sendGeocodingRequest } from '../redux/actions'
// import { APPLICATION_ID, API_KEY } from '../APIs/travelTimeAPI'



function Map(props) {


  const [map, setMap] = useState({ lat: 51.62284989072822, lng: -3.943877083337367, zoom: 11, city: "Swansea" })


  const renderMarkers = () => {
    return props.assets.map(asset => {
      // console.log(asset)
      return (<Marker  key={asset.id} position={[asset.coordinates[1], asset.coordinates[0]]}>
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
        zoom={map.zoom}
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