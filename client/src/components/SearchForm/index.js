import React from "react";
import "./style.css";
const SearchForm = (props) => {
  return (
    <form>
      <div className="form-group">
        <label ><h3 style={{color:'black'}}>Search Your Neighborhood For Volunteer Opportunities:</h3></label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="inputSearch"
          type="text"
          className="form-control"
          placeholder="Enter a Zip Code to Begin"
          id="zip"
        />
        <br />
        <button onClick={props.handleFormSubmit} className="btn btn-large btn-success">
         Submit Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
