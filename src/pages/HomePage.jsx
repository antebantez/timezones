import DigitalClock from "../components/DigitalClock";
import AnalogClock from "../components/AnalogClock";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Container, Row, Card, Col } from "../utilities/components-bootstrap";
//Calling components that will render the content of the HomePage
//Using bootstrap columns to make it responsive
export default function HomePage() {
  return (
    <Container>
      <Card className="standardCard">
        <Row className="justify-content-center">
          <Col xl={6} lg={7} md={6} sm={11} xs={11} className=" mb-2">
            <AnalogClock size={300} />
          </Col>

          <Col xl={4} lg={5} md={6} sm={12} xs={12} className="mb-2">
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
