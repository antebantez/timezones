import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classes from "/public/Cities.module.css";

import { Card } from "react-bootstrap";
import { Table } from "react-bootstrap";

export default function Cities() {
  const [city, setCity] = useState([]);

  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/cities/:city");
  };

  useEffect(async () => {
    setCity(await (await fetch("./json/cities.json")).json());
  }, []);

  return (
    <div className={classes.card}>
      <Card className={classes.citiesCard} style={{ width: "60rem" }}>
        <Table responsive="lg" borderless>
          <thead>
            <tr>
              <td>
                <div className={classes.row}>
                  {city.slice(0, 4).map(({ city, flagImage, id }) => (
                    <Card.Text className={classes.city} onClick={clickHandler}>
                      <div>
                        <img className={classes.flagImage} src={flagImage} />
                      </div>
                      <div>
                        <p className={classes.cityName}>{city}</p>
                      </div>
                    </Card.Text>
                  ))}
                </div>
              </td>
              <td>
                <div className={classes.row}>
                  {city.slice(4, 8).map(({ city, flagImage, id }) => (
                    <Card.Text className={classes.city} onClick={clickHandler}>
                      <div>
                        <img className={classes.flagImage} src={flagImage} />
                      </div>
                      <div>
                        <p className={classes.cityName}>{city}</p>
                      </div>
                    </Card.Text>
                  ))}
                </div>
              </td>
              <td>
                <div className={classes.row}>
                  {city.slice(8, 12).map(({ city, flagImage, id }) => (
                    <Card.Text className={classes.city} onClick={clickHandler}>
                      <div>
                        <img className={classes.flagImage} src={flagImage} />
                      </div>
                      <div>
                        <p className={classes.cityName}>{city}</p>
                      </div>
                    </Card.Text>
                  ))}
                </div>
              </td>
              <td>
                <div className={classes.row}>
                  {city.slice(12, 16).map(({ city, flagImage, id }) => (
                    <Card.Text className={classes.city} onClick={clickHandler}>
                      <div>
                        <img className={classes.flagImage} src={flagImage} />
                      </div>
                      <div>
                        <p className={classes.cityName}>{city}</p>
                      </div>
                    </Card.Text>
                  ))}
                </div>
              </td>
              <td>
                <div className={classes.row}>
                  {city.slice(16, 20).map(({ city, flagImage, id }) => (
                    <Card.Text className={classes.city} onClick={clickHandler}>
                      <div>
                        <img className={classes.flagImage} src={flagImage} />
                      </div>
                      <div>
                        <p className={classes.cityName}>{city}</p>
                      </div>
                    </Card.Text>
                  ))}
                </div>
              </td>
            </tr>
          </thead>
        </Table>
      </Card>
    </div>
  );
}
