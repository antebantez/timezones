import { useEffect } from "react";


export default function GetLocalTime(props) {
  let { offset, settime } = props;
  // create Date object for current location
  let date = new Date();

  // convert to milliseconds, add local time zone offset and get UTC time in milliseconds
  let utcTime = date.getTime() + date.getTimezoneOffset() * 60000;

  // time offset for the city
  let timeOffset = offset;

  // create new Date object for a different timezone using supplied its GMT offset.
  let time = new Date(utcTime + 3600000 * timeOffset);
  let hours = time.getHours();
  if (hours < 10) {
    hours = "0" + hours;
  }
  let minutes = time.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  let seconds = time.getSeconds();

  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  
  let localtime = hours + ":" + minutes + ":" + seconds;

  // inteval every second, updates the time.
  useEffect(() => {
   setInterval(() => settime(localtime), 800);
  });

  return (
    <>
      <p>{localtime}</p>
    </>
  );
}

