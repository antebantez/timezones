import { useState, useEffect } from "react";

// Import for CSS file
import classes from "/public/Cities.module.css";

// Import for other files
import ListOfCities from "../components/ListOfCities";
import CityPage from "./CityPage";

// Imports for bootstrap
import { Card, Table, Container } from "../utilities/components-bootstrap";

export default function Cities() {
  const [city, setCity] = useState([]);

  const [detailId, setDetailId] = useState(0);

  // Fetch json items from json file
  useEffect(async () => {
    setCity(await (await fetch("./json/cities.json")).json());
  }, []);

  // Function for opening the more details page
  function goToDetail(id) {
    setDetailId(id);
  }

  // Function for going back to list of cities
  function goToCityList() {
    setDetailId(0);
  }

  return (
    <>
      <div className={classes.cardCities}>
        <Card className={classes.citiesCard} style={{ width: "60rem" }}>
          {/* Shows the list of available cities */}
          <Table borderless responsive="md">
            <tbody>
              <tr className={classes.row}>
                {/* outputs a specific amount of city names */}
                {!detailId &&
                  city
                    .slice(0, 4)
                    .map((list) => (
                      <ListOfCities key={list.id} {...{ list, goToDetail }} />
                    ))}
              </tr>
              <tr className={classes.row}>
                {!detailId &&
                  city
                    .slice(4, 8)
                    .map((list) => (
                      <ListOfCities key={list.id} {...{ list, goToDetail }} />
                    ))}
              </tr>
              <tr className={classes.row}>
                {!detailId &&
                  city
                    .slice(8, 12)
                    .map((list) => (
                      <ListOfCities key={list.id} {...{ list, goToDetail }} />
                    ))}
              </tr>
              <tr className={classes.row}>
                {!detailId &&
                  city
                    .slice(12, 16)
                    .map((list) => (
                      <ListOfCities key={list.id} {...{ list, goToDetail }} />
                    ))}
              </tr>
              <tr className={classes.row}>
                {!detailId &&
                  city
                    .slice(16, 20)
                    .map((list) => (
                      <ListOfCities key={list.id} {...{ list, goToDetail }} />
                    ))}
              </tr>
            </tbody>
          </Table>

          {/* Shows a more detailed page for the selected city */}
          <div>
            <Container>
              {detailId && (
                <CityPage
                  {...{
                    list: city.find((x) => x.id === detailId),
                    goToCityList,
                  }}
                />
              )}
            </Container>
          </div>
        </Card>
      </div>
    </>
  );
}
