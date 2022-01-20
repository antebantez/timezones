import { useState, useEffect } from "react";

import classes from "/public/Cities.module.css";

import ListOfCities from "../components/ListOfCities";
import CityPage from "./CityPage";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

export default function Cities() {
  const [city, setCity] = useState([]);

  const [detailId, setDetailId] = useState(0);

  useEffect(async () => {
    setCity(await (await fetch("./json/cities.json")).json());
  }, []);

  function goToDetail(id) {
    setDetailId(id);
  }

  function goToCityList() {
    setDetailId(0);
  }

  return (
    <>
      <div className={classes.card}>
        <Card className={classes.citiesCard} style={{ width: "60rem" }}>
          <Container>
            {/* Shows the list of available cities */}
            <div>
              {!detailId &&
                city.map((list) => (
                  <ListOfCities key={list.id} {...{ list, goToDetail }} />
                ))}
            </div>
            {/* Shows a more detailed page for the selected city */}
            <div>
              {detailId && (
                <CityPage
                  {...{
                    list: city.find((x) => x.id === detailId),
                    goToCityList,
                  }}
                />
              )}
            </div>
          </Container>
        </Card>
      </div>
    </>
  );
}
