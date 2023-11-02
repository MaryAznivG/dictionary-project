import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  //everytime the state changes it's going render again with a new data. Basically, we want the definition to change everytime the result does so therefore we create a state called results. have a default word when the page loads

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
    /* so it won't reload the page and add event to the property too^ */
  }

  function search() {
    //documentation:http://dictionaryapi.dev/ (api link)
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    /* whenever we want to change the state we use setkeyword  */
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
    /* whenever we want to change the state we use setkeyword  */
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleKeywordChange} />
          </form>
          <div className="hint">
            suggested words: sunset, wine, yoga, love, forest...
          </div>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
  /*add a eventlister on the form "onSubmit" whenever someone submits the form we can call a function "search" then we need to define this function in the component ^  */
  /* To know the value what it's searching we must add usestate^ So whenever a person types or changes a word it's going to be the handleKeywordChange function*/
}
