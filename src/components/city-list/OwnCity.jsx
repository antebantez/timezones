import React from 'react';
import { useState, useEffect } from "react";
// import { Card } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';


export default function OwnCity() {
  const [ownCity, setownCity] = useState([])

  const [zone, setZone] = useState([])
  const clickEvent = (e) => {
    setownCity, setZone
  };

  return (
    <div className="input-field mb-3">


      <Form.Control
        id='cityName' type="text" placeholder="City" value={localStorage.getItem('cityName')}
      ></Form.Control>

      <Form.Control
        id='timeZone' type="text" placeholder="Time Zone" value={localStorage.getItem('timeZone')}
      ></Form.Control>


      <Button onClick={clickEvent, setZone} variant="primary"> Add to list</Button>
    </div>
  )


}
