import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { sendGeocodingRequest } from '../redux/actions'
// import { APPLICATION_ID, API_KEY } from '../APIs/travelTimeAPI'



function Map({assets}) {
  const [ geometry ] = assets
  // console.log({ geometry })

  const [map, setMap] = useState( [geometry.geometry.coordinates[1], geometry.geometry.coordinates[0]] )

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
        center={[map[0], map[1]]}
        zoom={14}
        
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