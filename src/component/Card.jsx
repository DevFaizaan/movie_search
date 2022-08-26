import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

function MovieCard({ id, title, year, image }) {
  const navigate = useNavigate();
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{year}</Card.Text>
        <Button variant='primary' onClick={() => navigate(`/details/${id}`)}>
          Details
        </Button>
        &nbsp;&nbsp;
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
