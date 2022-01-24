import React from 'react';
import { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form'
import { Row, Card, Col, Button, Container } from "../../utilities/components-bootstrap";
;



// Ett försökt till att spara till i localStorage
export default function OwnCity() {
  const [emptyCity, setEmptyCity] = useState();
  const [emptyTimeZone, setEmptyTimeZone] = useState();






  return (
    <Container>

      <Row>
        <Col>
          <Card className='p-5'>
            <div className="input-field mb-3">


              <Form.Control className="input-field mb-3"
                id='cityName' type="text" style={{ background: "rgba(196, 196, 196, 0.3)", border: "none" }} placeholder="City" value={emptyCity}
              ></Form.Control>

              <Form.Control className="input-field mb-3"
                id='timeZone' type="text" style={{ background: "rgba(196, 196, 196, 0.3)", border: "none" }} placeholder="Time Zone" value={emptyTimeZone}
              ></Form.Control>

              {/* Ett försök till att spara user input på onClick */}
              <Button className="" type="button" style={{ background: "rgba(196, 196, 196, 0.3)", border: "none" }} class="btn btn-primary btn-lg"> + Submit </Button>
              <Button className="" type="button" onClick={() => setEmptyCity(() => "")} style={{ background: "rgba(196, 196, 196, 0.3)", border: "none" }} class="btn btn-primary btn-lg"> Clear </Button>
            </div>
          </Card>
        </Col>
        <Col>
        </Col>
        <Col>

        </Col>

      </Row>

    </Container>
  )


}
