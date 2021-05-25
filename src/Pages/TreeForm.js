import { connect } from 'react-redux'
import { React, useState } from 'react'

import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Select from '@material-ui/core/Select'
import NativeSelect from '@material-ui/core/NativeSelect'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import Checkbox from '@material-ui/core/Checkbox'

import Button from '@material-ui/core/Button';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import { addATree } from '../redux/actions'
import { withRouter } from 'react-router-dom'

import { FruitTypes } from '../database/FruitTypes'

// this should be wrapped inside a Material Container bc it will provide padding/margin

function TreeForm(props) {
  // const [coordinates, setCoordinates] = useState([])
  const [variety, setVariety] = useState('')
  const [subVariety, setSubVariety] = useState('')
  const [quantity, setQuantity] = useState(0)

  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)

  const [ownerType, setOwnerType] = useState(null)
  const [isOwner, setIsOwner] = useState(false)
  // const [comment, setComment] = useState('')

  const handleChange = (event) => {
    setIsOwner(event.target.checked)
  }

  console.log(isOwner)
  // const handleChange = (e) => setOwnerType(e.target.firstChild.data)

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

  const handleOnSubmit = (e) => {
    e.preventDefault()

    const assetObj = {
      asset: [
        {
          type: 'Tree',
          variety: variety,
          subVariety: subVariety,
          quantity: quantity,
        },
      ],
      address1: address1,
      address2: address2,
      geometry: {
        coordinates: [longitude, latitude],
      },
      ownerType: ownerType,
      isOwner: isOwner,
      // comment: comment
    }

    props.treePost(assetObj)
    // this sends user to home after POST is complete! We can change the path of course.
    props.history.push('/opportunities')
  }

  return (
    <div id="form">
      <form noValidate onSubmit={handleOnSubmit}>
        <Typography variant="h2" align="center">
          LET US KNOW ABOUT A TREE
        </Typography>

        <TextField
          label="Address 1"
          name="Address 1"
          placeholder="Street Number and Name"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={(e) => setAddress1(e.target.value)}
        ></TextField>

        <TextField
          label="Address 2"
          name="Address 2"
          placeholder="Town/City, Postcode and Country"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={(e) => setAddress2(e.target.value)}
        ></TextField>

        <TextField
          label="Latitude"
          name="latitude"
          placeholder="Please Enter Latitude --Test"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={(e) => setLatitude(parseFloat(e.target.value))}
        ></TextField>

        <TextField
          label="Longitude"
          name="longitude"
          placeholder="Please Enter Longitude --Test"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={(e) => setLongitude(parseFloat(e.target.value))}
        ></TextField>

        <TextField
          label="Fruit Type"
          name="type"
          placeholder="Please Enter Fruit Type"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={(e) => setVariety(e.target.value)}
        ></TextField>

        <TextField
          label="Sub-Type"
          name="subType"
          placeholder="Please Enter Fruit Sub-Type"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={(e) => setSubVariety(e.target.value)}
        ></TextField>

        <FormControlLabel
          control={<Checkbox checked={isOwner} onChange={handleChange} />}
          label="Add Another Tree?"
        />

        {/* we'll get select menu rendering at a later date */}
        <InputLabel htmlFor="variety">Variety</InputLabel>
        <Select native defaultValue="">
          <option aria-label="None" value="" />
        </Select>

        <TextField
          label="Quantity"
          name="quantity"
          type="number"
          InputProps={{ inputProps: { min: 0 } }}
          placeholder="Please Enter Quantity of Trees"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={(e) => setQuantity(e.target.value)}
        ></TextField>

        <FormControl component="fieldset">
          <FormLabel component="legend">Owner Type</FormLabel>
          <RadioGroup
            aria-label="owner-type"
            name="owner-type"
            value={ownerType}
            onChange={(e) => setOwnerType(e.target.value)}
          >
            <FormControlLabel
              value="Council Land"
              control={<Radio />}
              label="Council Land"
            />
            <FormControlLabel
              value="Private Property"
              control={<Radio />}
              label="Private Property"
            />
            <FormControlLabel
              value="Not Sure"
              control={<Radio />}
              label="Not Sure"
            />
            <FormControlLabel value="Other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>

        <FormControlLabel
          control={<Checkbox checked={isOwner} onChange={handleChange} />}
          label="I am the owner"
        />
        <Button 
            variant="contained"
            size="large"
            color="secondary"
            type="submit"
            endIcon={<KeyboardArrowRight/>}>
            Submit
            </Button>
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    treePost: (treeObj) => dispatch(addATree(treeObj)),
  }
}

export default withRouter(connect(null, mapDispatchToProps)(TreeForm))

{
  /* <Form.Input
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
        /> */
}
{
  /* <Form.Select
                label="Variety"
                placeholder="Select Fruit Variety"
                name="variety"
                fluidselection
                options={fruitVarieties}
                onChange={e => setFruitVariety(e.target.value)}
            /> */
}
{
  /* // <Form.Input */
}
{
  /* //   label="Quantity of Trees"
        //   type="number"
        //   name="quantity"
        //   placeholder=">= 1"
        //   min="1"
        //   width="4"
        //   onChange={e => setQuantity(e.target.value)}
        // />

        // <Form.Group grouped>
        //   <label>Owner Type</label>
        //   <Form.Field */
}
{
  /* //     control={Radio}
        //     label="Council Land"
        //     value="Council Land"
        //     checked={ownerType === 'Council Land'}
        //     name="owner-type"
        //     onChange={handleChange}
        //   />
        //   <Form.Field */
}
{
  /* //     control={Radio}
        //     label="Private Property"
        //     value="Private Property"
        //     checked={ownerType === 'Private Property'}
        //     name="owner-type"
        //     onChange={handleChange}
        //   />
        //   <Form.Field */
}
{
  /* //     control={Radio}
        //     label="Not Sure"
        //     value="Not Sure"
        //     checked={ownerType === 'Not Sure'}
        //     name="owner-type"
        //     onChange={handleChange}
        //   />
        //   <Form.Field */
}
{
  /* //     control={Radio}
        //     inline
        //     label="Other"
        //     value="Other"
        //     checked={ownerType === 'Other'}
        //     name="owner-type"
        //     onChange={handleChange}
        //   />
        // </Form.Group> */
}

{
  /* // <Form.Checkbox */
}
{
  /* //   label="I am the owner"
        // />

        // <Form.TextArea */
}
{
  /* //   label="Any additional comments or questions?"
        //   name="comment"
        //   placeholder="Tell us more here"
        //   onChange={e => setComment(e.target.value)}
        // />

        // <Form.Button type="submit" color="blue" >SIGN UP YOUR TREE</Form.Button> */
}
