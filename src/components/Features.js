import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";

function Features() {
  return (
    <Container className="Features">
      <h2 className="py-4 mx-auto col-8">Please Sign in to see our Features</h2>
      <Form className="border border-info rounded-2 p-2 mb-4 mx-auto col-8">
        <Container>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text id="emailHelp" muted>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            <Form.Text id="passwordHelpBlock" muted>
              Your password must be 8-20 characters long, contain letters and
              numbers, and must not contain spaces, special characters, or
              emoji.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button className="disabled" variant="primary" type="submit">
            Submit
          </Button>
        </Container>
      </Form>
    </Container>
  );
}
export default Features;
