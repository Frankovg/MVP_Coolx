import React, {useState} from 'react'
import {loadStripe} from '@stripe/stripe-js'
import {Elements, CardElement, useStripe, useElements} from '@stripe/react-stripe-js'
import axios from 'axios'
import "./stripe.scss"
import { useNavigate } from 'react-router-dom'
import { Col, Container, Row, Button } from "react-bootstrap";


const stripePromise = loadStripe("pk_test_51LnIA1J5n5ohBaXPnr6gxHm2Hu7UeuRDJgkrBYRyKTPtTpYPcSqXeR94KsiMCPjo4vFdlcPi5jllaVS5dAGrdoT6005G5Uk9aw")


const CheckoutForm = ({buyProject, user}) => {
    
    const [exito, setExito] = useState(false);
    const [exito2, setExito2] = useState(false);
    const [loading, setLoading] = useState(false)
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();
    const [newState, setNewState] = useState({status: "1",});


    {exito &&
        axios
            .put(`http://localhost:4000/project/changeUser/${buyProject.project_id}/${user.user_id}`)
            .then((res)=>{
                console.log(res)
                setExito2(true)
            })
            .catch((err)=>{
                console.log(err)
            })
            
          }

    {exito2 &&
        axios
            .put(`http://localhost:4000/project/editStatusProject/${buyProject.project_id}`, newState)
            .then((res)=>{
                console.log(res)
                navigate("/user")

            })
            .catch((err)=>{
                console.log(err)
            })
            
          }


    const handleSubmit = async (e) => {
        e.preventDefault();

        let coste = parseFloat(buyProject.project_cost * 100);

        const {error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        });

        setLoading(true)

        if (!error) {
            const { id } = paymentMethod;
            
            try {
                const {data} = await axios.post('http://Localhost:4000/stripe/api/checkout', {
                id,
                amount: coste,
                
            })
            
            console.log(coste);
            console.log(data);
            elements.getElement(CardElement).clear()
            } catch (error) {
                console.log(error);
            }
            setLoading(false)
            setExito(true)

            
        }
    };

    return (
    <Container>
        <Row>
            <Col>
            <form onSubmit={handleSubmit} className="card card-body credit">
                <h3 className='text-center my-2'>Precio: {buyProject.project_cost}</h3>
                <div className="form-group">
                <CardElement className='form-control'/>
                </div>
                <h5 className='pt-4'>Nombre del proyecto: {buyProject.project_name}</h5>
                <h5 className='pt-2'>Localización del proyecto: {buyProject.location}</h5>
                <h5 className='pt-2'>Beneficio del proyecto: {buyProject.profit}</h5>
                <button className='btn btn-success' disabled={!stripe}> 
                {loading ? (
                    <div className='spinner-border text-light' role="status"><span className='sr-only'></span></div>
                ) : "Comprar"}
                </button>
            </form>
            </Col>
        </Row>

    </Container>

    
    
    )
};

export const Stripe = ({buyProject, user}) => {


    return (
        <div className='stripe-fondo'> 
        <Elements stripe={stripePromise}> 
            <h1 className='pt-5 pb-5'>Nombre del proyecto: {buyProject.project_name}</h1> 
            <CheckoutForm buyProject={buyProject} user={user}/>
        </Elements>
        </div>
       
    );
};
