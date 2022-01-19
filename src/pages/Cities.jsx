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
        <div className={classes.row}>
          {city.slice(0, 4).map(({ city, flagImage, id }) => (
            <Card.Body key={id} className={classes.cardBody}>
              <Card.Text className={classes.city} onClick="#">
                <img className={classes.flagImage} src={flagImage} />
                <p className={classes.cityName}>{city}</p>
              </Card.Text>
            </Card.Body>
          ))}
        </div>
        <div className={classes.row}>
          {city.slice(4, 8).map(({ city, flagImage, id }) => (
            <Card.Body key={id} className={classes.cardBody}>
              <Card.Text className={classes.city} onClick="#">
                <img className={classes.flagImage} src={flagImage} />
                <p className={classes.cityName}>{city}</p>
              </Card.Text>
            </Card.Body>
          ))}
        </div>
        <div className={classes.row}>
          {city.slice(8, 12).map(({ city, flagImage, id }) => (
            <Card.Body key={id} className={classes.cardBody}>
              <Card.Text className={classes.city} onClick="#">
                <img className={classes.flagImage} src={flagImage} />
                <p className={classes.cityName}>{city}</p>
              </Card.Text>
            </Card.Body>
          ))}
        </div>
        <div className={classes.row}>
          {city.slice(12, 16).map(({ city, flagImage, id }) => (
            <Card.Body key={id} className={classes.cardBody}>
              <Card.Text className={classes.city} onClick="#">
                <img className={classes.flagImage} src={flagImage} />
                <p className={classes.cityName}>{city}</p>
              </Card.Text>
            </Card.Body>
          ))}
        </div>
        <div className={classes.row}>
          {city.slice(16, 20).map(({ city, flagImage, id }) => (
            <Card.Body key={id} className={classes.cardBody}>
              <Card.Text className={classes.city} onClick="#">
                <img className={classes.flagImage} src={flagImage} />
                <p className={classes.cityName}>{city}</p>
              </Card.Text>
            </Card.Body>
          ))}
        </div>
      </Card>
    </div>
  );
}
