import React, { useEffect, useState } from "react";

function Clock() {
  const [digitalClockState, setDigitalClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setDigitalClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div
      style={{
        fontSize: "5vw",
        fontWeight: "bold",
        margin: "40px",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderRadius: "15px",
      }}
    >
      {digitalClockState}
    </div>
  );
}

export default Clock;
