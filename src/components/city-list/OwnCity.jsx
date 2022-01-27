import React from 'react';
import { useState, useEffect } from "react";
import useStates from '../../utilities/useStates'
import Form from 'react-bootstrap/Form'
import { Row,Card, Col, Button, Container } from "../../utilities/components-bootstrap";
;
export default function OwnCity(props) {
  let { setAndSaveItems, stateList } = props;


  let [formValues, changeFormValues] = useStates({
    id: "5053",
    city: "",
    timezone: "",
    image: "none.",
    imageBgr: "None"
  });

  function updateFormValue(event) {
    let { name, value } = event.target;
    changeFormValues({ [name]: value });
  }

  function clearForms() {
    changeFormValues({
      utc: "",
      city: "",
    });
  }

  function submitForm(event) {
    // prevent the default behavior of
    // the browser (don't reload on submit)
    event.preventDefault();

    setAndSaveItems([...stateList, formValues]);
  }

  let { city, timezone } = formValues;
  const clearForm = city.length > 0;
  return (
    
    
    <Container className="MyTime">
      <Row>
        <Col>
          <Card className='p-3'>
            <h3 className='FavoriteText'>Creat Your Own Time:</h3>
    <div className="input-field mb-3">
      <form onSubmit={submitForm}>
        <Form.Group className="mb-3">
                  <Form.Control 
                    
            type="text"
            name="city"
            value={city}
            
            onChange={updateFormValue}
            placeholder="City"
            required
            minLength={2}
           maxLength={10}
          style={{ background: "rgba(190, 190, 190, 0.3)", border: "none" }}
          />
        </Form.Group>
                <Form.Group className="mb-3" >
                  <Form.Label htmlFor="disabledSelect">Select UTC</Form.Label>
          <Form.Select name="timezone" onChange={updateFormValue} style={{ background: "rgba(190, 190, 190, 0.3)", border: "none" }} required >
                  <option value="" hidden  defaultValue >
                    
             Zone
            </option>
            <option value={14}>UTC+14:00</option>
            <option value={13}>UTC+13:00</option>
            <option value={12.75}>UTC+12:45</option>
            <option value={12}>UTC+12:00</option>
            <option value={11}>UTC+11:00</option>
            <option value={10.5}>UTC+10:30</option>
            <option value={10}>UTC+10:00</option>
            <option value={9.5}>UTC+9:30</option>
            <option value={9}>UTC+9:00</option>
            <option value={8.75}>UTC+8:45</option>
            <option value={8}>UTC+8:00</option>
            <option value={7}>UTC+7:00</option>
            <option value={6.5}>UTC+6:30</option>
            <option value={6}>UTC+6:00</option>
            <option value={5.75}>UTC+5:45</option>
            <option value={5.5}>UTC+5:30</option>
            <option value={5}>UTC+5:00</option>
            <option value={4.5}>UTC+4:30</option>
            <option value={4}>UTC+4:00</option>
            <option value={3}>UTC+3:00</option>
            <option value={2}>UTC+2:00</option>
            <option value={1}>UTC+1:00</option>
            <option value={0}>UTC+0:00</option>
            <option value={-1}>UTC-1:00</option>
            <option value={-2}>UTC-2:00</option>
            <option value={-3}>UTC-3:00</option>
            <option value={-3.5}>UTC-3:30</option>
            <option value={-4}>UTC-4:00</option>
            <option value={-5}>UTC-5:00</option>
            <option value={-6}>UTC-6:00</option>
            <option value={-7}>UTC-7:00</option>
            <option value={-8}>UTC-8:00</option>
            <option value={-9}>UTC-9:00</option>
            <option value={-9.5}>UTC-9:30</option>
            <option value={-10}>UTC-10:00</option>
            <option value={-11}>UTC-11:00</option>
            <option value={-12}>UTC-12:00</option>
          </Form.Select>
              </Form.Group>
              
        <Button type="submit" style={{ background: "rgba(196, 196, 196, 0.3)", border: "auto" }} value="Add" className=" btn-primary btn-lg">
          Submit{" "}
        </Button>
        {clearForm && (
          <Button value="Add" style={{ background: "rgba(196, 196, 196, 0.3)", border: "auto" }} className="btn-primary btn-lg" onClick={clearForms} >
            Clear{" "}
          </Button>
          )}
        
      </form>
        </div>
          </Card>
         </Col>
      </Row > 
    </Container>
   
  );
}


