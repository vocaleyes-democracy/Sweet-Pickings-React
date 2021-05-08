// Navbar
// -about sweet pickings, browse opportunties, get started, let us know about a Tree, contact
// Sign Up / Log In

import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import { fade, makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import Link from '@material-ui/core/Link'
import Home from '@material-ui/icons/Home';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    padding: theme.spacing(2)
    // flexGrow: 1,
    // display: 'none',
    // [theme.breakpoints.up('sm')]: {
    //   display: 'block',
    // },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const classes = useStyles()

  //   const handleChange = (event) => {
  //     setAuth(event.target.checked);
  //   };

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
            // MenuListProps={{ something: 'something' }}
          >
            <MenuItem
              onClick={handleClose}
              // as={NavLink}
              // to="/about"
            >
              <Link 
              href="/about" 
              underline="none"
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
              >
                Browse Opportunities
              </Link>
            </MenuItem>

            <MenuItem 
            onClick={handleClose}
            >
              <Link 
              href="/tree-form" 
              underline="none"
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
              >
                Contact Us
              </Link>
            </MenuItem>
          </Menu>

          {/* <Home 
          color='secondary' 
          href="/home"
          /> */}

          <Link href="/home" underline="none" className={classes.root}>
            🍎
          </Link>
            
          <Link
            href="/signup"
            underline="none"
            variant="h6"
            color='inherit'
            className={classes.title} 
          >
            Login
          </Link>

          <Link
            href="/signup"
            underline="none"
            variant="h6"
            color='inherit'
          >
            Sign Up
          </Link>

          {/* <Typography className={classes.title} variant="h6" noWrap>
            Sweet Pickings
          </Typography>
          <Typography className={classes.title} variant="h6" noWrap>
            About Sweet Pickings
          </Typography>
          <Typography className={classes.title} variant="h6" noWrap>
            Browse Opportunities
          </Typography>
          <Typography className={classes.title} variant="h6" noWrap>
            Get Started
          </Typography>
          <Typography className={classes.title} variant="h6" noWrap>
            Let us know about a Tree!
          </Typography>
          <Typography className={classes.title} variant="h6" noWrap>
            Contact
          </Typography> */}
          {/* <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div> */}
          {/* <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            /> */}
          {/* </div> */}
        </Toolbar>
      </AppBar>
    </div>
  )
}
