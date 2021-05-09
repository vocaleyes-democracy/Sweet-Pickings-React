import { connect } from 'react-redux'
import { React, useState } from 'react'
import { Header, Form, Radio } from 'semantic-ui-react'
import { addATree } from '../redux/actions'

import { withRouter } from 'react-router-dom'

// this should be wrapped inside a Material Container bc it will provide padding/margin

// Data to be moved elsewhere
const fruitTypes = [
  {
    key: "Apple",
    text: "Apple",
    value: "Apple"
  },
  {
    key: "Pear",
    text: "Pear",
    value: "Pear"
  },
  {
    key: "Cherry",
    text: "Cherry",
    value: "Cherry"
  },
  {
    key: "Walnuts",
    text: "Walnuts",
    value: "Walnuts"
  },
]

// Need to nest varieties under each fruit type
// const fruitVarieties = [

// ]

function TreeForm(props) {
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')
  // const [coordinates, setCoordinates] = useState([])
  const [fruitType, setFruitType] = useState('')
  const [quantity, setQuantity] = useState(0)
  const [ownerType, setOwnerType] = useState(null)
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const [comment, setComment] = useState('')

  

  const handleChange = (e) => setOwnerType(e.target.firstChild.data)

  // const CoordinateLatLong = (e) => {
  //   const coordinates = []
    
  //   coordinates.push(parseFloat(e.target.value))
  
  //   setCoordinates(coordinates)
  // }

  const handleOnSubmit = e => {
    e.preventDefault()

    const assetObj = {
      type: "Tree",
      variety: fruitType,
      numberOfTrees: quantity,
      address1: address1,
      address2: address2,
      geometry: {
        coordinates: [longitude, latitude]
      },
      comment: comment
    }

    props.treePost(assetObj)
    // this sends user to home after POST is complete! We can change the path of course.
    props.history.push('/opportunities')
    
    // no longer need this code because we are doing our POST request via redux!
    // fetch("http://localhost:4000/assets", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(assetObj)
    // })
    // .then(r => r.json())
    // .then(console.log)
    // .then(()=> { 
    //   setAddress1('')
    //   setAddress2('')
    //   setFruitType('')
    //   setQuantity(0)
    //   setOwnerType(null)
    //   setLatitude(0)
    //   setLongitude(0)
    //   setComment('')
    // })
  }

  return (
    <div id="form">
      <Header as="h2" textAlign="center">LET US KNOW ABOUT A TREE</Header>

      <Form onSubmit={handleOnSubmit}>
        <Form.Input
          label="Address 1"
          name="address2"
          type="text"
          placeholder="House Name/Number and Street Name"
          onChange={e => setAddress1(e.target.value)}
        />

        <Form.Input
          label="Address 2"
          name="address2"
          type="text"
          placeholder="Town/City, Postcode and Country"
          onChange={e => setAddress2(e.target.value)}
        />

        <Form.Input
          label="Latitude"
          name="latitude"
          type="text"
          placeholder="Please Enter Latitude --Test"
          onChange={e => setLatitude(parseFloat(e.target.value))}
        />

        <Form.Input
          label="Longitude"
          name="longitude"
          type="text"
          placeholder="Please Enter Longitude --Test"
          onChange={e => setLongitude(parseFloat(e.target.value))}
        />

        <Form.Select
          label="Fruit Type"
          placeholder="Select Fruit Type"
          name="fruit-type"
          fluid
          selection
          options={fruitTypes}
          onChange={e => setFruitType(e.target.firstChild.innerHTML)}
        />
        {/* <Form.Select
                label="Variety"
                placeholder="Select Fruit Variety"
                name="variety"
                fluidselection
                options={fruitVarieties}
                onChange={e => setFruitVariety(e.target.value)}
            /> */}
        <Form.Input
          label="Quantity of Trees"
          type="number"
          name="quantity"
          placeholder=">= 1"
          min="1"
          width="4"
          onChange={e => setQuantity(e.target.value)}
        />

        <Form.Group grouped>
          <label>Owner Type</label>
          <Form.Field
            control={Radio}
            label="Council Land"
            value="Council Land"
            checked={ownerType === 'Council Land'}
            name="owner-type"
            onChange={handleChange}
          />
          <Form.Field
            control={Radio}
            label="Private Property"
            value="Private Property"
            checked={ownerType === 'Private Property'}
            name="owner-type"
            onChange={handleChange}
          />
          <Form.Field
            control={Radio}
            label="Not Sure"
            value="Not Sure"
            checked={ownerType === 'Not Sure'}
            name="owner-type"
            onChange={handleChange}
          />
          <Form.Field
            control={Radio}
            inline
            label="Other"
            value="Other"
            checked={ownerType === 'Other'}
            name="owner-type"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Checkbox
          label="I am the owner"
        />

        <Form.TextArea
          label="Any additional comments or questions?"
          name="comment"
          placeholder="Tell us more here"
          onChange={e => setComment(e.target.value)}
        />

        <Form.Button type="submit" color="blue" >SIGN UP YOUR TREE</Form.Button>
      </Form>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    treePost: (treeObj) => dispatch(addATree(treeObj))
  }
}

export default withRouter(connect(null, mapDispatchToProps)(TreeForm))