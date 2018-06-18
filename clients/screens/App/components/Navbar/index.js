import React, { Fragment } from 'react';

const NavbarExpander = () => {

}

const Navbar = () => {
  return <ul>
    <li><a href="default.asp" >Home</a></li>
    <li><a href="news.asp" >News</a></li>
    <li><a href="contact.asp" >Contact</a></li>
    <li><a href="about.asp" >About</a></li>
  </ul>;
};

Navbar.defaultProps = {

}
export default Navbar;