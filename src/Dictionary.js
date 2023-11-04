import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);
  //everytime the state changes it's going render again with a new data. Basically, we want the definition to change everytime the result does so therefore we create a state called results. have a default word when the page loads

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
    /* so it won't reload the page and add event to the property too^ */
  }

  function search() {
    //documentation:http://dictionaryapi.dev/ (api link)
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);
    /* whenever we want to change the state we use setkeyword  */

    let pexelsApiKey =
      "bxtCP1APBftxGFSK9iT97jznZyZ59bSqY3b5HiBU7Y3O6PgKNglWq7ZP";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;

    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="search a word"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">
            suggested words: sunset, wine, yoga, love, forest...
          </div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
  /*add a eventlister on the form "onSubmit" whenever someone submits the form we can call a function "search" then we need to define this function in the component ^  */
  /* To know the value what it's searching we must add usestate^ So whenever a person types or changes a word it's going to be the handleKeywordChange function*/
}
