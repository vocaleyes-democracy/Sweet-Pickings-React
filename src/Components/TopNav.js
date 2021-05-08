import React from 'react'
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm'
import ThreeDRotation from '@material-ui/icons/ThreeDRotation'
import Icon from '@material-ui/core/Icon'


const useStyles = makeStyles((theme) => ({
    padding: {
        marginLeft: 30
    }, 
    root: {
        display: 'flex'
    },
    pushIcons: {
        flexGrow: 1,
        marginLeft: 30
    },
    iconContainer: {
        padding: 30,
        display: 'flex',
        flexDirection: 'row',
        color: "primary"
    }
    // facebook: {
    //     fb: "fab fa-facebook",
    //     marginRight: 5,
    //     color: "secondary"
    // },
    // twitter: {
    //     twt: "fab fa-twitter",
    //     marginRight: 5
    // },
    // youTube: {
    //     twt: "fab fa-youtube",
    //     marginRight: 5
    // },
    // linkedIn: {
    //     lkn: "fab fa-linkedin-in",
    //     marginRight: 5
    // }
}));

export default function TopNav(){
    const classes = useStyles()

    return (
        <div>
        <AppBar 
            position="static"
            color="primary"
        >
            <Toolbar>
                <Typography variant="h6" >
                    Grow for us, pick with us
                </Typography>
                <Typography 
                    className={classes.padding}
                >
                    United Kingdom, TXB273KE8
                </Typography>
                
                <Typography 
                    className={classes.pushIcons}
                >
                    help@sweetpickings.com
                </Typography>

                <Icon className={`${classes.iconContainer} fab fa-facebook`} />
                <Icon className={`${classes.iconContainer} fab fa-twitter`} />
                <Icon className={`${classes.iconContainer} fab fa-youtube`} />
                <Icon className={`${classes.iconContainer} fab fa-linkedin-in`} />
                
            </Toolbar>
        </AppBar>
        </div>
    )
}