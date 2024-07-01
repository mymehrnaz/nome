import React from "react";
import weather from "./weather";
import forecast from "./forecast";
import footer from "./footer";
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        
        <h1>
          Weather App
        </h1>
        <weather/>
        <form>
      <input
        className="boor"
        type="search"
        placeholder="Enter a city.."
        
      />
      <button className="noor" type="Submit">
        Search
      </button>
    </form>
        
        <hr/>
        <forecast/>
        <footer/>
        <div>
        <footer>
          This project was coded by
          <a href="https://github.com/mymehrnaz/" target="_blank">{""}
            Mehrnaz Sadeghian{""}
          </a>
          and is
          <a href="https://github.com/mymehrnaz/nome" target="_blank">{""}
            on GitHub
          </a>
          and
          <a href="https://netlify.app/" target="_blank">
            hosted on Netlify
          </a>
        </footer>
      </div>
      </header>
    </div>
  );
}

export default App;
