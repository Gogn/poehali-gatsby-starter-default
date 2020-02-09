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

        <Navbar color="primary navbar navbar-dark bg-primary" expand="sm">
          <div className="container">
          <img src={logo} width="30" alt="React" className='d-inline-block align-top mr-3'/>
          <NavbarBrand className='text-white' href="/">Главная</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink className='text-white' href="/blog/">Все записи</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='text-white' href="/about/">О проекте</NavLink>
              </NavItem>
            </Nav>
            <NavbarText>ЗБТ</NavbarText>
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
