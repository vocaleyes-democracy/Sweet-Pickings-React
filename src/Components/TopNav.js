import React from 'react'
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
// import AccessAlarmIcon from '@material-ui/icons/AccessAlarm'
// import ThreeDRotation from '@material-ui/icons/ThreeDRotation'
import Icon from '@material-ui/core/Icon'


const useStyles = makeStyles((theme) => ({
    padding: {
        marginLeft: 30
    }, 
    // root: {
    //     display: 'flex'
    // },
    pushIcons: {
        flexGrow: 1,
        marginLeft: 30
    },
    iconStyles: {
        color: '#000',
        marginRight: 10

    },
    headertext: {
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
                <Typography variant="h6" className={classes.headertext}>
                    Grow for us, pick with us
                </Typography>
                <Typography 
                    className={`${classes.padding} ${classes.headertext}`}
                >
                    United Kingdom, TXB273KE8
                </Typography>
                
                <Typography 
                    className={`${classes.pushIcons} ${classes.headertext}`}
                >
                    help@sweetpickings.com
                </Typography>

                <Icon className={`${classes.iconStyles} fab fa-facebook`}/>
                <Icon className={`${classes.iconStyles} fab fa-twitter`}/>
                <Icon className={`${classes.iconStyles} fab fa-youtube`}/>
                <Icon className={`${classes.iconStyles} fab fa-linkedin-in`} />
                
            </Toolbar>
        </AppBar>
        </div>
    )
}