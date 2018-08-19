import React, { Component } from 'react';
import { DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink } from 'reactstrap';
import { AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../assets/img/brand/logo.png';
import sygnet from '../assets/img/brand/sygnet.svg';  

class Header extends Component {
    
    render() {
        const { children, ...attributes } = this.props;
        return (
            <React.Fragment>
                <AppSidebarToggler className="d-lg-none" display="md" mobile />
                <AppNavbarBrand
                full={{ src: logo, width: 89, height: 25, alt: 'E-tilang' }}
                minimized={{ src: sygnet, width: 30, height: 30, alt: 'E-tilang' }}
              />
                <AppSidebarToggler className="d-md-down-none" display="lg" />

                <Nav className="d-md-down-none" navbar>
                    <NavItem className="px-3">
                        <NavLink href="/dashboard">Dashboard</NavLink>
                    </NavItem>
                    <NavItem className="px-3">
                        <NavLink href="/users">Users</NavLink>
                    </NavItem>
                </Nav>
                <Nav className="ml-auto" navbar>
                    <AppHeaderDropdown direction="down">
                        <DropdownToggle nav>
                            <img src={'../assets/img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                        </DropdownToggle>
                        <DropdownMenu right style={{ right: 'auto' }}>
                            <DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>
                            <DropdownItem><i className="fa fa-lock" href="/"></i> Logout</DropdownItem>
                        </DropdownMenu>
                    </AppHeaderDropdown>
                </Nav>
            </React.Fragment>
          );
    }
}

export default Header;