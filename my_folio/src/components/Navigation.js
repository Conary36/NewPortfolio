import React from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';
// import {SocialIcon} from 'react-social-icons';
// import * as FaIcons from "react-icons/fa";
import '../styles/navigation.scss'

function fadeOut(){
  var v = document.getElementsByClassName("transitions");
  v.className += "transitionsOut";
  
};

export default function Navigation(){


return (
  <Navbar className="sidebar-left">
    <Nav id="nav" className="vertical-text-left">
      <NavLink
        onClick={() => {
          fadeOut();
        }}
        className="navi"
        activeClassName="navi nav-link active"
        to="/"
        exact
      >
        Home
      </NavLink>
      <NavLink
        onClick={() => {
          fadeOut();
        }}
        className="navi"
        activeClassName="navi nav-link active"
        to="about"
      >
        About
      </NavLink>
      <NavLink
        onClick={() => {
          fadeOut();
        }}
        className="navi"
        activeClassName="navi nav-link active"
        to="contact"
      >
        Contact
      </NavLink>
    </Nav>
  </Navbar>
);

}
