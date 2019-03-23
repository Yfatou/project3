// 7. copying App.js from activity 8. User Interface for search page.
// make sure all the components match
// 8. go to App.js in the main folder and add the route for this Google page.

import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Input from "../components/Input";
import Button from "../components/Button";
// import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import {ServiceList, ServiceListItem } from "../components/ServiceList";
import { Container, Row, Col } from "../components/Grid";

class FormSearchOpportunity extends Component {
  state = {
    services: [],
    inputSearch: "",
    available: false,
    zip: ""
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    // const { name, value } = event.target; 
    const name=event.target.name;
    let value=event.target.value;

    // if(name==="zip"){
    //   value = value.services;
    // }

    this.setState({
      //[name] = "inputSearch"
      [name]: value,
    });
  };

  

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get service update the services state
    event.preventDefault();
    // if (!this.state.zip) {
    //   alert ("Please enter the Zip")
    // }
    API.getServices(this.state.inputSearch)
      .then(res => this.setState({ services: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="inputSearch"
                        value={this.state.inputSearch}
                        onChange={this.handleInputChange}
                        placeholder="Zip..."
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search for Volunteer Opportunities
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>


          <Row>
            <Col size="xs-12">
              {!this.state.services.length ? (
                <h1 className="text-center">No Opportunities available in your selected area.</h1>
              ) : (
                <ServiceList>
               {this.state.services.map(service => (
                  <ServiceListItem 
                    // {/* <Link to={"/services/" + service._id}> */}
                    //  <strong>
                      key={service._id}
                       title={service.title} 
                       zip={service.zip}
                       date={service.date} 
                       notes= {service.notes}
                       time= {service.time} 
                      //  <button>Available{service.available }</button>
                    //  </strong>
                  //  {/* </Link> */}
                  //  <DeleteBtn onClick={() => this.deleteService(service._id)} />
                   
                  />
              ))}
            </ServiceList>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default FormSearchOpportunity;



// import React from "react";
// import "./style.css";

// // Using the datalist element we can create autofill suggestions based on the props.breeds array
// function SearchForm(props) {
//   return (
//     <form className="search">
//       <div className="form-group">
//         <label htmlFor="breed">Zip Code:</label>
//         <input
//           value={props.search}
//           onChange={props.handleInputChange}
//           name="zip"
//           list="codes"
//           type="integer"
//           className="form-control"
//           placeholder="Type in a zip code to begin with!"
//           id="breed"
//         />
//         <datalist id="zipcodes">
//           {props.zipcodes.map(zip => (
//             <option value={zip} key={zip} />
//           ))}
//         </datalist>
//         <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
//           Search
//         </button>
//       </div>
//     </form>
//   );
// }

// export default SearchForm;

// form.search {
//   overflow: auto;
//   margin-bottom: 10px;
// }

// form.search button[type="submit"] {
//   float: right;
//   margin-top: 10px;
// }


// SEARCH
// import React, { Component } from "react";
// import API from "../utils/API";
// import Container from "../components/Container";
// import SearchForm from "../components/SearchForm";
// import SearchResults from "../components/SearchResults";
// import Alert from "../components/Alert";

// class Search extends Component {
//   state = {
//     search: "",
//     breeds: [],
//     results: [],
//     error: ""
//   };

//   // When the component mounts, get a list of all available base breeds and update this.state.breeds
//   componentDidMount() {
//     API.getBaseBreedsList()
//       .then(res => this.setState({ breeds: res.data.message }))
//       .catch(err => console.log(err));
//   }

//   handleInputChange = event => {
//     this.setState({ search: event.target.value });
//   };

//   handleFormSubmit = event => {
//     event.preventDefault();
//     API.getDogsOfBreed(this.state.search)
//       .then(res => {
//         if (res.data.status === "error") {
//           throw new Error(res.data.message);
//         }
//         this.setState({ results: res.data.message, error: "" });
//       })
//       .catch(err => this.setState({ error: err.message }));
//   };
//   render() {
//     return (
//       <div>
//         <Container style={{ minHeight: "80%" }}>
//           <h1 className="text-center">Search By Breed!</h1>
//           <Alert
//             type="danger"
//             style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
//           >
//             {this.state.error}
//           </Alert>
//           <SearchForm
//             handleFormSubmit={this.handleFormSubmit}
//             handleInputChange={this.handleInputChange}
//             breeds={this.state.breeds}
//           />
//           <SearchResults results={this.state.results} />
//         </Container>
//       </div>
//     );
//   }
// }

// export default Search;










