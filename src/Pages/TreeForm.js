import { connect } from 'react-redux'
import { React, useState } from 'react'
import Map2 from '../Components/Map2'

import { makeStyles } from '@material-ui/core'
// import Container from '@material-ui/core/Container'
import FormControl from '@material-ui/core/FormControl'
// import Input from '@material-ui/core/Input'
// import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
// import Select from '@material-ui/core/Select'
// import NativeSelect from '@material-ui/core/NativeSelect'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'

import { addATree } from '../redux/actions'
import { withRouter } from 'react-router-dom'
// import { FruitTypes } from '../database/FruitTypes'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'left',
    padding: theme.spacing(3),
    width: '50vw'
  },
  instructions: {
    width: '40vw'
  },
  btn: {
    fontSize: 20,
    marginTop: '5%',
    maxWidth: 260,
    '&:hover': {
      backgroundColor: '#868d23',
    },
  },
}))

// still need to improve styling of map component

function TreeForm(props) {

  const classes = useStyles()

  const [formCoords, setFormCoords] = useState([0,0])
  
  const [variety, setVariety] = useState('')
  const [subVariety, setSubVariety] = useState('')
  const [quantity, setQuantity] = useState(0)
  const [addAsset, setAddAsset] = useState(false)
  const [url, setUrl] = useState('')

  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')
  // const [latitude, setLatitude] = useState(0)
  // const [longitude, setLongitude] = useState(0)

  const [ownerType, setOwnerType] = useState(null)
  const [isOwner, setIsOwner] = useState(false)
  // const [comment, setComment] = useState('')

  const [clicked, setClicked] = useState(false)

  const handleChange = (event) => {
    setIsOwner(event.target.checked)
  }



  const handleOnSubmit = (e) => {
    e.preventDefault()

    const assetObj = {
      asset: [
        {
          type: 'Tree',
          variety: variety,
          subVariety: subVariety,
          quantity: quantity,
          url: url
        },
      ],
      address1: address1,
      address2: address2,
      geometry: {
        coordinates: formCoords,
      },
      ownerType: ownerType,
      isOwner: isOwner,
      // comment: comment
    }

    props.treePost(assetObj)
    // this sends user to opportunities after POST is complete! We can change the path of course.
    props.history.push('/opportunities')
  }

  const additionalFruit = (
    <>
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
    </>
  )

  return (
    <div >
      <Typography variant="h2" align="center">
          LET US KNOW ABOUT A TREE
        </Typography>
        <div className={'form-tree-container'}>
      <form className={classes.root} noValidate onSubmit={handleOnSubmit}>
        

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

        {/* <TextField
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
        ></TextField> */}

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

        <TextField
          label="Picture"
          name="url"
          placeholder="Please Enter URL Image of Fruit If You Have One"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={(e) => setUrl(e.target.value)}
        ></TextField>

        <FormControlLabel
          control={
            <Checkbox
              checked={addAsset}
              onChange={() => setAddAsset(!addAsset)}
            />
          }
          label="Add Another Fruit Type?"
        />

        {addAsset ? additionalFruit : null}

        {/* we'll get select menu rendering at a later date */}
        {/* <InputLabel htmlFor="variety">Variety</InputLabel>
        <Select native defaultValue="">
          <option aria-label="None" value="" />
        </Select> */}

        <Divider variant="fullWidth" />

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
          className={classes.btn}
          variant="contained"
          size="large"
          color="secondary"
          type="submit"
          endIcon={<KeyboardArrowRight />}
        >
          Submit
        </Button>
      </form>
      <div> 
<h2 className={classes.instructions}>{!clicked ? 'Please select an area on the map below that corresponds with the address you have entered in the form:' : 'Thank you for selecting a map location. You can "click" as many times as you need to get the most accurate location.'}</h2>
      <Map2 formCoords={formCoords} setFormCoords={setFormCoords} clicked={clicked} setClicked={setClicked}/>
      </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    treePost: (treeObj) => dispatch(addATree(treeObj)),
  }
}

export default withRouter(connect(null, mapDispatchToProps)(TreeForm))


  /* <Form.Select
          label="Fruit Type"
          placeholder="Select Fruit Type"
          name="fruit-type"
          fluid
          selection
          options={FruitTypes}
          onChange={e => setFruitType(e.target.firstChild.innerHTML)}
        /> */

  /* <Form.Select
                label="Variety"
                placeholder="Select Fruit Variety"
                name="variety"
                fluidselection
                options={fruitVarieties}
                onChange={e => setFruitVariety(e.target.value)}
            /> */

