import React from "react";
import QuoteCard from "./components/QuoteCard";
import './App.css';

const firstQuote = {
  "quote": "Eat my shorts",
  "character": "Bart Simpson",
  "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638",
  "characterDirection": "Right"
  }

};


function App() {
  return (
    <div className="App">
      <QuoteCard />
      <button type="button" onClick={getQuote}>
        Get a new quote!
      </button>
      
    </div>
  );
}

export default App;
