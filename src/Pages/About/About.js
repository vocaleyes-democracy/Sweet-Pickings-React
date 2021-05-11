import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Story from './Story.js'
import Pickers from './Pickers.js'
import Growers from './Growers.js'
import Recipients from './Recipients.js'

export default function About() {

    const useStyles = makeStyles((theme) => ({
        root: {
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
        },
        subPage: {
            height: 150,
            width: 200,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: 30,
            backgroundColor: "#C4C4C4",
        },
        title: {
          margin: theme.spacing(10),
          fontWeight: 'bold'
        },
        active: {
          backgroundColor: 'secondary'
        }
        // subCategory: {
        //     '&:hover': {
        //         color: '#6B0F1A',
        //     }
        // }
    }))

    const classes = useStyles()

    const [renderStory, setRenderStory] = useState(false)
    const [renderPickers, setRenderPickers] = useState(false)
    const [renderGrowers, setRenderGrowers] = useState(false)
    const [renderRecipients, setRenderRecipients] = useState(false)

    function subCategoriesFalse(event) {
      setRenderStory(false)
      setRenderPickers(false)
      setRenderGrowers(false)
      setRenderRecipients(false)

      // toggling bg color isn't yet working
      event.target.classList.add(`${classes.active}`)
    }

    const handleOnClick = (event) => {
      if(event.target.matches('.story')){
        subCategoriesFalse(event)
        
        setRenderStory(true)
      } else if (event.target.matches('.pickers')) {
        subCategoriesFalse(event)
        
        setRenderPickers(true)
      } else if (event.target.matches('.growers')) {
        subCategoriesFalse(event)
        
        setRenderGrowers(true)
      } else if (event.target.matches('.recipients')) {
        subCategoriesFalse(event)

        setRenderRecipients(true)
      }
    }
    
    return (

        <Container className={classes.root}>
          <div className={'about-image'}>
          <Typography variant="h2"  color={'secondary'} className={classes.title}>
            ABOUT US
          </Typography>
          </div>
            <div className={`${classes.subPage} story`} onClick={handleOnClick}>
                {/* <Link 
                    href="/story" 
                    underline="none"
                > */}
                    <Typography
                        variant="h4"
                        color='primary'
                        // className={classes.subCategory}
                    >
                        Story
                    </Typography>
                {/* </Link>  */}
            </div>
            
            <div className={`${classes.subPage} pickers`}  onClick={handleOnClick}>
                {/* <Link href="/pickers" underline="none"> */}
                    <Typography
                        variant="h4"
                        color='primary'
                        // className={classes.subCategory}
                    >
                        Pickers
                    </Typography>
                {/* </Link>  */}
            </div>
            
            <div className={`${classes.subPage} growers`} onClick={handleOnClick}>
                {/* <Link href="/growers" underline="none"> */}
                    <Typography
                        variant="h4"
                        color='primary'
                        // className={classes.subCategory}
                    >
                        Growers
                    </Typography>
                {/* </Link>  */}
            </div>

            <div className={`${classes.subPage} recipients`} onClick={handleOnClick}>
                {/* <Link href="/recipients" underline="none"> */}
                    <Typography
                        variant="h4"
                        color='primary'
                        // className={classes.subCategory}
                    >
                        Recipients
                    </Typography>
                {/* </Link> */}
            </div>

            <div >
              { renderStory? <Story /> : null}
              { renderPickers? <Pickers /> : null}
              { renderGrowers? <Growers /> : null}
              { renderRecipients? <Recipients /> : null}
            </div>
        </Container>
    )
}
