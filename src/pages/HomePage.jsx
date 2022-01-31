import DigitalClock from "../components/DigitalClock";
import AnalogClock from "../components/AnalogClock";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Container, Row, Card, Col } from "../utilities/components-bootstrap";

export default function HomePage() {
  return (
    <Container>
      <Card className="standardCard">
        <Row>
          <Col xl={1} lg={1} md={1} sm={2} xs={2} className="mb-2"></Col>
          <Col xl={5} lg={5} md={5} sm={10} xs={10} className="mb-2">
            <AnalogClock />
          </Col>
          <Col xl={1} lg={1} md={1} sm={2} xs={1} className="mb-2"></Col>
          <Col xl={5} lg={5} md={5} sm={10} xs={11} className="mb-2">
            <Calendar />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="text-center " lg={8} md={6} sm={6}>
            <DigitalClock />
          </Col>
        </Row>
      </Card>
    </Container>
  );
}
