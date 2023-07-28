import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../rtk/slices/productDetailsSlice";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

function ProductDetails() {
  const params = useParams();
  const product = useSelector((state) => state.productDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct(`/${params.productId}`));
  }, []);

  return (
    <>
      <div className="details">
        <Container className="pt-5">
          <Row className="pb-5">
            <Col className="mx-auto col-8">
              <Card className="mx-auto">
                <Card.Img
                  className="mx-auto pt-3"
                  style={{ maxWidth: "15rem" }}
                  src={product.image}
                  alt={product.title}
                />
                <Card.Body className="text-center">
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                  <small className="my-auto text-muted">
                    Price: ${product.price}
                  </small>
                  <Button variant="primary disabled">Add to cart</Button>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
export default ProductDetails;
