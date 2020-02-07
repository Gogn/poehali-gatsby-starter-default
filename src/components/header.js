import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import logo from '../images/gatsby-icon.png'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const Header = ({siteTitle}) => {

  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

    return (

      // <nav className='navbar navbar-dark bg-primary navbar-expand-sm '>
      //   <div className="navbar-brand">
      //     <img src='favicon.ico' width="30" alt="React" className='d-inline-block align-top mr-3'/>
      //     <Nav.Link style={{
      //       display: "inline",
      //       color: "#fff",
      //     }} exact to="/" className='nav-link'>Todo app. Redux version.</Nav.Link>
      //   </div>
      //   <ul className='navbar-nav ml-auto  mr-3'>
      //     <div className='row'>
      //       <li className='nav-item'>
      //         <strong><Nav.Link exact to="/" className='nav-link'>Home</Nav.Link></strong>
      //       </li>
      //       <li>
      //         <strong><Nav.Link to="/todo" className='nav-link'>Todos</Nav.Link></strong>
      //       </li>
      //     </div>
      //   </ul>
      // </nav>

        <Navbar color="primary navbar navbar-dark bg-primary" expand="sm">
          <div className="container">
          <img src={logo} width="30" alt="React" className='d-inline-block align-top mr-3'/>
          <NavbarBrand className='text-white' href="/">Home</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink className='text-white' href="/page-2/">page-2</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='text-white' href="/about/">about</NavLink>
              </NavItem>
            </Nav>
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
          </div>
        </Navbar>

    )
  }

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
