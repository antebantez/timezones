import { useState } from "react";
import GetLocalTime from "./GetLocalTime";
import RemoveButton from "./RemoveButton";



export default function FavoriteList(props) {
  const [time, settime] = useState();
  let { utc, city, indexId, setAndSaveItems, stateList } = props;

  let background = {
    backgroundImage: `url("https://source.unsplash.com/random/440x360/?${city}")`,
  };

  return (
    <>
      <h3 className='FavoriteText'>Your Choices:</h3>
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

