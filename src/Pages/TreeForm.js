import { connect } from 'react-redux'
import { React, useState } from 'react'

import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Select from '@material-ui/core/Select'
import NativeSelect from '@material-ui/core/NativeSelect'

import { addATree } from '../redux/actions'
import { withRouter } from 'react-router-dom'

import { FruitTypes } from '../database/FruitTypes'

// this should be wrapped inside a Material Container bc it will provide padding/margin

function TreeForm(props) {
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')
  // const [coordinates, setCoordinates] = useState([])
  const [variety, setVariety] = useState('')
  const [subVariety, setSubVariety] = useState('')
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

  // "assets": [
  //   {
  //     "id": 1,
  //     "asset": [
  //       {
  //         "type": "Tree",
  //         "variety": "Apple", 
  //         "subVariety": "Bramley",
  //         "numberOfTrees": 1
  //       },
  //       {
  //         "type": "Tree",
  //         "variety": "Cherry", 
  //         "subVariety": "Bing",
  //         "numberOfTrees": 7
  //       }
  //     ],
  //     "address1": "17 Glan yr Afon Gardens",
  //     "address2": "Sketty, Swansea SA2 9HX, UK",
  //     "geometry": {
  //       "type": "Point",
  //       "coordinates": [
  //         -3.9942229729238115,
  //         51.61902699211486
  //       ]
  //     }
  //   },

  const handleOnSubmit = e => {
    e.preventDefault()

    const assetObj = {
      asset: [
        {
          type: "Tree",
          variety: variety,
          subVariety: subVariety,
          numberOfTrees: quantity
        }],
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
  }

  return (
    <div id="form">
      <Typography variant="h2" align="center">LET US KNOW ABOUT A TREE</Typography>

        <TextField 
          label="Address 1" 
          name="Address 1" 
          placeholder="Street Number and Name"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={e => setAddress1(e.target.value)}
        ></TextField>
      
        <TextField 
          label="Address 2" 
          name="Address 2" 
          placeholder="Town/City, Postcode and Country"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={e => setAddress2(e.target.value)}
        ></TextField>
        
        <TextField 
          label="Latitude" 
          name="latitude"
          placeholder="Please Enter Latitude --Test"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={e => setLatitude(parseFloat(e.target.value))}
        ></TextField>
        
        <TextField 
          label="Longitude" 
          name="longitude"
          placeholder="Please Enter Longitude --Test"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={e => setLongitude(parseFloat(e.target.value))}
        ></TextField>

        <InputLabel htmlFor="variety">Variety</InputLabel>
        <Select
          native 
          defaultValue=""
        >
          <option aria-label="None" value="" />
          
        </Select>

    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    treePost: (treeObj) => dispatch(addATree(treeObj))
  }
}

export default withRouter(connect(null, mapDispatchToProps)(TreeForm))

{/* <Form.Input
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
          options={FruitTypes}
          onChange={e => setFruitType(e.target.firstChild.innerHTML)}
        /> */}
        {/* <Form.Select
                label="Variety"
                placeholder="Select Fruit Variety"
                name="variety"
                fluidselection
                options={fruitVarieties}
                onChange={e => setFruitVariety(e.target.value)}
            /> */}
        {/* // <Form.Input */}
        {/* //   label="Quantity of Trees"
        //   type="number"
        //   name="quantity"
        //   placeholder=">= 1"
        //   min="1"
        //   width="4"
        //   onChange={e => setQuantity(e.target.value)}
        // />

        // <Form.Group grouped>
        //   <label>Owner Type</label>
        //   <Form.Field */}
        {/* //     control={Radio}
        //     label="Council Land"
        //     value="Council Land"
        //     checked={ownerType === 'Council Land'}
        //     name="owner-type"
        //     onChange={handleChange}
        //   />
        //   <Form.Field */}
        {/* //     control={Radio}
        //     label="Private Property"
        //     value="Private Property"
        //     checked={ownerType === 'Private Property'}
        //     name="owner-type"
        //     onChange={handleChange}
        //   />
        //   <Form.Field */}
        {/* //     control={Radio}
        //     label="Not Sure"
        //     value="Not Sure"
        //     checked={ownerType === 'Not Sure'}
        //     name="owner-type"
        //     onChange={handleChange}
        //   />
        //   <Form.Field */}
        {/* //     control={Radio}
        //     inline
        //     label="Other"
        //     value="Other"
        //     checked={ownerType === 'Other'}
        //     name="owner-type"
        //     onChange={handleChange}
        //   />
        // </Form.Group> */}

        {/* // <Form.Checkbox */}
        {/* //   label="I am the owner"
        // />

        // <Form.TextArea */}
        {/* //   label="Any additional comments or questions?"
        //   name="comment"
        //   placeholder="Tell us more here"
        //   onChange={e => setComment(e.target.value)}
        // />

        // <Form.Button type="submit" color="blue" >SIGN UP YOUR TREE</Form.Button> */}