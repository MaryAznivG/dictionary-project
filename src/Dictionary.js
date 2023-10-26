import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  function search(event) {
    event.preventDefault();
    {
      /* so it won't reload the page and add event to the property too^ */
    }
    alert(`Searching for ${keyword} definition`);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
    {
      /* whenever we want to change the state we use setkeyword  */
    }
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        {" "}
        {/* add a eventlister on the form "onSubmit" whenever someone submits the form we can call a function "search" then we need to define this function in the component ^  */}
        <input type="search" onChange={handleKeywordChange} />{" "}
        {/* To know the value what it's searching we must add usestate^ So whenever a person types or changes a word it's going to be the handleKeywordChange function*/}
      </form>
    </div>
  );
}
