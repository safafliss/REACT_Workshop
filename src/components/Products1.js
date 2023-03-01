import React, { useState, useEffect } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import products from "../products.json";
import Product1 from "./Product1";
function Products1() {
  const [showBoughtAlert, setshowBoughtAlert] = useState(false);
  const [showWelcomeAlert, setshowWelcomeAlert] = useState(false);

  useEffect(() => {
    setshowWelcomeAlert(true);
    setTimeout(() => {
      setshowWelcomeAlert(false);
    }, 3000);
    return () => {
      console.log("UnMount");
    };
  }, []);
  const BuyProduct = (product) => {
    product.quantity--;
    setshowBoughtAlert(true);
    setTimeout(() => {
      setshowBoughtAlert(false);
    }, 2000);
  };
  return (
    <Container style={{ marginTop: "30px" }}>
      {showWelcomeAlert && (
        <Alert variant="success">
          <Alert.Heading>
            Hey, Welcome To Our Shop <strong> MyStore </strong>{" "}
          </Alert.Heading>
          <p>
            Thank you for choosing our store, we hope you enjoy your shopping
            experience!
          </p>
          <hr />
        </Alert>
      )}
      <Row>
        {products.map((product, index) => (
          <Col md={4} key={index}>
            <Product1 product={product} buyFunction={BuyProduct} />
          </Col>
        ))}
      </Row>
      {showBoughtAlert && (
        <Alert style={{ marginTop: "30px" }} variant="primary">
          <p>You Bought an Item</p>
        </Alert>
      )}
    </Container>
  );
}
export default Products1;
