import classes from "/public/CityPage.module.css";

import { Row, Col, Card } from "../utilities/components-bootstrap";

export default function CityPage(props) {
  let { list, goToCityList } = props;
  let { id, city, country, UTC, time_zone, facts, image, flagImage } = list;

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
          <div>
            <p className={classes.timeZoneText}>
              {time_zone} (UTC {UTC})
            </p>
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
