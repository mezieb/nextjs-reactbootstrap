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
import { type } from 'os';


interface IFormInputs {
    carType: string;
    carClass: string;
    pickUpLocation: string;
    noOfDays: number;
    pickUpDate: string;
    pickUpTime: string;
    
}
const SearchRidesSchema = yup
    .object({
        carType: yup.string().required(),
        carClass: yup.string().required(),
        pickUpLocation: yup.string().required(),
        noOfDays: yup.number().required().positive().integer(),
        pickUpDate: yup.string().required(),
        pickUpTime: yup.string().required()
        
        })
    .required();

export default function SearchRidesForm() {

    const {
        register,
        handleSubmit,
        formState: { errors }
        } = useForm<IFormInputs>({
        resolver: yupResolver(SearchRidesSchema)
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
    src="/images/car1.jpg"
    alt="Picture of the hotelroom2"
    layout="fill"
    objectFit="cover"
    />
    </div>
    </div>
    <Container >
    <div className=" p-5"> 
        <h1 className="mt-3 text-center text-light">Search Rides & Book Now </h1>
        </div>
        <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
            <Col lg={5} className="mb-5">
            <Form.Label htmlFor="carType" className="text-light">Car type</Form.Label>
        <Form.Select aria-label="carType"
        {...register("carType")} id="carType" required >
        <option value="">Please select your ride</option>
        <option value="sedan">Sedan</option>
    <option value="suv">Suv</option>
    <option value="truck">Truck</option>
    <option value="bus">Bus</option>
    </Form.Select>
{errors.carType && <p className="text-danger">{errors.carType.message}</p>}
<br/>
<Form.Label htmlFor="carClass" className="text-light"> Car class </Form.Label>
<Form.Select aria-label="carClass" 
{...register("carClass")} id="carClass" required>
<option value="">Please select  car class</option>
    <option value="economy">Economy</option>
    <option value="standard">Standard</option>
    <option value="premium">Premium </option>
    </Form.Select>
{errors.carClass && <p className="text-danger">{errors.carClass.message}</p>}
<br/>
<Form.Label htmlFor="pickUpLocation" className="text-light"> Pick-up location </Form.Label>
<Form.Select aria-label="pickUpLocation"
{...register("pickUpLocation")} id="pickUpLocation"  required>
<option value="">Pick Up Location</option>
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
{errors.pickUpLocation && <p className="text-danger">{errors.pickUpLocation.message}</p>}
<br/>
</Col>
<Col lg={5} className="mb-5">
<Form.Group  >
    <Form.Label htmlFor="noOfDays"className="text-light"> Number of days </Form.Label>
    <Form.Control type="number"
    {...register("noOfDays",{valueAsNumber:true } )}
    placeholder="number of days" id="noOfDays" required />
    {errors.noOfDays && (
    <p className="text-danger">noOfdays Must be positive number 1 and above  </p>
    )}
    </Form.Group><br/>
    <Form.Group  >
    <Form.Label htmlFor="pickUpDate" className="text-light"> Pick-up date </Form.Label>
    <Form.Control type="date"
    {...register("pickUpDate")}
    placeholder="date" id="pickUpDate" required />
    {errors.pickUpDate && <p className="text-danger">{errors.pickUpDate.message}</p>}
    </Form.Group><br/>
    <Form.Group  >
    <Form.Label htmlFor="pickUpTime"className="text-light"> Pick-up time </Form.Label>
    <Form.Control type="time"
    {...register("pickUpTime")}
    placeholder="date" id="pickUpTime" required />
    {errors.pickUpTime && <p className="text-danger">{errors.pickUpTime.message}</p>}
    </Form.Group><br/>
    </Col>
<div className="d-grid mb-5 col-lg-10 ">
    <Button variant="success"   type="submit">
    <BsSearch/> Search rides </Button>
    </div>
        </Row>
        </Form>
    </Container>
</div>
    )
}
