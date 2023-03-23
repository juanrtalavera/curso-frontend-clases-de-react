import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-bootstrap';
import { getPosts } from '../../store/posts/actions';
import { Bars } from 'react-loader-spinner'
import { Link } from 'react-router-dom'

const MultiPostsComponent = () => {
  // dispatcher para ejecutar acciones
  const dispatch = useDispatch()
  // las partes que nos interesan de la store que estan en el reducer PostsReducer
  const  {posts, loadingPosts} = useSelector((state)=> state.PostsReducer)

  useEffect(()=>{
    // llamar a la accion que obtenga ls posts
    dispatch(getPosts()) 
  }, [])

  if(loadingPosts){
    return (
      <Container>
        <Bars
        heigh={100}
        width={200}>

        </Bars>
      </Container>
    )
  }

  return(
    <Container>
      {postMessage.map(post=>{
        return (
          <Card className="px-4">
            <Card.Title>
             <Link to={`/post/${post.id}`}>{post.title}</Link>
            </Card.Title>
            <Card.Text>
              {post.body}
            </Card.Text>
          </Card>
        )
      })}
    </Container>
  )
};

MultiPostsComponent.propTypes = {};

MultiPostsComponent.defaultProps = {};

export default MultiPostsComponent;
