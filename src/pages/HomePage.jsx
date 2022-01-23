import DigitalClock from "../components/DigitalClock";
import AnalogClock from "../components/AnalogClock";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Row, Card, Col } from "../utilities/components-bootstrap";

export default function Cities() {
  return (
    <Card>
      <Row>
        <Col xl={1} lg={1} md={1} sm={1} xs={1}></Col>
        <Col>
          <AnalogClock />
        </Col>
        <Col xl={1} lg={1} md={1} sm={1} xs={1}></Col>
        <Col>
          <Calendar />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="text-center " lg={8} md={6} sm={6}>
          <DigitalClock />
        </Col>
      </Row>
    </Card>
  );
}
