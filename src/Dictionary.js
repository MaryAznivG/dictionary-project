import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  //everytime the state changes it's going render again with a new data. Basically, we want the definition to change everytime the result does so therefore we create a state called results.

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    /* so it won't reload the page and add event to the property too^ */

    //documentation:http://dictionaryapi.dev/ (api link)
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
    /* whenever we want to change the state we use setkeyword  */
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        {/* add a eventlister on the form "onSubmit" whenever someone submits the form we can call a function "search" then we need to define this function in the component ^  */}
        <input type="search" onChange={handleKeywordChange} />{" "}
        {/* To know the value what it's searching we must add usestate^ So whenever a person types or changes a word it's going to be the handleKeywordChange function*/}
      </form>
      <Results results={results} />
    </div>
  );
}
