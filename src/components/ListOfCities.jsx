// Import for SCSS file
import classes from "../sass/Cities.module.scss";

// Imports for bootstrap
import { Card } from "../utilities/components-bootstrap";

export default function ListOfCities(props) {
  let { list, goToDetail } = props;
  let { id, city, flagImage } = list;
  return (
    <td>
      <div className={classes.row}>
        <Card.Text className={classes.city}>
          <div>
            {/* Outputs image from json file */}
            <img className={classes.flagImage} src={flagImage} />
          </div>
          <div>
            {/* Outputs city name */}
            {/* If clicked the detailed page for the clicked city is outputted */}
            <p className={classes.cityName} onClick={() => goToDetail(id)}>
              {city}
            </p>
          </div>
        </Card.Text>
      </div>
    </td>
  );
}
