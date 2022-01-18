import { useState, useEffect } from "react";
import classes from "/public/Cities.module.css";

import { Card } from "react-bootstrap";

export default function Cities() {

  const [city, setCity] = useState([]);

  useEffect(async () => {
    setCity(await (await fetch("./json/cities.json")).json());
  }, []);

  console.log(city);

  return (
    <div className={classes.card}>
      <Card className={classes.citiesCard} style={{ width: "60rem" }}>
        <Card.Body className={classes.cardBody}>
          <div className={classes.citiesRow1}>
            <Card.Text as="h5">"City name"</Card.Text>
            <Card.Text as="h5">"City name"</Card.Text>
            <Card.Text as="h5">"City name"</Card.Text>
            <Card.Text as="h5">"City name"</Card.Text>
          </div>
          <div className={classes.citiesRow2}>
            <Card.Text as="h5">"City name"</Card.Text>
            <Card.Text as="h5">"City name"</Card.Text>
            <Card.Text as="h5">"City name"</Card.Text>
          </div>
          <div className={classes.citiesRow1}>
            <Card.Text as="h5">"City name"</Card.Text>
            <Card.Text as="h5">"City name"</Card.Text>
            <Card.Text as="h5">"City name"</Card.Text>
            <Card.Text as="h5">"City name"</Card.Text>
          </div>
          <div className={classes.citiesRow2}>
            <Card.Text as="h5">"City name"</Card.Text>
            <Card.Text as="h5">"City name"</Card.Text>
            <Card.Text as="h5">"City name"</Card.Text>
          </div>
          <div className={classes.citiesRow1}>
            <Card.Text as="h5">"City name"</Card.Text>
            <Card.Text as="h5">"City name"</Card.Text>
            <Card.Text as="h5">"City name"</Card.Text>
            <Card.Text as="h5">"City name"</Card.Text>
          </div>
          <div className={classes.citiesRow2}>
            <Card.Text as="h5">"City name"</Card.Text>
            <Card.Text as="h5">"City name"</Card.Text>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
