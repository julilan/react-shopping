import { Card } from 'react-bootstrap';

const Product = (props) => {
  const { id, title, price, description, category, image, rating } = props;

  return (
    <Card
      style={{
        width: '16rem',
        height: '100%',
        padding: '1rem',
        margin: '2rem 1rem',
      }}
    >
      <Card.Img variant='top' src={image} />
      <Card.Body>
        <Card.Text>{id}</Card.Text>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Price: {price}</Card.Text>
        <Card.Text>Category: {category}</Card.Text>
        <Card.Text>Rating: {rating.rate}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
