import React, {PureComponent} from 'react'
import {Container, Navbar, NavbarBrand} from 'reactstrap';

import logoImgXs from '../../assets/img/logo-extra-small.png';
import logoImg from '../../assets/img/logo-small.png';

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
                        <picture>
                            <source
                                media="(min-width: 576px)"
                                srcSet={logoImg}/>
                            <img src={logoImgXs}/>
                        </picture>


                    </NavbarBrand>
                    <NavbarBrand href="/">Toy Truck</NavbarBrand>
                    {/*<ShoppingCardIcon />
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
                                    About us
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>*/}
                </Container>
            </Navbar>
        )
    }
}

export default Navigation
