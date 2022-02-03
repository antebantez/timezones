import { useEffect } from "react";

// create Date object for having current location
// convert to milliseconds, add local time zone offset and get UTC time in milliseconds
// time offset for the city.
// create new Date object for a the different timezone by using GMT timeOffset.
// updates the time by inteval every second.

export default function GetLocalTime(props) {
  let { offset, settime } = props;

  let date = new Date();

  let utcTime = date.getTime() + date.getTimezoneOffset() * 60000;

  let timeOffset = offset;

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

  useEffect(() => {
    const interval = setInterval(() => settime(localtime), 800);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <>
      <p>{localtime}</p>
    </>
  );
}
