import classes from "../sass/CityPage.module.scss";

import { useEffect, useState } from "react";

import { Row, Col, Card } from "../utilities/components-bootstrap";
import Clock from "react-clock";

function calcTime(offset) {
  let d = new Date();
  let utc = d.getTime() + d.getTimezoneOffset() * 60000;
  let nd = new Date(utc + 3600000 * offset);

  let hour = nd.getHours();
  if (hour <= 11) {
    dayTime = "AM";
  } else {
    dayTime = "PM";
  }

  return nd.toLocaleTimeString();
}

let dayTime = "";

export default function CityPage(props) {
  let { list, goToCityList } = props;
  let { id, city, country, UTC, time_zone, facts, image, flagImage } = list;

  let cityTime = calcTime(UTC);

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
