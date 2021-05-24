import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Story from './Story.js'
import Pickers from './Pickers.js'
import Growers from './Growers.js'
import Recipients from './Recipients.js'


  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    subPage: {
      height: 125,
      width: 200,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20,
      backgroundColor: '#C4C4C4',
    },
    title: {
      margin: theme.spacing(10),
      fontWeight: 'bold',
    },
    active: {
      backgroundColor: 'secondary',
    },
    active: {
            backgroundColor: '#6B0F1A',
    }
  }))

  export default function About() {

  const classes = useStyles()
  const history = useHistory()

  const [renderStory, setRenderStory] = useState(false)
  const [renderPickers, setRenderPickers] = useState(false)
  const [renderGrowers, setRenderGrowers] = useState(false)
  const [renderRecipients, setRenderRecipients] = useState(false)

  function subCategoriesFalse() {
    setRenderStory(false)
    setRenderPickers(false)
    setRenderGrowers(false)
    setRenderRecipients(false)
  }

  const handleOnClick = (event) => {
      subCategoriesFalse()
    if (event.target.matches('.story')) {
      setRenderStory(true)
    } else if (event.target.matches('.pickers')) {
      setRenderPickers(true)
    } else if (event.target.matches('.growers')) {
      setRenderGrowers(true)
    } else if (event.target.matches('.recipients')) {
      setRenderRecipients(true)
    }
  }



  const categories = [
    {
      id: 1,
      name: 'Story',
      class: 'story',
      path: '/story',
      state: renderStory
    },
    {
      id: 2,
      name: 'Pickers',
      class: 'pickers',
      path: '/pickers',
      state: renderPickers
    },
    {
      id: 3,
      name: 'Growers',
      class: 'growers',
      path: '/growers',
      state: renderGrowers
    },
    {
      id: 4,
      name: 'Recipients',
      class: 'recipients',
      path: '/recipients',
      state: renderRecipients
    },
  ]

  function renderCategories(){
    return categories.map(category =>  (<div key={category.id} className={`${classes.subPage} ${category.class} ${category.state ? classes.active : null }`} onClick={handleOnClick} >
    
    <Typography
      variant="h4"
      color="primary"
    >
      {category.name}
    </Typography>
    
  </div>))
  }

  return (
    <Container className={classes.root}>
      <div className={'about-image'}>
        <Typography variant="h2" color={'secondary'} className={classes.title}>
          ABOUT US
        </Typography>
      </div>
      {renderCategories()}
      {renderStory ? <Story /> : null}
      {renderPickers ? <Pickers /> : null}
      {renderGrowers ? <Growers /> : null}
      {renderRecipients ? <Recipients /> : null}
    </Container>
  )
}
