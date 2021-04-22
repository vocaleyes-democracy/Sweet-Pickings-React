import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { sendGeocodingRequest } from '../redux/actions'
import { APPLICATION_ID, API_KEY } from '../APIs/travelTimeAPI'



function Map(props) {

  // i want to be able to iterate thru props.assets and use my geoData function to return long/lat for each asset so i can set Markers. Right now I have props.getGeodata (my action) which publishes state to the store, but just one time (line 14 below). when i set msp the compiler goes into an infinite GET loop. NOTE: i can't pass an array of addresses to this function because the address is part of the endpoint that i need for my GET request


  const [map, setMap] = useState({ lat: 40.744385, lng: -73.9573038, zoom: 11, city: "LIC" })
  const [geo, setGeo] = useState({ address: "Buckingham Palace Road, London, UK" })
  const [array, setArray] = useState([])


  const addressArray = props.assets.map(asset => `${asset.address1}, ${asset.address2}`)
  console.log(addressArray) // address array - success!

  // function useSetCoordinates(){
  //   const [long, latt] = props.coordinates
  //   setMap({lat: latt, lng: long, zoom: 11, city: "London" })
  // }

  useEffect(() => {
    props.geoData(geo.address)
  }, [])

  // useEffect(() => {
  //   addressArray.map(address => {
  //     fetch(`https://api.traveltimeapp.com/v4/geocoding/search?query=` + address, {
  //       method: "GET",
  //       credentials: "same-origin",
  //       headers: {
  //       "Content-Type": "application/json",
  //       "X-Application-Id": APPLICATION_ID,
  //       "X-Api-Key": API_KEY,
  //       "Accept-Language": "en-GB"
  //       }
        
  //       })
  //       .then(response => response.json()) // parses JSON response into native Javascript objects
  //       .then(data => {
  //         setArray(data.features)
  //         console.log(array)
  //       })
  //   })
  // },[])

  


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