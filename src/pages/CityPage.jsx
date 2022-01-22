import classes from "/public/CityPage.module.css";

import { Row, Col, Container } from "../utilities/components-bootstrap";

export default function CityPage(props) {
  let { list, goToCityList } = props;
  let { id, city, country, UTC, time_zone, facts, image } = list;

  return (
    <Container>
      <div key={id} className={classes.cityDetails}>
        <Row>
          <Col>
            <h1>{city}</h1>
            <h2>{country}</h2>
          </Col>
          <Col>
            <div>
              <p>
                {time_zone} {UTC}{" "}
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <p>{facts}</p>
          </Col>
          <Col>
            <img src={image} />
          </Col>
        </Row>

        <Row>
          <button className={classes.back} onClick={() => goToCityList(0)}>
            Back
          </button>
        </Row>
      </div>
    </Container>
  );
}
