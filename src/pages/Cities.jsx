import { useState, useEffect } from "react";
import classes from "/public/Cities.module.css";

import { Card } from "react-bootstrap";

export default function Cities() {
  const [city, setCity] = useState([]);

  useEffect(async () => {
    setCity(await (await fetch("./json/cities.json")).json());
  }, []);

  return (
    <div className={classes.card}>
      <Card className={classes.citiesCard} style={{ width: "60rem" }}>
        {city.map(({ city, flagImage }) => (
          <Card.Body className={classes.cardBody}>
            <Card.Text>
              <div className={classes.city} onClick="#">
                <img className={classes.flagImage} src={flagImage} />
                <p className={classes.cityName}>{city}</p>
              </div>
            </Card.Text>
          </Card.Body>
        ))}
      </Card>
    </div>
  );
}
