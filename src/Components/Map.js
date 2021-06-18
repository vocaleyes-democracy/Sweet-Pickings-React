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

function Map({ assets }) {
  const [asset] = assets

  
  function renderFruitIcon(fruit) {
    switch (fruit) {
      case 'Apple':
        return L.icon({
          iconUrl: apple,
          iconSize: [28, 30], // size of the icon
          iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
          popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
        })
      case 'Cherry':
        return L.icon({
          iconUrl: cherries,
          iconSize: [28, 30], // size of the icon
          iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
          popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
        })
      case 'Blueberry':
        return L.icon({
          iconUrl: blueberry,
          iconSize: [28, 30], // size of the icon
          iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
          popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
        })
      case 'Strawberry':
        return L.icon({
          iconUrl: strawberries,
          iconSize: [28, 30], // size of the icon
          iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
          popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
        })
      case 'Pear':
        return L.icon({
          iconUrl: pear,
          iconSize: [28, 30], // size of the icon
          iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
          popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
        })
      default:
        return L.icon({
          iconUrl: fruits,
          iconSize: [28, 30], // size of the icon
          iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
          popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
        })
    }
  }

  console.log(renderFruitIcon("Pear"))

  const fruit = assets.map((asset) => asset.asset[0].variety)
  console.log(fruit)

  const classes = useStyles()

  // function handleClick(){
  //   console.log('i\'m clicking')
  // }

  const [map, setMap] = useState([
    asset.geometry.coordinates[1],
    asset.geometry.coordinates[0],
  ])



  // const fruitIcon = L.icon({
  //   iconUrl: {renderFruitIcon},
  //   // shadowUrl: shadow,
  //   iconSize: [28, 30], // size of the icon
  //   // shadowSize:   [50, 45], // size of the shadow
  //   iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  //   // shadowAnchor: [4, 62], // the same for the shadow
  //   popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
  // })

 
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
