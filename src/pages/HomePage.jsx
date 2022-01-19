import classes from "/public/HomePage.module.css";
import { Card } from "react-bootstrap";
import DigitalClock from "../components/DigitalClock";

export default function Cities() {
  return (
    <div className="container" style={{ marginTop: "10%" }}>
      <Card className={classes.backgroundCard}>
        <div className="row">
          <div
            className="col-lg-5  col-md-5 bg-white "
            style={{ height: "30vh" }}
          ></div>
          <div className="col-lg-2"></div>
          <div
            className="col-lg-5 col-md-5 bg-secondary "
            style={{ height: "30vh" }}
          ></div>
        </div>
        <div className="row">
          <div className="col-12 text-white text-center">
            <DigitalClock />
          </div>
        </div>
      </Card>
    </div>
  );
}
