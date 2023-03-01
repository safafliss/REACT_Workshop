import React, { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
function Product1(props) {
  const [like, setLike] = useState(props.product.like);
  const addLikes = (e) => {
    e.preventDefault();
    setLike(like + 1);
  };
  return (
    <Card style={{ width: "18rem" }} className="text-center" border="secondary">
      <Card.Header>
        <Card.Img
          variant="top"
          src={require("../assets/images/" + props.product.img)}
          alt="Product Img"
          height={200}
        />
      </Card.Header>
      <Card.Body>
        <Card.Title>
          <Link to={`/poducts/details/${props.product.name}`}>
            {props.product.name}
          </Link>
        </Card.Title>
        <Card.Text>Price : {props.product.price} DT</Card.Text>
        <Card.Text>Quantity :{props.product.quantity}</Card.Text>
        <Card.Text>Likes :{like}</Card.Text>
        <Row>
          <Col md={6}>
            {" "}
            <Button variant="primary" onClick={addLikes}>
              Like
            </Button>
          </Col>
          <Col md={6}>
            <Button
              variant="info"
              onClick={() => props.buyFunction(props.product)}
              disabled={props.product.quantity === 0}
            >
              Buy
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Product1;
