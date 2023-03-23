import { useReducer } from "react";
import { Container } from "react-bootstrap";

export default function HomePage(){

    return(
        <Container>
            <h1>Home page</h1>
            {user && user.id? <h2>Bienvenid@ {useReducer.firstName}</h2>: 'No estás logueado'}
           
        </Container>
    )
}