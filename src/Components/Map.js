import React, { useState } from 'react'
import { connect } from 'react-redux'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { sendGeocodingRequest } from '../redux/actions'
// import { APPLICATION_ID, API_KEY } from '../APIs/travelTimeAPI'

import L from 'leaflet'


import strawberries from '../images/strawberries.png'
import blueberry from '../images/blueberry.png'
import apple from '../images/apple.png'
import cherries from '../images/cherries.png'
import pear from '../images/pear.png'
import fruits from '../images/fruits.png'
// import shadow from '../images/shadow.png'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '25px 0',
  },
}))

function icon(fruit, size1, size2) {
  return L.icon({
    iconUrl: fruit,
    iconSize: [size1, size2], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
  })
}

function Map({ assets }) {
  const classes = useStyles()
  const [asset] = assets

  function renderFruitIcon(fruit) {
    switch (fruit) {
      case 'Apple':
        return icon(apple, 23, 23)
      case 'Cherry':
        return icon(cherries, 28, 30)
      case 'Blueberry':
        return icon(blueberry, 28, 30)
      case 'Strawberry':
        return icon(strawberries, 28, 30)
      case 'Pear':
        return icon(pear, 28, 30)
      default:
        return icon(fruits, 32, 34)
    }
  }

  // const fruit = assets.map((asset) => asset.asset[0].variety)

  // function handleClick(){
  //   console.log('i\'m clicking')
  // }

  const [map, setMap] = useState([
    asset.geometry.coordinates[1],
    asset.geometry.coordinates[0],
  ])

 
  const renderMarkers = () => {
    return assets.map((asset) => {
      return (
        <Marker
          icon={renderFruitIcon(asset.asset[0].variety)}
          key={asset.id}
          position={[
            asset.geometry.coordinates[1],
            asset.geometry.coordinates[0],
          ]}
          scrollWheelZoom={false}
          doubleClickZoom={false}
        >
          <Popup>Site #{asset.id}</Popup>
        </Marker>
      )
    })
  }

  return (
    <div className={classes.root}>
      <MapContainer
        className="map-container"
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
    geoData: (location) => dispatch(sendGeocodingRequest(location)),
  }
}

export default connect(msp, mdp)(Map)
