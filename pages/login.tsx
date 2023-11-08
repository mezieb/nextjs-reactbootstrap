import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {FaEnvelope,FaLock} from 'react-icons/Fa';
import Button from 'react-bootstrap/Button';




export default function Login() {
        return (
    <div >
        <Head>
        <title>Login  Next App</title>
        <meta name="description" content="Meta description for the Manage Booking page"/>
        <link rel="icon" href="/images/editflight-icon.png" />
        </Head>
        <main>
        <section className="login-signup-bg ">
                <Container className="mt-5">
                    <Row>
                        <Col lg={4} className="mt-5"></Col>
                        <Col lg={8} className="mt-5">
                        <Card style={{ maxWidth: "450px"}}>
                            <Card.Body >
                            <Card.Title className="text-center mt-3">Login</Card.Title>
                            <Card.Text className="text-center"></Card.Text>
                <Form>
                
                <InputGroup className="">
                <InputGroup.Text id="email">
                <FaEnvelope/>
                </InputGroup.Text>
                <Form.Control
                aria-label="email"
                aria-describedby="email"
                type="email"
                placeholder='Enter Email'
                />
                </InputGroup>
                <br />
                <InputGroup className="">
                <InputGroup.Text id="password">
                <FaLock/>
                </InputGroup.Text>
                <Form.Control
                aria-label="password"
                aria-describedby="password"
                type="password"
                placeholder=' Password'
                />
                </InputGroup>
                <br />
                <div className="d-grid mb-3  col-lg-12 ">
        <Button variant="success" className=""  type="submit">
            Login </Button>
        </div>
        <p className="text-center">
            Forget <Link href="/reset-password">password? </Link>
        </p>
        <p className="text-center">
            {"Don't have an account?"} <Link href="/signup">Signup</Link>
        </p>

            </Form>
        </Card.Body>
        </Card>
        <br/>
        </Col>
        </Row>
        </Container>
        </section>
        </main>
    </div>
    )
}
