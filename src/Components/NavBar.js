// Navbar
// -about sweet pickings, browse opportunties, get started, let us know about a Tree, contact
// Sign Up / Log In

import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import { fade, makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import Link from '@material-ui/core/Link'
import Home from '@material-ui/icons/Home';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  burger: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  menuItem: {
    '&:hover': {
      color: '#6B0F1A',
    }
  },
  title: {
    marginLeft: theme.spacing(3),
    '&:hover': {
      color: fade('#6B0F1A', 0.55),
    }
  },
  btn: {
    marginLeft: 12
  }
}))

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const classes = useStyles()

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            aria-controls="customized-menu"
            // aria-haspopup="true"
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          
          <div className={classes.burger}>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem
                onClick={handleClose}
              >
                <Link 
                  href="/about" 
                  underline="none"
                  className={classes.menuItem}
                >
                  About
                </Link>
              </MenuItem>

              <MenuItem 
                onClick={handleClose}
              >
                <Link 
                  href="/opportunities" 
                  underline="none"
                  className={classes.menuItem}
                >
                  Browse Opportunities
                </Link>
              </MenuItem>

              <MenuItem 
              onClick={handleClose}
              >
                <Link 
                href="/tree-new" 
                underline="none"
                className={classes.menuItem}
                >
                  Let Us Know About A Tree
                </Link>
              </MenuItem>

              <MenuItem 
              onClick={handleClose}
              >
                <Link 
                href="/contact" 
                underline="none"
                className={classes.menuItem}
                >
                  Contact Us
                </Link>
              </MenuItem>
            </Menu>
          </div>

          <Link href="/home" underline="none">
          <Home fontSize="large"
            color='secondary' 
          />
          </Link>

          <ButtonGroup variant="contained" size="medium" className={classes.btn}>
            <Button  href="/login" style={{backgroundColor: '#BC4749', color: 'white'}}>Log In</Button>
            <Button  href="/signup" style={{backgroundColor: '#6B0F1A', color: 'white'}}>Sign Up</Button>
          </ButtonGroup>

        </Toolbar>
      </AppBar>
    </div>
  )
}
