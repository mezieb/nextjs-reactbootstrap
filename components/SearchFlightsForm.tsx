import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {BsSearch} from 'react-icons/Bs';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";




interface IFormInputs {
    typeOfTraveling: string;
    trip: string;
    flightClass: string;
    location: string;
    destination: string;
    noOfPassengers: number;
    leavingDate: string;
    returningDate: string;
}
const SearchFlightsSchema = yup
    .object({
        typeOfTraveling: yup.string().required(),
        trip: yup.string().required(),
        flightClass: yup.string().required(),
        location: yup.string().required(),
        destination: yup.string().required(),
        noOfPassengers: yup.number().required().positive().integer(),
        leavingDate: yup.string().required(),
        returningDate: yup.string().required()
        })
    .required();


export default function SearchFlightsForm() {

    const {
        register,
        handleSubmit,
        formState: { errors }
        } = useForm<IFormInputs>({
        resolver: yupResolver(SearchFlightsSchema)
        });

    const onSubmit = (data: IFormInputs) => {
            alert(JSON.stringify(data));
            
        };
    


    return (
    <div className='hero-flight mt-5'>
        <Container   >
        <Row >
        <Col lg={3} className="mt-5">
        <Image
        src="/images/airplane1.png"
        alt="Picture of the hero"
        width={250}
        height={250}
        />
        </Col>
        <Col lg={5} className="mt-5">
            <h1>Search Flights & Book Now </h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Label htmlFor="typeOfTraveling">Type of traveling</Form.Label>
            <Form.Select aria-label="typeOfTraveling"
            {...register("typeOfTraveling")} id="typeOfTraveling" required >
            <option value="">International/Domestic?</option>
            <option value="domestic">Domestic</option>
        <option value="international">International</option>
    </Form.Select>
    {errors.typeOfTraveling && <p className="text-warning">{errors.typeOfTraveling.message}</p>}
    <br/>
    <Form.Label htmlFor="trip">Choose trip</Form.Label>
            <Form.Select aria-label="trip"
            {...register("trip")} id="trip" required >
            <option value="">Please choose your trip</option>
            <option value="two-way">Two-ways</option>
        <option value="one-way">One-way</option>
        <option value="multi-ways">Multi-ways</option>
    </Form.Select>
    {errors.trip && <p className="text-warning">{errors.trip.message}</p>}
    <br/>
    <Form.Label htmlFor="flightClass">Flight class</Form.Label>
    <Form.Select aria-label="flightClass" 
    {...register("flightClass")}  id="flightClass" required>
    <option value="">Please select your flight</option>
    <option value="economy">Economy</option>
    <option value="first-class">First class</option>
    <option value="business-class">Business class</option>
    </Form.Select>
    {errors.flightClass && <p className="text-warning">{errors.flightClass.message}</p>}
    <br/>
    <Form.Label htmlFor="location"> Location </Form.Label>
    <Form.Select aria-label="location" 
    {...register("location")} id="location" required>
    <option value="">Please select your location</option>
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
    {errors.location && <p className="text-warning">{errors.location.message}</p>}
    <br/>
    <Form.Label htmlFor="destination"> Destination </Form.Label>
    <Form.Select aria-label="destination" 
    {...register("destination")} id="destination" required>
    <option value="">Please select your destination</option>
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
    {errors.destination && <p className="text-warning">{errors.destination.message}</p>}
    <br/>
    <Form.Group className="mb-3" >
        <Form.Label htmlFor="noOfPassengers"> Number of passengers </Form.Label>
        <Form.Control type="number"
        {...register("noOfPassengers",{ min: 1, max: 300, valueAsNumber:true } )}
        placeholder="number" id="noOfPassengers" required />
        {errors.noOfPassengers && (
        <p className="text-warning">noOfPassengers Must be minimum number 0f 1 and maximum 300 </p>
        )}
        </Form.Group>
    <Form.Group className="mb-3" >
        <Form.Label htmlFor="leavingDate"> Leaving Date </Form.Label>
        <Form.Control type="date"
        {...register("leavingDate")}
        placeholder="date" id="leavingDate" required />
        {errors.leavingDate && <p className="text-warning">{errors.leavingDate.message}</p>}
        </Form.Group>
        <Form.Group className="mb-3" >
        <Form.Label htmlFor="returningDate"> Returning Date </Form.Label>
        <Form.Control type="date"
        {...register("returningDate")}
        placeholder="date" id="returningDate" required />
        {errors.returningDate && <p className="text-warning">{errors.returningDate.message}</p>}
        </Form.Group><br/>
        <div className="d-grid mb-5">
        <Button variant="success" className=""  type="submit">
        <BsSearch/> Search flights 
        </Button>
        </div>
    </Form>
            </Col>
        <Col lg={4} className="mt-5">
        <Image
        src="/images/airplane2.png"
        alt="Picture of the hero"
        width={250}
        height={250}
        />
        </Col>
        
        </Row>
    </Container>

        
    </div>
    )
}
