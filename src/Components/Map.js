import React, { useState } from 'react'
import { connect } from 'react-redux'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { sendGeocodingRequest } from '../redux/actions'
// import { APPLICATION_ID, API_KEY } from '../APIs/travelTimeAPI'

import L from 'leaflet';
import strawberry from '../images/strawberry.png'
import shadow from '../images/shadow.png'

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
  padding: '25px 0'
  }
}))


function Map({assets}) {

  const classes = useStyles()

  function handleClick(){
    console.log('i\'m clicking')
  }
  

  const [map, setMap] = useState( [51.61915697268178, -3.9376372029662274] )
  // const [map, setMap] = useState( [asset.geometry.coordinates[1], asset.geometry.coordinates[0]] )

  const appleIcon = L.icon({
    iconUrl: strawberry,
    shadowUrl: shadow,

    iconSize:     [38, 45], // size of the icon
    shadowSize:   [50, 45], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

  const renderMarkers = () => {
    return assets.map(asset => {
      return (<Marker  icon={appleIcon} key={asset.id} position={[asset.geometry.coordinates[1], asset.geometry.coordinates[0]]} scrollWheelZoom={false} doubleClickZoom={false}> 
        <Popup>
          Site #{asset.id}
    </Popup>
      </Marker>)
    })
  }

  return (
    <div className={classes.root}>
      <MapContainer className="map-container"
        center={[map[0], map[1]]}
        zoom={14}
        scrollWheelZoom={false}
        doubleClickZoom={false}
      >
        <TileLayer
          attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {renderMarkers()}
      </MapContainer>
    </div>

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