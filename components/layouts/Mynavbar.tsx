import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {BsFillTelephoneFill,BsTwitter} from 'react-icons/Bs';
import {FaFacebookF} from 'react-icons/Fa'
import {MdEmail} from 'react-icons/Md'
import Link from 'next/link'
import Image from 'next/image'




export default function Mynavbar() {
    return (
    <div>
        <Navbar variant="dark"    expand="lg" className=" navbar fixed-top navbg">
        <Container >
        <Link className="navbar-brand" href="/">
        <Image
        src="/images/editflight-icon.png"
        alt="Picture of the hero"
        width={60}
        height={60}
        />
            </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
            >
                <Link className="nav-link active"  href="/">Home</Link>
                <Link className="nav-link  text-light"  href="/flights">Flights</Link>
                <Link className="nav-link  text-light "  href="/hotels">Hotels</Link>
                <Link className="nav-link  text-light "  href="/rides">Rides</Link>
                <Link className="nav-link  text-light "  href="/blog">Blog</Link>
                </Nav>
        <div> 
        <Row>
        <Col md >
        <Link href="/manage-booking" className=" btn btn-success  " >Manage My Booking</Link>
        </Col>
        <Col>
        <DropdownButton  variant="success" size="lg" 
                id="dropdown-item-button" title="Support "
                align={{ md: 'end' }}
                className="mt-2">
            <Dropdown.Item as="button">
            <Link  className="dropdown-item" href="/"><BsFillTelephoneFill/>+123456789</Link>
                </Dropdown.Item>
            <Dropdown.Item as="button">
            <Link  className="dropdown-item" href="/"><FaFacebookF /> Facebook</Link>
                </Dropdown.Item>
            <Dropdown.Item as="button">
            <Link  className="dropdown-item" href="/"><BsTwitter/>  Twitter</Link>
                </Dropdown.Item>
        <Dropdown.Item as="button">
            <Link  className="dropdown-item" href="/"><MdEmail/> Email</Link>
                </Dropdown.Item>
            </DropdownButton>
        </Col>
        </Row>
        </div>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    </div>
    )
}
