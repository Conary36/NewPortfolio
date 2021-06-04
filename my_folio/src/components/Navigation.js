import React from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';
// import {SocialIcon} from 'react-social-icons';
// import * as FaIcons from "react-icons/fa";
import '../styles/navigation.scss'





export default function Navigation(){


return (
  <Navbar className="sidebar-left">
    <Nav id="nav" className="vertical-text-left">
      <NavLink
        className="navi"
        activeClassName="navi nav-link active"
        to="contact"
      >
        Contact
      </NavLink>
      <NavLink
        className="navi"
        activeClassName="navi nav-link active"
        to="about"
      >
        About
      </NavLink>

      <NavLink
        className="navi"
        activeClassName="navi nav-link active"
        to="/"
        exact
      >
        Home
      </NavLink>
    </Nav>
  </Navbar>
);

}
