import React, { Component } from "react";
// import Container from "./Container";
// import Row from "./Row";
// import Col from "./Col";
// import Card from "./Card";
import SearchForm from "../components/SearchForm";
// import MovieDetail from "../components/MovieDetail";
import API from "../utils/API";

class FormSearchOpportunity extends Component {
  state = {
    services: {},
    inputSearch: "",
    available: false,
    zip: ""
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.searchServices();
  }

  searchServices = query => {
    API.getTheServices(this.state.inputSearch)
      .then(res => this.setState({ services: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchServices(this.state.inputSearch);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className=" col md-8">
            <div >
              <h6> {this.state.services.title || "Search for zip code to Begin"} </h6>

              {this.state.services.zip ? (
                <div>
                  key={this.state.services._id}
                  title={this.state.services.title}
                  zip={this.state.services.zip}
                  date={this.state.services.date}
                  notes={this.state.services.notes}
                  time={this.state.services.time}
                </div>

              ) : (
                  <h3>No Results to Display</h3>
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


















// 7. copying App.js from activity 8. User Interface for search page.
// make sure all the components match
// 8. go to App.js in the main folder and add the route for this Google page.

// import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron";
// import Input from "../components/Input";
// import Button from "../components/Button";
// import DeleteBtn from "../components/DeleteBtn";
// import API from "../utils/API";
// import {ServiceList, ServiceListItem } from "../components/ServiceList";
// import { Container, Row, Col } from "../components/Grid";

// class FormSearchOpportunity extends Component {
//   state = {
//     services: [],
//     inputSearch: "",
//     available: false,
//     zip: ""
//   };

  // handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    // const { name, value } = event.target; 
    // const name=event.target.name;
    // let value=event.target.value;

    // if(name==="zip"){
    //   value = value.services;
    // }

    // this.setState({
      //[name] = "inputSearch"
  //     [name]: value,
  //   });
  // };


  // handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get service update the services state
  //   event.preventDefault();
  //   if (!this.state.zip) {
  //     alert ("Please enter the Zip")
  //   }
  //   API.getServices(this.state.inputSearch)
  //     .then(res => this.setState({ services: res.data }))
  //     .catch(err => console.log(err));
  //     console.log(this.state.services);
  // };

  // render() {
  //   return (
  //     <div>
  //       <Jumbotron />
  //       <Container>
  //         <Row>
  //           <Col size="md-12">
  //             <form>
  //               <Container>
  //                 <Row>
  //                   <Col size="xs-9 sm-10">
  //                     <Input
  //                       name="inputSearch"
  //                       value={this.state.inputSearch}
  //                       onChange={this.handleInputChange}
  //                       placeholder="Zip..."
  //                     />
  //                   </Col>
  //                   <Col size="xs-3 sm-2">
  //                     <Button
  //                       onClick={this.handleFormSubmit}
  //                       type="success"
  //                       className="input-lg"
  //                     >
  //                       Search for Volunteer Opportunities
  //                     </Button>
  //                   </Col>
  //                 </Row>
  //               </Container>
  //             </form>
  //           </Col>
  //         </Row>


          // <Row>
          //   <Col size="xs-12">
          //     {this.state.services.zip ? (

          //       <ServiceList>
          //       {this.state.services.map(service => (
          //          <ServiceListItem 
          //              key={service._id}
          //               title={service.title} 
          //               zip={service.zip}
          //               date={service.date} 
          //               notes= {service.notes}
          //               time= {service.time} 
                       //  <button>Available{service.available }</button>
                     //  </strong>
                   //  {/* </Link> */}
                   //  <DeleteBtn onClick={() => this.deleteService(service._id)} />

//                    />
//                ))}
//              </ServiceList>
//               ) : (
//                 <h1 className="text-center">No Opportunities available in your selected area.</h1>
//               )}
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     );
//   }
// }

// export default FormSearchOpportunity;








