import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    fetch("/hello")
      .then((response) => response.json())
      .then((data) => setCount(data.count));
  }, []);
  return (
    <div className="App">
      <h1>Page count: {count}</h1>
    </div>
  );
}

export default App;