import React, {PureComponent} from 'react'
import {Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap';
import ShoppingCardIcon from "../shop/ShoppingCardIcon";
import {Link} from "react-router-dom";
import Icon from "../common/Icon";

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
                    <NavbarBrand href="/">
                        <Icon className={'nav-logo'} name={'logo'} height={60}/>
                    </NavbarBrand>
                    <NavbarBrand href="/">Toy Truck</NavbarBrand>
                    <ShoppingCardIcon className={'d-block d-lg-none'}/>
                    <NavbarToggler onClick={this.toggleNavbar}/>
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav navbar className={'ml-auto'}>
                            <NavItem className={'d-none d-lg-block'}>
                                <ShoppingCardIcon/>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/shop">
                                    Shop
                                </NavLink>
                            </NavItem>
                            {/*<NavItem>*/}
                                {/*<NavLink tag={Link} to="/about">*/}
                                    {/*About us*/}
                                {/*</NavLink>*/}
                            {/*</NavItem>*/}
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default Navigation
