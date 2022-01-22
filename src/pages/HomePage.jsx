import DigitalClock from "../components/DigitalClock";
import classes from "/public/HomePage.module.css";
import { Card } from "react-bootstrap";
import AnalogClock from "../components/AnalogClock";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Cities() {
  return (
    <div className="container mt-5">
      <Card className={classes.backgroundCard}>
        <div className="row justify-content-center gap-5">
          <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 rounded text-white p-3 l-3">
            <AnalogClock />
          </div>

          <div className="col-lg-4 col-md-12 ">
            <Calendar />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 col-sm-12 col-xs-12 text-light text-center">
            <DigitalClock />
          </div>
        </div>
      </Card>
    </div>
  );
}
