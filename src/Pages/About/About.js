import React from 'react';
import { NavLink } from 'react-router-dom'

export default function About() {

    return (
        <div>
            <h1>About Page</h1>
            <NavLink to="/story">Story</NavLink> / 
            <NavLink to="/pickers">Pickers</NavLink> / 
            <NavLink to="/growers">Growers</NavLink> / 
            <NavLink to="/recipients">Recipients</NavLink>
        </div>
    )
}
