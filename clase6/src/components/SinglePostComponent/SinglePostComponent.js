import React from 'react';
import PropTypes from 'prop-types';
import { Card, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';


const SinglePostComponent = () => {
  const {post, loadingSinglePost} = useSelector((state)=> state.PostsReducer)
  
/*  if (loadingSinglePost) {
    return (
      <Bars height={100}
      width={100}
      </Bars>
    )
  } */
  
  return(
    <Container>
      <Card className="px-4 py-2 mb-3">
        <Card.Title>
          {post.title} UserId: {post.userId}
        </Card.Title>
        <Card.Text>
          {post.body}
        </Card.Text>
      </Card>
    </Container>
  )
};

SinglePostComponent.propTypes = {};

SinglePostComponent.defaultProps = {};

export default SinglePostComponent;
