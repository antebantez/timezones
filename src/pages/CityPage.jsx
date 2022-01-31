// Import SCSS file
import classes from "../sass/CityPage.module.scss";

// Import hooks
import { useEffect, useState } from "react";

// Import Bootstrap components
import { Row, Col, Card } from "../utilities/components-bootstrap";

// Import Analog Clock
import Clock from "react-clock";

// Function calculates time for given city UTC (time zone)
function calcTime(cityUTC) {
  let d = new Date();
  let utc = d.getTime() + d.getTimezoneOffset() * 60000;
  let nd = new Date(utc + 3600000 * cityUTC);

  // Gives dayTime variable a String
  // Depending on day time it gives either AM or PM
  let hour = nd.getHours();
  if (hour <= 11) {
    dayTime = "AM";
  } else {
    dayTime = "PM";
  }

  return nd.toLocaleTimeString();
}

// Variable that will hold either the AM or PM string
let dayTime = "";

export default function CityPage(props) {
  let { list, goToCityList } = props;
  let { id, city, country, UTC, time_zone, facts, image, flagImage } = list;

  // Variable calls the calcTime Function with a parameter
  let cityTime = calcTime(UTC);

  // This will keeps the time moving
  const [time, settime] = useState();
  useEffect(() => {
    setInterval(() => settime(cityTime), 800);
  });

  return (
    <div key={id} className={classes.cityDetails}>
      <Row className={classes.row}>
        <Col>
          <h1 className={classes.cityName}>{city}</h1>
          <h5 className={classes.country}>
            <img className={classes.flagImage} src={flagImage} />
            {country}
          </h5>
        </Col>
        <Col className={classes.timeZone}>
          <div className={classes.analogClock}>
            {/* Calls Clock from the import above */}
            <Clock value={cityTime} size={100} renderNumbers={true} />
          </div>
          <div>
            <div className={classes.digitalClock}>
              <h5 className={classes.timeZoneText}>{cityTime}</h5>
              <h5 className={classes.dayTime}>{dayTime}</h5>
            </div>
            <p>TimeZone: {time_zone}</p>
          </div>
        </Col>
      </Row>

      <Row className={classes.row}>
        <Col>
          <p>{facts}</p>
        </Col>
        <Col>
          <Card.Img src={image} />
        </Col>
      </Row>

      <Row className={classes.row}>
        <Col className={classes.BackButton}>
          {/* When Button is clicked the user will return to the cities page */}
          <button
            className={classes.backToList}
            onClick={() => goToCityList(0)}
          >
            Back
          </button>
        </Col>
      </Row>
    </div>
  );
}
