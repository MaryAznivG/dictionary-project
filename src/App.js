import React from "react";
import logo from "./dictionary-logo.png";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
          Dictionary
        </header>
        <main>
          <Dictionary defaultKeyword="Hello" />
        </main>
        <footer className="App-Footer">
          This project was coded by{" "}
          <a
            href="href=https://www.linkedin.com/in/aznivgalstyan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Azniv Mary Galstyan
          </a>
        </footer>
      </div>
    </div>
  );
}
