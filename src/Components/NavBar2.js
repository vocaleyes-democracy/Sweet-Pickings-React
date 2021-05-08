import React from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm'
import ThreeDRotation from '@material-ui/icons/ThreeDRotation'
// import { Dropdown } from 'semantic-ui-react'

// -about sweet pickings, browse opportunities, get started, let us know about a Tree, contact
// Sign Up / Log In

export default function NavBar2() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon style={{ fontSize: 35 }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
