import { useNavigate } from "react-router-dom";
import { Card, Row, Col } from "../utilities/components-bootstrap";

export default function MissingPage() {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }

  return (
    <>
      <Card className="standardCard">
        <Col lg={{offset: 2, span: 8}} className="text-center">
        <Row className="mt-3">
            <h1>404</h1>
          </Row>
          <Row className="mt-3">
            <h1>That page doesn't exist!</h1>
          </Row>
          <Row className="mt-3">
            <button onClick={handleClick} className="w-100 h3 rounded-pill">Back to Home Page</button>
          </Row>
        </Col>
      </Card>
    </>
  );
}
