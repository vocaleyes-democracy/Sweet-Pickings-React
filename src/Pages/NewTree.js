import { connect } from 'react-redux'
import { React, useState } from 'react'
import Map2 from '../Components/Map2'
import TreeForm from '../Components/TreeForm'

import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

import { addATree } from '../redux/actions'
import { withRouter } from 'react-router-dom'
// import { FruitTypes } from '../database/FruitTypes'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'no-wrap',
  },
  half: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'left',
    padding: theme.spacing(3),
    width: '45vw',
  },
  instructions: {
    height: '15vh',
    width: '30vw',
    border: '1px solid #bbb',
    borderRadius: '5px',
    padding: '10px',
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}))

// still need to tweak styling of map component and the div above it

function NewTree(props) {
  const classes = useStyles()

  const [formCoords, setFormCoords] = useState({
    lat: 51.63019953098332,
    lng: -3.9596806597695333,
  })

  const [variety, setVariety] = useState('')
  const [subVariety, setSubVariety] = useState('')
  const [quantity, setQuantity] = useState(0)
  const [url, setUrl] = useState('')
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')
  const [ownerType, setOwnerType] = useState(null)
  const [isOwner, setIsOwner] = useState(false)
  // const [comment, setComment] = useState('')

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
          url: url,
        },
      ],
      address1: address1,
      address2: address2,
      geometry: {
        coordinates: [formCoords.lng, formCoords.lat],
      },
      ownerType: ownerType,
      isOwner: isOwner,
      // comment: comment
    }

    props.treePost(assetObj)
    // this sends our user to Opportunities after POST is complete. We can change the path easily if w want.
    props.history.push('/opportunities')
  }

  return (
    <div>
      <Typography variant="h2" align="center">
        LET US KNOW ABOUT A TREE
      </Typography>
      <div className={classes.root}>
        <TreeForm
          handleOnSubmit={handleOnSubmit}
          setAddress1={setAddress1}
          setAddress2={setAddress2}
          setVariety={setVariety}
          setSubVariety={setSubVariety}
          setQuantity={setQuantity}
          setUrl={setUrl}
          handleChange={handleChange}
          ownerType={ownerType}
          setOwnerType={setOwnerType}
          isOwner={isOwner}
        />

        <div className={classes.half}>
          <Typography variant="h6" className={classes.instructions}>
            Please move the map marker to the area that most closely corresponds
            with the address you have entered in the form.
          </Typography>
          <Map2 formCoords={formCoords} setFormCoords={setFormCoords} />
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

export default withRouter(connect(null, mapDispatchToProps)(NewTree))
