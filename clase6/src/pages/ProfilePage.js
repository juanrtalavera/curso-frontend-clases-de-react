import { Form, Container, FormGroup } from "react-bootstrap";

export default function ProfilePage(){
            const {user} = useSelector((state)=> state.AuthReducer)
            return(
                <Container>
                <h1>Profile Page</h1>

                <Form>
                    <FormGroup>

                    </FormGroup>
                </Form>
                  
                </Container>
            )
}