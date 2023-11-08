import React from 'react'
import {  Button, Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/legacy/image'
import Link from 'next/link'
import {BsArrowRight} from 'react-icons/Bs';


export default function HomeHero() {
    return (
    <div className="home-hero">
        <Container >
            <div className="mt-5">
            <Row>
            <Col lg={7}  className='mt-5'>
                <div className="mt-5"> 
                <h1>Travel Around The<br/> World With Ease!!!</h1>
                <p> We Offer You The Best Services You Can Get!</p>
                <div className="d-grid mb-5 col-lg-5">
                <Link href="/flights" className=" btn btn-success btn-lg mt-3 " >
                    Explore <BsArrowRight/>
                    </Link>
                    </div>
                </div>
                </Col>
                <Col lg={5} md={5} sm={7} xs={7}  className='mt-5'>
                <Image
        src="/images/travelingpic.png"
        alt="Picture of the homehero"
        width={500}
        height={500}
        />
                
                    </Col>
                </Row> 
            </div>
        </Container>
        
        
    </div>
)
}
