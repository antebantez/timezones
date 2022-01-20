import classes from "/public/CityPage.module.css";

export default function CityPage(props) {
  let { list, goToCityList } = props;
  let { id, city } = list;

  return (
    <div key={id} className={classes.cityDetails}>
      <h1>
        {city}
        <button className={classes.back} onClick={() => goToCityList(0)}>
          Back
        </button>
      </h1>
    </div>
  );
}
