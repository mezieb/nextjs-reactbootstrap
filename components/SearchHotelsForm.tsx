import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/legacy/image'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {BsSearch} from 'react-icons/Bs';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"


interface IFormInputs {
    purpose: string;
    country: string;
    city: string;
    noOfGuests: number;
    checkIn: string;
    checkOut: string;
}
const SearchHotelsSchema = yup
    .object({
        purpose: yup.string().required(),
        country: yup.string().required(),
        city: yup.string().required(),
        noOfGuests: yup.number().required().positive().integer(),
        checkIn: yup.string().required(),
        checkOut: yup.string().required()
        })
    .required();

export default function SearchHotelsForm() {

    const {
        register,
        handleSubmit,
        formState: { errors }
        } = useForm<IFormInputs>({
        resolver: yupResolver(SearchHotelsSchema)
        });

        const onSubmit = (data: IFormInputs) => {
            alert(JSON.stringify(data));
            
        };

    return (
        <div className=' mt-5'>
            <div className="mt-5"> 
                <div style={{
                    zIndex:-1,
                    position:"fixed",
                    width:"100vw",
                    height:"100vh",
                    
                    }}> 
                <Image
        src="/images/hotelroom2.jpg"
        alt="Picture of the hotelroom2"
        layout="fill"
        objectFit="cover"
        />
        </div>
        </div>
        <Container >
        <div className=" p-5"> 
            <h1 className="mt-3 text-center text-light">Search Hotels & Book Now </h1>
            </div>
            <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
                <Col lg={5} className="mb-5">
                <Form.Label htmlFor="purpose" className="text-light">Purpose</Form.Label>
            <Form.Select aria-label="purpose"
            {...register("purpose")} id="purpose" required >
            <option value="">Please select your purpose</option>
            <option value="business">Business</option>
        <option value="leisure">Leisure</option>
        </Form.Select>
    {errors.purpose && <p className="text-warning">{errors.purpose.message}</p>}
    <br/>
    <Form.Label htmlFor="country" className="text-light"> Country </Form.Label>
    <Form.Select aria-label="country" 
    {...register("country")} id="country" required>
    <option value="">Please select  country</option>
        <option value="usa">USA</option>
        <option value="uk">UK</option>
        <option value="france">France </option>
        <option value="russia">Russia </option>
        <option value="china">China </option>
        <option value="germany">Germany </option>
        <option value="ghana">Ghana </option>
        <option value="south africa">South Africa </option>
        <option value="philippines">Philippines </option>
        <option value="vietnam">Vietnam</option>
    </Form.Select>
    {errors.country && <p className="text-warning">{errors.country.message}</p>}
    <br/>
    <Form.Label htmlFor="city" className="text-light"> City </Form.Label>
    <Form.Select aria-label="city" 
    {...register("city")} id="city" required>
    <option value="">Please select  city</option>
        <option value="usa">USA</option>
        <option value="uk">UK</option>
        <option value="france">France </option>
        <option value="russia">Russia </option>
        <option value="china">China </option>
        <option value="germany">Germany </option>
        <option value="ghana">Ghana </option>
        <option value="south africa">South Africa </option>
        <option value="philippines">Philippines </option>
        <option value="vietnam">Vietnam</option>
    </Form.Select>
    {errors.city && <p className="text-warning">{errors.city.message}</p>}
    <br/>
    </Col>
    <Col lg={5} className="mb-5">
    <Form.Group  >
        <Form.Label htmlFor="noOfGuests"className="text-light"> Number of guests </Form.Label>
        <Form.Control type="number"
        {...register("noOfGuests",{ min: 1, max: 300, valueAsNumber:true } )}
        placeholder="number of guests" id="noOfGuests" required />
        {errors.noOfGuests && (
        <p className="text-warning">noOfGuests Must be positive number 1 and above  </p>
        )}
        </Form.Group><br/>
        <Form.Group  >
        <Form.Label htmlFor="checkIn" className="text-light"> Check-in </Form.Label>
        <Form.Control type="date"
        {...register("checkIn")}
        placeholder="date" id="checkIn" required />
        {errors.checkIn && <p className="text-warning">{errors.checkIn.message}</p>}
        </Form.Group><br/>
        <Form.Group  >
        <Form.Label htmlFor="checkOut"className="text-light"> Check-out </Form.Label>
        <Form.Control type="date"
        {...register("checkOut")}
        placeholder="date" id="checkOut" required />
        {errors.checkOut && <p className="text-warning">{errors.checkOut.message}</p>}
        </Form.Group><br/>
        </Col>
    <div className="d-grid mb-5 col-lg-10 ">
        <Button variant="success" className=""  type="submit">
        <BsSearch/> Search hotels </Button>
        </div>
            </Row>
            </Form>
        </Container>
</div>
    )
}
