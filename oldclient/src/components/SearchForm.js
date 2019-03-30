import React from "react";

const SearchForm = (props) => {
  return (
    <form>
      <div className="form-group">
        <label >Search your area:</label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="inputSearch"
          type="text"
          className="form-control"
          placeholder="Search For Volunteer Oportunity"
          id="zip"
        />
        <br />
        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search Volunteer Opportunity 
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
