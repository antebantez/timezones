import classes from "/public/Cities.module.css";

import { Card } from "react-bootstrap";

export default function Cities() {
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
