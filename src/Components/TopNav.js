import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles((theme) => ({

    root: {
        display: 'flex',
        marginRight: 30
    },
    pushIcons: {
        flexGrow: 1,
        marginLeft: 30
    },
    iconStyles: {
        color: '#000',
        marginRight: 7

    },
    headerText: {
        color: '#000'
    },
        customizeToolbar: {
        minHeight: 15
        }
}));

export default function TopNav(){
    const classes = useStyles()

    return (
        <div>
        <AppBar 
            position="static"
            color="primary"
        >
            <Toolbar className={classes.customizeToolbar}>
                <Typography variant="h6" className={`${classes.headerText} ${classes.root}`}>
                    Grow for us, pick with us
                </Typography>
                
                <Link href="#">
                <Icon className={`${classes.padding} ${classes.headerText} ${classes.iconStyles} fas fa-map-marker-alt`}/>
                </Link>
                <Typography 
                    className={`${classes.padding} ${classes.headerText}`}
                >
                    United Kingdom, TXB273KE8
                </Typography>
                
                <Typography 
                    className={`${classes.pushIcons} ${classes.headerText}`}
                >
                    help@sweetpickings.com
                </Typography>

                <Link href="#">
                <Icon className={`${classes.iconStyles} fab fa-facebook`}/>
                </Link>

                <Link href="#">
                <Icon className={`${classes.iconStyles} fab fa-twitter`}/>
                </Link>

                <Link href="#">
                <Icon className={`${classes.iconStyles} fab fa-youtube`}/>
                </Link>

                <Link href="#">
                <Icon className={`${classes.iconStyles} fab fa-linkedin-in`} />
                </Link>
            </Toolbar>
        </AppBar>
        </div>
    )
}