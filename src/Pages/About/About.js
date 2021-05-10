import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Story from './Story.js'

export default function About() {

    const useStyles = makeStyles({
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
        subCategory: {
            '&:hover': {
                color: '#6B0F1A',
            }
        }
    })

    const classes = useStyles()

    const handleOnClick = () => {
        return (
            <Story />
        )
    }
    
    return (

        <Container className={classes.root}>

            <div className={classes.subPage} onClick={handleOnClick}>
                {/* <Link 
                    href="/story" 
                    underline="none"
                > */}
                    <Typography
                        variant="h4"
                        className={classes.subCategory}
                    >
                        Story
                    </Typography>
                {/* </Link>  */}
            </div>
            
            <div className={classes.subPage} onClick={handleOnClick}>
                <Link href="/pickers" underline="none">
                    <Typography
                        variant="h4"
                        className={classes.subCategory}
                    >
                        Pickers
                    </Typography>
                </Link> 
            </div>
            
            <div className={classes.subPage} onClick={handleOnClick}>
                <Link href="/growers" underline="none">
                    <Typography
                        variant="h4"
                        className={classes.subCategory}
                    >
                        Growers
                    </Typography>
                </Link> 
            </div>

            <div className={classes.subPage} onClick={handleOnClick}>
                <Link href="/recipients" underline="none">
                    <Typography
                        variant="h4"
                        className={classes.subCategory}
                    >
                        Recipients
                    </Typography>
                </Link>
            </div>

            <div >
            </div>
        </Container>
    )
}
