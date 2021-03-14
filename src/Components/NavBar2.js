import React from 'react'
// import SideBar from './SideBar'
import { NavLink } from 'react-router-dom'
import { Menu, Search, Item, Icon } from 'semantic-ui-react'


export default function NavBar2(){
    return (
            <Menu fixed="top" inverted={true} size="mini" color="7FA11C">

                <Menu.Item>
                    <Icon 
                        name="bars" 
                        size="big"
                        link={true}
                        // onClick={}
                    />
                </Menu.Item>

                <Menu.Item as={NavLink} to={"/"}
                    name="Sweet Pickings"
                >
                    {/* <Item.Content >
                            <img src="/images/goodfriendwhitetransparent.png"  style={{width: "56px"}}alt="goodfriend logo" /> 
                    </Item.Content> */}
                </Menu.Item>


                <Menu.Menu position='right'>
                <Menu.Item>
                    <Search icon='search' 
                        placeholder="search"
                        // value={this.state.search} 
                        // results={this.matchingNames(this.state.search)} 
                        // onSearchChange={this.handleSearch}
                        // onResultSelect={this.handleClick}
                        style={{fontSize: "14px"}}
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
                </Menu.Menu>
            </Menu>
    )
}

