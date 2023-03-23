import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux"; 
import { getSinglePost } from "../store/posts/actions";
import SinglePostComponent from "../components/SinglePostComponent/SinglePostComponent";



export default function SinglePostPage(){
    const params = useParams()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getSinglePost(params.id))
    },[])

    return(
        <Container>
           <SinglePostComponent></SinglePostComponent>
        </Container>
    )
}