import { useState, useEffect } from "preact/hooks";

const CurrentTime = ({ children, alertMessage }) => {
  const [date, setDate] = useState(false);
  useEffect(() => {
    const date = new Date();
    let now = date.toLocaleString()
    setDate(now)

  }, []);

  return (
    <p>the current time is {date}</p>
  );
};

export default CurrentTime;
