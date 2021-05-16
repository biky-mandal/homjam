import React from 'react';
import './style.css';
import {Navbar, Nav, NavLink} from 'react-bootstrap';
import { FiShoppingBag} from 'react-icons/fi';
import logo from '../../images/homejam_logo.png';

/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <div className="header">
        <Navbar className="navbar-bg" collapseOnSelect expand="md" variant="dark">
            <Navbar.Brand href="/" className="navlogo"><img src={logo} alt="logo"/></Navbar.Brand>
            <Navbar.Toggle className="custom-toggler" aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <li className="nav-item">
                        <NavLink to="" className="nav-link link2 navtags" >Help</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="" className="nav-link link2 navtags" >Account</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="" className="nav-link link2 navtags" >Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="" className="nav-link link2 navtags" ><FiShoppingBag/></NavLink>
                    </li>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
   )

 }

export default Header