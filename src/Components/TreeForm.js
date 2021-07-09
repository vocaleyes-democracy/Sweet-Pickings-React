import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import Checkbox from '@material-ui/core/Checkbox'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'

const useStyles = makeStyles((theme) => ({
  half: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'left',
    padding: theme.spacing(3),
    width: '45vw',
  },btn: {
    fontSize: 20,
    marginTop: '5%',
    maxWidth: 260,
    '&:hover': {
      backgroundColor: '#868d23',
    },
  },


}))

function TreeForm({handleChange, handleOnSubmit, setAddress1, setAddress2, setVariety, setSubVariety, setQuantity, setUrl, ownerType, setOwnerType, isOwner}) {
  const classes = useStyles()

  const [addAsset, setAddAsset] = useState(false)

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
    <div>
      <form className={classes.half} noValidate onSubmit={handleOnSubmit}>
        

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
    </div>
  );
}

export default TreeForm;


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