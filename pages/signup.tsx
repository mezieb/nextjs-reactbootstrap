import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {FaUserAlt,FaEnvelope,FaLock} from 'react-icons/Fa';
import {FiEyeOff,FiEye} from 'react-icons/Fi';
import Button from 'react-bootstrap/Button';
import { useState } from "react";


export default function Signup() {

    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange =(evnt: { target: { value: React.SetStateAction<string>; }; })=>{
        setPasswordInput(evnt.target.value);
    }
    const togglePassword =()=>{
        if(passwordType==="password")
        {
        setPasswordType("text")
        return;
        }
        setPasswordType("password")
    }
    return (
    <div>
        <Head>
        <title>Signup  Next App</title>
        <meta
        name="description"
        content="Meta description for the Manage Booking page"
        />
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
                            <Card.Title className="text-center mt-3">Signup</Card.Title>
                            <Card.Text className="text-center"> Get started with your free account</Card.Text>
                <Form>
                <InputGroup className="">
                <InputGroup.Text id="username">
                <FaUserAlt/>
                </InputGroup.Text>
                <Form.Control
                aria-label="username"
                aria-describedby="username"
                type="text"
                placeholder='Full Name'
                />
                </InputGroup>
                <br />
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
                type={passwordType} onChange={handlePasswordChange}
                value={passwordInput} name="password"
                placeholder='Create password'
                />
                <span className="password-toogle-icon" onClick={togglePassword}>
                { passwordType==="password"? <FiEye className="bi bi-eye"/>
                    :<FiEyeOff className="bi bi-eye-slash "/> }
                    </span>
                </InputGroup>
                <br />
                <InputGroup className="mb-3">
                <InputGroup.Text id="confirm password">
                <FaLock/>
                </InputGroup.Text>
                <Form.Control
                aria-label="confirm password"
                aria-describedby="confirm password"
                type="password"
                placeholder='Confirm password'
                />
                </InputGroup>
                <br />
                <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">
                I agree to the <Link href="/policy-terms-conditions"
                    target="_blank">Policy Terms  Conditions</Link>
                    </label>
                </div>
            <div className="d-grid mb-3  col-lg-12 ">
            <Button variant="success" className=""  type="submit">
            Signup </Button>
        </div>
        <p className="text-center">
            Already have an account? <Link href="/login">Login</Link>
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
