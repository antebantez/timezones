import { useEffect, useState } from "react";

function Clock() {
  const [digitalClockState, setDigitalClockState] = useState();
  //getting the local computer clock and updates it every second
  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setDigitalClockState(date.toLocaleTimeString());
    }, 1000);
    //returning the clearinterval function to get
    // rid of memory leak from the digital clock
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      //inline style for the digital clock on the homepage
      style={{
        fontSize: "5vw",
        fontWeight: "bold",
        margin: "40px",
        borderRadius: "15px",
      }}
    >
      {/*displaying the updating clock-state */}
      {digitalClockState}
    </div>
  );
}

export default Clock;
