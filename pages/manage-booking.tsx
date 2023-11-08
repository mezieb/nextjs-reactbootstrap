import React from 'react'
import Head from 'next/head'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link'
import Card from 'react-bootstrap/Card';

export default function ManageBooking() {
    return (
    <div>
        <Head>
        <title>Manage Booking Next App</title>
        <meta
        name="description"
        content="Meta description for the Manage Booking page"
        />
        <link rel="icon" href="/images/editflight-icon.png" />
        </Head>
        <main> 
            <div className="hero-flight">
                <Container>
                    <div className="mt-5 text-center">
                        <Row>
                        <Col lg={6} className="  mt-5  text-light">
                        <p><Link href="/login" className="link-underline-primary mt-5  text-light">Login</Link></p> 
                        </Col>
                        <Col lg={6} className="  mt-5  text-light">
                        <p><Link href="signup" className="link-underline-primary mt-5  text-light">Signup</Link></p> 
                        </Col>
                        </Row>
                    </div>
                    
                </Container> 
                <Container>
                    <div className="mt-5">
                <div><h1 className="p-5 text-center ">What would you like to do? </h1></div>
                    <Row>
        <Col lg={4} className="mb-5">
        <Card className="text-center">
        <Card.Header className="text-dark">GET MY TICKET</Card.Header>
        <Card.Body className="text-dark">
        <Card.Title>Paid ticket </Card.Title>
        <Card.Text>
        If you have not recieved your ticket yet ,
        This service allows you to request for your booked paid ticket .
        </Card.Text>
        <Link href="/login" className=" btn btn-success btn-md mt-3 " >
        Get my ticket
        </Link>
        </Card.Body>
        </Card>
    </Col>
    <Col lg={4} className="mb-5">
    <Card className="text-center">
        <Card.Header className="text-dark">CHANGE MY TICKET</Card.Header>
        <Card.Body className="text-dark">
        <Card.Title>Paid ticket </Card.Title>
        <Card.Text>
        This service allows you to make changes 
        on your ticket such as date, 
        route and cabin on your bookings
        </Card.Text>
        <Link href="/login" className=" btn btn-success btn-md mt-3 " >
            Change my ticket
        </Link>
        </Card.Body>
        </Card>
    </Col>
    <Col lg={4} className="mb-5">
    <Card className="text-center">
        <Card.Header className="text-dark">REFUND</Card.Header>
        <Card.Body className="text-dark">
        <Card.Title>Paid ticket </Card.Title>
        <Card.Text>
        This service allows you to request for a refund on your paid existing booking.
        </Card.Text>
        <Link href="/login" className=" btn btn-success btn-md mt-3 " >
            REFUND
        </Link>
        </Card.Body>
        </Card>
    </Col>
    </Row>
    </div>
    </Container>
    </div>
    </main>
    </div>
    )
}