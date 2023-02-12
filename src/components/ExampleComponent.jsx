import { useState, useEffect } from "preact/hooks";
import "./example.css"

const ExampleComponent = ({ children, alertMessage }) => {
  const [isMounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <button
      disabled={!isMounted}
      onClick={() => window.alert(alertMessage)}
      className="example"
    >
      {children}
    </button>
  );
};

export default ExampleComponent;
