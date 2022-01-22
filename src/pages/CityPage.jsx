import classes from "/public/CityPage.module.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export default function CityPage(props) {
  let { list, goToCityList } = props;
  let { id, city, country, UTC, time_zone, facts, image } = list;

  return (
    <div key={id} className={classes.cityDetails}>
      <Row>
      <Col>
        <h1>{city}</h1>
        </Col>
        <Col>
          <div>
            <p>{time_zone} {UTC} </p>
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
  );
}
