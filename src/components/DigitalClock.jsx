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
    <div style={{ fontSize: "80px", fontWeight: "bold", margin: "60px" }}>
      {digitalClockState}
    </div>
  );
}

export default Clock;
