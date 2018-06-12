import React, { Component } from 'react';
import {Navbar,Nav,NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export  default class CustNavbar extends Component {
	render() {
		return (
		<div style={{zIndex:500}}>	
		<Navbar default collapseOnSelect fixedTop style={{width:'device-width'}}>
			<Navbar.Header>
				<Navbar.Brand>
					<Link to="/">Encrypted</Link>
				</Navbar.Brand>
				<Navbar.Toggle/>
			</Navbar.Header>
			<Navbar.Collapse>
				<Nav pullright>
					<NavItem eventKey={1} componentClass={Link} href="/" to="/">
					Home
					</NavItem>
					<NavItem eventKey={2} componentClass={Link} href="/aboutus" to="/aboutus">
					About Us
					</NavItem>
					<NavItem eventKey={3} componentClass={Link} href="/services" to="/services">
					Services
					</NavItem>
					<NavItem eventKey={4} componentClass={Link} href="/whyus" to="/whyus">
					Why Us?
					</NavItem>
					<NavItem eventKey={5} componentClass={Link} href="/displaypodcasts" to="/displaypodcasts">
					Podcasts
					</NavItem>
				</Nav>
			</Navbar.Collapse>
			</Navbar>
			</div>
		);
	}
}
