
import "./App.css";
import { useEffect, useState } from "react"
import dice from "./images/icon-dice.svg";
import dividerMobile from "./images/pattern-divider-mobile.svg";
import dividerDesktop from "./images/pattern-divider-desktop.svg";

function App() {
  function fetchAdvice(){
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => setAdvice(data));
  }
  
  const [advice, setAdvice] = useState([]);
  useEffect(() => {
    fetchAdvice()
  }, []);


  return (
    <div className="container">
      <h1>Advice #{advice.slip.id}</h1>
      <p>{advice.slip.advice}</p>

      <picture>
        <source media="(min-width: 768px)" srcSet={dividerDesktop} />
        <img src={dividerMobile} alt="" />
      </picture>

      <div>
        <button onClick={fetchAdvice}>
          <img src={dice} alt="" />
        </button>
      </div>
    </div>
  );
}

export default App;
