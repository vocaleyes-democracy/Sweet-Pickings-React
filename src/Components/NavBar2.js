import React from 'react'
// import SideBar from './SideBar'
import { NavLink } from 'react-router-dom'
import { Menu, Search, Dropdown, Icon } from 'semantic-ui-react'

// -about sweet pickings, browse opportunties, get started, let us know about a Tree, contact
// Sign Up / Log In


export default function NavBar2(){
    return (
            <Menu 
                attached="bottom"  // seems like we can also use "attached" if we add a second header piece
                // inverted={true} 
                size="small" 
                color="white" // need to figure out how to add primary color #7FA11C
                stackable
                borderless
                // widths="7"
                // secondary
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
                    borderless={true}
                    as={NavLink} 
                    to={"/"}
                    name="sweetPickings"
                    content="🍎" // SHOULD HAVE ONE ITEM LINKING TO HOME
                    fontSize="24px"
                ></Menu.Item> 

                <Menu.Item 
                    borderless={true}
                    as={NavLink} 
                    to={"/about"}
                    name="story"
                    content="STORY"
                    fontSize="24px"
                >
                </Menu.Item>

                <Menu.Item 
                    borderless={true}
                    as={NavLink} 
                    to={"/pickers"}
                    name="pickers"
                    content="PICKERS"
                    fontSize="24px"
                >
                </Menu.Item>

                <Menu.Item 
                    borderless={true}
                    as={NavLink} 
                    to={"/growers"}
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
                        {/* <Dropdown.Header>Options</Dropdown.Header> */} // 
                        <Dropdown.Item as={NavLink} to={'/recipients'}>Request Information</Dropdown.Item>
                        <Dropdown.Item>Sign Up</Dropdown.Item>
                        <Dropdown.Item>Donate</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                {/* </Menu.Item> */}

                <Menu.Item 
                    borderless={true}
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
}

