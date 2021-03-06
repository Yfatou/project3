import React, { Component } from "react";

import SearchForm from "../components/SearchForm/index";
import API from "../utils/API";
import { List, ListItem } from "../components/List";


class FormSearchOpportunity extends Component {

  constructor(props) {
    super(props);
    this.state = {
      services: [],
      inputSearch: "",
      available: false,
      zip: ""
    };
    this.handleIMBtnSubmit = this.handleIMBtnSubmit.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    console.log(sessionStorage.getItem("VolunteerData"));
  }
  // When this component mounts, search for the services
  componentDidMount() {
    // this.searchServices();
  }

  searchServices = query => {

    API.getTheServices(this.state.inputSearch)
      .then(res => {
        console.log(res.data);
        this.setState({ services: res.data })

      }

      )
      .catch(err => console.log(err));

  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };
  handleIMBtnSubmit =   event => {
    event.preventDefault();
  };
  // When the form is submitted, search the db for the value of `this.state.inputSearch`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchServices(this.state.inputSearch);
  };

  render() {
    return (
      <div className="container " style={{ width: '90%', background: 'white', height: '80%', border: '2px solid', boxShadow: 'none', marginTop: '4%' }}>
        <div className="row">
          <div className=" col md-8 ">
            <div >
              <h6> {this.state.services.title || "Enter a zip code to Begin"} </h6>
              {/*  need to call the List component since we want to display multplie items */}
              {this.state.services.length ? (
                <List>
                  {
                    this.state.services.map(data => (

                      <ListItem key={data._id}
                        title={data.title}
                        zip={data.zip}
                        date={data.date}
                        time={data.time}
                        notes={data.notes}
                        profileId={data.requesterId}
                        IMButton={this.handleIMBtnSubmit}
                      >
                      </ListItem>
                    ))
                  }
                </List>
              ) : (
                  <h5>No Results to Display! Enter a Zip Code.</h5>
                )}

            </div>
          </div>
          <div className="col md-4 ">
            <div >
              <SearchForm
                value={this.state.inputSearch}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormSearchOpportunity;





















