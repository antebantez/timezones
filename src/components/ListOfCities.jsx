import classes from "/public/Cities.module.css";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ListOfCities(props) {
  let { list, goToDetail } = props;
  let { id, city, flagImage } = list;
  return (
    <Row>
      <Col>
        <div className={classes.row}>
          <Card.Text className={classes.city} onClick={() => goToDetail(id)}>
            <div>
              <img className={classes.flagImage} src={flagImage} />
            </div>
            <div>
              <p className={classes.cityName}>{city}</p>
            </div>
          </Card.Text>
        </div>
      </Col>
    </Row>
  );
}
