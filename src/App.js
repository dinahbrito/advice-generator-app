import "./App.css";
import { useEffect, useState } from "react";
import dice from "./images/icon-dice.svg";
import dividerMobile from "./images/pattern-divider-mobile.svg";
import dividerDesktop from "./images/pattern-divider-desktop.svg";

function App() {
  const [text, setText] = useState([]);

  const fetchAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json();

    setText(data.slip)
  }

  useEffect(() => {
    fetchAdvice()
  }, [])

  return (
    <div className="container">
      <h1>Advice #{text.id}</h1>
      <p>{text.advice}</p>

      <picture>
        <source media="(min-width: 768px)" srcSet={dividerDesktop} />
        <img src={dividerMobile} alt="" />
      </picture>

      <div>
        <button onClick={fetchAdvice} ariaLable="Click">
          <img src={dice} alt="" />
        </button>
      </div>
    </div>
  );
}

export default App;
