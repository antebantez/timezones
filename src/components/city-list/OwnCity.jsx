import React from 'react';
import { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form'
import { Row, Card, Col, Button, Container } from "../../utilities/components-bootstrap";
;



// Ett försökt till att spara till i localStorage
export default function OwnCity() {
  const [ownCity, setownCity] = useState([])

  const [zone, setZone] = useState([])
  const clickEvent = (e) => {
    setownCity, setZone
  };




  function resetForm() {

    changeFormValues({ ...emptyFormValues });

  }

  return (
    <Container>

      <Row>
        <Col>
          <Card>
            <div className="input-field mb-3">


              <Form.Control
                id='cityName' type="text" style={{ background: "rgba(196, 196, 196, 0.3)", border: "none" }} placeholder="City" value={localStorage.getItem('cityName')}
              ></Form.Control>

              <Form.Control
                id='timeZone' type="text" style={{ background: "rgba(196, 196, 196, 0.3)", border: "none" }} placeholder="Time Zone" value={localStorage.getItem('timeZone')}
              ></Form.Control>

              {/* Ett försök till att spara user input på onClick */}
              <Button type="button" style={{ background: "rgba(196, 196, 196, 0.3)", border: "none" }} class="btn btn-primary btn-lg"> + Submit </Button>
              <Button type="button" style={{ background: "rgba(196, 196, 196, 0.3)", border: "none" }} class="btn btn-primary btn-lg"> Clear </Button>
            </div>
          </Card>
        </Col>
        <Col>
          <Card>
            <div className="input-field mb-3">


              <Form.Control
                id='cityName' type="text" placeholder="City" value={localStorage.getItem('cityName')}
              ></Form.Control>

              <Form.Control
                id='timeZone' type="text" placeholder="Time Zone" value={localStorage.getItem('timeZone')}
              ></Form.Control>

              {/* Ett försök till att spara user input på onClick */}
              <Button onClick={clickEvent, setZone, setownCity} variant="primary"> Add to list</Button>
            </div>
          </Card>
        </Col>

      </Row>

    </Container>
  )


}
