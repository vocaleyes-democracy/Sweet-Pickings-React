import React from 'react'
// import SideBar from './SideBar'
import { NavLink } from 'react-router-dom'
import { Menu, Search, Item, Icon } from 'semantic-ui-react'

export default function TopNav(){
    return (
            <Menu
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
            </Menu>
    )
}