import React from 'react'
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({

}));

export default function TopNav(){
    return (
        <div>
        <AppBar 
            position="static"
            color="primary"
        >
            <Toolbar>
                <Typography variant="h6">
                    Grow for us, pick with us
                </Typography>
                <Typography>
                    United Kingdom, TXB273KE8
                </Typography>
                
                <Typography>
                    help@sweetpickings.com
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}

{/* <Menu
    // fixed="top"  // seems like we can also use "attached" if we add a second header piece
    attached="top"
    inverted 
    size="tiny" 
    color="olive" // need to figure out how to add primary color #7FA11C
    stackable
    borderless
    secondary
    // widths="1"
    // text
    // compact
    position="left"
>
    <Menu.Item>
        <h4 >Grow for us, pick with us</h4>
    </Menu.Item>

    <Menu.Item>
        <p> United Kingdom, TXB273KE8</p>
    </Menu.Item>

    <Menu.Item>
        <p>help@sweetpickings.com</p>
    </Menu.Item>
</Menu> */}