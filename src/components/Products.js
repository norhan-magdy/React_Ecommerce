import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../rtk/slices/cart-slice";
import { Link } from "react-router-dom";

function Products() {
  const allProducts = useSelector((state) => state.products);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <Container className="text-center">
        <Row className="pb-5">
          {allProducts.map((product) => (
            <Col className=" col-sm-6 col-md-4 col-lg-3" key={product.id}>
              <Card className="my-3">
                <Card.Img
                  variant="top"
                  style={{ width: "12rem", height: "14rem" }}
                  className="m-auto pt-3"
                  src={product.image}
                />
                <Card.Body>
                  <Card.Title>{product.title.slice(0, 10)}</Card.Title>
                  <Card.Text
                    className="overflow-hidden"
                    style={{ height: "3rem" }}
                  >
                    {product.description.slice(0, 50)}
                  </Card.Text>
                  <Button
                    className="w-50 me-2"
                    variant="primary"
                    onClick={() => {
                      addProduct(product);
                    }}
                  >
                    +
                  </Button>
                  <Link
                    className="btn btn-outline-info"
                    to={`/product/${product.id}`}
                  >
                    Details
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Products;
