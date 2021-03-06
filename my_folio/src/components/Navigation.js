import React from 'react';
import {NavLink} from 'react-router-dom';
// import {Navbar,Nav} from 'react-bootstrap';
// import {SocialIcon} from 'react-social-icons';
// import * as FaIcons from "react-icons/fa";
import '../styles/navigation.scss'
import clsx from "clsx";

function fadeOut(){
  var v = document.getElementsByClassName("transitions");
  v.className += "transitionsOut";
  
};

export default function Navigation(){

  //create state to hold positon of lines
  // use width of active link to match width of line
  // const navBarRef = useRef()

  // function getWid(){
  //   navBarRef.current.width
  // }
  

return (
  <nav>{/*ref={navBarRef} */}
    <NavLink
      className="line"
      // className={clsx("foo", someState && "bar")}
      onClick={() => {
        fadeOut();
      }}
      // className="navi"
      // activeClassName="navi nav-link active"
      to="/"
      exact
    >
      Home
    </NavLink>
    <NavLink
      className="line"
      onClick={() => {
        fadeOut();
      }}
      // className="navi"
      // activeClassName="navi nav-link active"
      to="about"
    >
      About
    </NavLink>
    <NavLink
      className="line"
      onClick={() => {
        fadeOut();
      }}
      // className="navi"
      // activeClassName="navi nav-link active"
      to="contact"
    >
      Contact
    </NavLink>
  </nav>
);

}
