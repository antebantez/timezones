import React from 'react';
import { useState, useEffect } from "react";
// import { Card } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

// Ett försökt till att spara till i localStorage
export default function OwnCity() {
  const [ownCity, setownCity] = useState([])

  const [zone, setZone] = useState([])
  const clickEvent = (e) => {
    setownCity, setZone
  };

  return (
    // user input plus knapp
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
  )


}
