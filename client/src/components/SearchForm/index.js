import React from "react";
import "./style.css";

const SearchForm = (props) => {
  return (
    <form>
      <div className="form-group jumbotron ">
      <div>
          <img className="card-img" src="https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/55924255_10162147759195455_8183430402883452928_n.jpg?_nc_cat=111&_nc_ht=scontent-ort2-2.xx&oh=e847a7bacd915af1d0a5e01154f6d414&oe=5D3DB245" alt="Card image cap" />
        </div>
        <label ><h3 style={{ color: 'black', width: '100%' }}>Search Your Neighborhood For Volunteer Opportunities:</h3></label>
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
        <button onClick={props.handleFormSubmit} className=" btn-large btn-success">
          Submit Search
        </button>
       
      </div>
    </form>
  );
}

export default SearchForm;
