import React from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom'
import { Menu, Search, Dropdown, Icon } from 'semantic-ui-react'

// -about sweet pickings, browse opportunities, get started, let us know about a Tree, contact
// Sign Up / Log In

export default function NavBar2(){

    return (
        // Bars icon needs to be bigger
        <Dropdown
            icon="bars"
        >
            <Dropdown.Menu>
                <Dropdown.Item text="ABOUT" as={NavLink} to="/about" />
                <Dropdown.Item text="BROWSE OPPORTUNITIES" as={NavLink} to="/opportunities" />
                <Dropdown.Item text="LET US KNOW ABOUT A TREE" as={NavLink} to="/tree-form" />
                <Dropdown.Item text="CONTACT" as={NavLink} to="/contact" />
            </Dropdown.Menu>
        </Dropdown>
    )
}