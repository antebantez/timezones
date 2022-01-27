import OwnCity from "./OwnCity";
import { useState } from "react";

export default function AddCity(props) {
  let { stateList, setAndSaveItems, } = props;

  return (
    <>
      <OwnCity setAndSaveItems={setAndSaveItems} stateList={stateList} ></OwnCity>
    </>
  );
}

