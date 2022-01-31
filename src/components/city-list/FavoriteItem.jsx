import { useState } from "react";
import GetLocalTime from "./GetLocalTime";
import RemoveButton from "./RemoveButton";



export default function FavoriteList(props) {
  const [time, settime] = useState();
  let { utc, city, indexId, setAndSaveItems, stateList } = props;

  let background = {
    backgroundImage: `url("https://source.unsplash.com/random/800x360/?${city}")`,
  };

  return (
    <>
      
      {utc && (

        <div className="favoriteCity" style={background}>
          
          <div className="content-city">
       
            <p>{city}             </p>
            <GetLocalTime offset={utc} settime={settime} />
          </div>
          <RemoveButton buttonId={indexId} setAndSaveItems={setAndSaveItems} stateList={stateList} />
          </div>
        
       
      )}
    </>
  );
}

