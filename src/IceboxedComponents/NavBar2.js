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

return (
  <Menu 
      attached="bottom"  // seems like we can also use "attached" if we add a second header piece
      // inverted={true} 
      size="small" 
      color="green" // need to figure out how to add primary color #7FA11C
      stackable
      // widths="7"
      secondary
      >

      <Menu.Item>
          <Icon 
              name="bars" 
              size="big"
              link={true}
              // onClick={}
          />
      </Menu.Item>

      <Menu.Item 
          as={NavLink} 
          to={"/home"}
          name="sweetPickings"
          content="🍎" // SHOULD HAVE ONE ITEM LINKING TO HOME
          fontSize="24px"
      ></Menu.Item> 

      <Menu.Item 
          
          as={NavLink} 
          to={`${url}/story`}
          name="story"
          content="STORY"
          fontSize="24px"
          >
      </Menu.Item>

      <Menu.Item 
          
          as={NavLink} 
          to={`${url}/pickers`}
          name="pickers"
          content="PICKERS"
          fontSize="24px"
          >
      </Menu.Item>

      <Menu.Item 
          
          as={NavLink} 
          to={`${url}/growers`}
          name="growers"
          content="GROWERS"
          fontSize="24px"
      >
      </Menu.Item>

      {/* <Menu.Item 
          borderless={true}
          as={NavLink} 
          to={"/recipients"}
          name="recipients"
          content="Recipients"
          fontSize="24px"
      > */}
      
          <Dropdown item text='RECIPIENTS'>
          <Dropdown.Menu>
              {/* <Dropdown.Header>Options</Dropdown.Header> */} 
              <Dropdown.Item as={NavLink} to={'/recipients'}>Request Information</Dropdown.Item>
              <Dropdown.Item as={NavLink} to={'/signup'} text="Sign Up"></Dropdown.Item>
              <Dropdown.Item as={NavLink} to={'/donate'} text="Donate"></Dropdown.Item>
          </Dropdown.Menu>
          </Dropdown>
      {/* </Menu.Item> */}

      <Menu.Item 
          as={NavLink} 
          to={"/gallery"}
          name="gallery"
          content="GALLERY"
          fontSize="24px"
      >
      </Menu.Item>
      
      {/* <Menu.Menu position='right'> */}
          {/* <Menu.Item 
              borderless={true}
              as={NavLink} 
              to={"/login"} // need routes for login/signup pages
              name="login"
              content="Log In"
              fontSize="24px"
              >
              </Menu.Item>
              
              <Menu.Item 
              borderless
              as={NavLink} 
              to={"/signup"} // need routes for login/signup pages
              name="signup"
              content="Sign Up"
              fontSize="24px"
              >
          </Menu.Item> */}

          <Menu.Item position='right'>
              <Search icon='search' 
                  placeholder="search"
                  // value={this.state.search} 
                  // results={this.matchingNames(this.state.search)} 
                  // onSearchChange={this.handleSearch}
                  // onResultSelect={this.handleClick}
                  // style={{fontSize: "14px"}}
              />
          </Menu.Item>

      {/* {this.props.currentUser.id ?
      <Menu.Item as={NavLink} to={this.props.currentUser && this.props.currentUser.id ? `/users/${this.props.currentUser.id}` : '/'}>
      <Item.Content >
      {this.props.currentUser.profile_picture ? 
          <Image src={this.props.currentUser.profile_picture.url} circular size="mini"/> 
          :
          null
      }
      </Item.Content>
      </Menu.Item>
      :
      null
  } */}

      {/* {this.props.currentUser.id ? 
          <Menu.Item onClick={this.logOut}>
          Log Out
          </Menu.Item>
      : null } */}
      {/* </Menu.Menu> */}
  </Menu>
)
