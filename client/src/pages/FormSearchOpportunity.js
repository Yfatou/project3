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
    available: false
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    // const { name, value } = event.target; 
    const name=event.target.name;
    const value=event.target.value;

    this.setState({
      //[name] = "inputSearch"
      [name]: value,
    });
  };

  

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get service update the services state
    event.preventDefault();
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











