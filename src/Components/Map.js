import React, { useState } from 'react'
import { connect } from 'react-redux'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { sendGeocodingRequest } from '../redux/actions'
// import { APPLICATION_ID, API_KEY } from '../APIs/travelTimeAPI'

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
  padding: '25px 0'
  }
}))


function Map({assets}) {

  const classes = useStyles()
  // console.log(assets)
  // const [ asset1 ] = assets
  // const [id, setId] = useState(null)
//  console.log(id)
  // console.log(asset1)

  function handleClick(){
    console.log('i\'m clicking')
  }
  

  const [map, setMap] = useState( [51.61915697268178, -3.9376372029662274] )
  // const [map, setMap] = useState( [asset.geometry.coordinates[1], asset.geometry.coordinates[0]] )

  const renderMarkers = () => {
    return assets.map(asset => {
      return (<Marker  key={asset.id} position={[asset.geometry.coordinates[1], asset.geometry.coordinates[0]]} scrollWheelZoom={false} doubleClickZoom={false}> 
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