import React, { useState } from "react";
import QuoteCard from "./components/QuoteCard";
import axios from "axios";

const firstQuote = {
  quote: "Eat my shorts",
  character: "Bart Simpson",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638",
  characterDirection: "Right",
};

function App() {
  const [quote, setQuote] = useState(firstQuote);
  const getQuote = () => {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes?count=5")
      .then((response) => response.data)
      .then((data) => {
        setQuote(data);
      });
  };

  return (
    <div className="App">
      <QuoteCard quote={quote} />
      <button type="button" onClick={getQuote}>
        Get a new quote!
      </button>
    </div>
  );
}

export default App;
