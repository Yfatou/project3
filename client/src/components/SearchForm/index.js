import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.request array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="zip">Zip Code:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="zip"
          list="codes"
          type="integer"
          className="form-control"
          placeholder="Type in a zip code to begin with!"
          id="zip"
        />
        <datalist id="zipcodes">
          {props.results.map(result => (
            <option value={result} key={result} />
          ))}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
