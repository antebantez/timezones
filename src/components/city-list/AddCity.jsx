import OwnCity from "./OwnCity";

// Saving in Owncity
export default function AddCity(props) {
  let { stateList, setAndSaveItems, } = props;

  return (
    <>
      <OwnCity setAndSaveItems={setAndSaveItems} stateList={stateList} ></OwnCity>
    </>
  );
}

