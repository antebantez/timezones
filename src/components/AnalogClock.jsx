import React, { useEffect, useState } from "react";

//Importing A Clock component from node modules and it's css
import Clock from "react-clock";
import "react-clock/dist/Clock.css";

//get size from the component call where it is used
export default function AnalogClock(props) {
  const [value, setValue] = useState(new Date());
  //Making the analog clock update every second
  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);
    //returning clearInterval function to get rid of the memory leak from the analog clock
    return () => {
      clearInterval(interval);
    };
  }, []);
  //Set the size of the clock to the props.size
  return <Clock value={value} size={props.size} renderNumbers={true} />;
}
