import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'


export default function Myfooter() {
    return (
    <div className="bg-primary text-light  ">
        <Container  >
            <Row>
                <Col md={4} className="mt-5 mb-5">
                    <ul >
                        <li className="list-group-item">About us </li>
                        <Link href="/" className="nav-link  text-light">
                        <li className="list-group-item">Terms and Conditions</li>
                        </Link>
                        <Link href="/" className="nav-link  text-light">
                        <li className="list-group-item">Privacy Policy</li>
                        </Link>
                        <Link href="/" className="nav-link  text-light">
                        <li className="list-group-item">Contact us</li>
                        </Link>
                    </ul>
                    </Col>
                <Col md={4} className="mt-5 mb-5">
                <ul >
                        <li className="list-group-item">Follow us </li>
                        <Link href="/" className="nav-link  text-light">
                        <li className="list-group-item">Facebook </li>
                        </Link>
                        <Link href="/" className="nav-link  text-light">
                        <li className="list-group-item">Twitter </li>
                        </Link>
                        <Link href="/" className="nav-link  text-light">
                        <li className="list-group-item">Linkedin </li>
                        </Link>
                        </ul>
                </Col>
                <Col md={4} className="mt-5 mb-5">
                <ul >
                        <li className="list-group-item">Useful info </li>
                        <Link href="/" className="nav-link  text-light">
                        <li className="list-group-item">Our packages </li>
                        </Link>
                        <Link href="/" className="nav-link  text-light">
                        <li className="list-group-item">Join our newsletter </li>
                        </Link>
                        <Link href="/" className="nav-link  text-light">
                        <li className="list-group-item">Refer a customer </li>
                        </Link>
                        </ul>
                </Col>
                </Row>
                <div className="text-center">
                    <p className="p-3">
                    Copyright © 2023 - 2024 flight app.
                    </p>
                </div>
        </Container>
    </div>
    )
} 
