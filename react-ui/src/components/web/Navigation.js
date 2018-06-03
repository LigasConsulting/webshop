import React, {PureComponent} from 'react'
import {Link} from "react-router-dom";
import {Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap';

import logoImg from '../../assets/img/logo-small.png';
import ShoppingCardIcon from "../shop/ShoppingCardIcon";

class Navigation extends PureComponent {

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <Navbar dark={true} expand={'lg'} fixed={'top'} className="navbar-custom">
                <Container>
                    <NavbarBrand href="/"><img src={logoImg} /></NavbarBrand>
                    <NavbarBrand href="/">My shop</NavbarBrand>
                    <ShoppingCardIcon />
                    <NavbarToggler onClick={this.toggleNavbar}/>
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav navbar className={'ml-auto'}>
                            <NavItem>
                                <NavLink tag={Link} to="/shop">
                                    Shop
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/about">
                                    About
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default Navigation
