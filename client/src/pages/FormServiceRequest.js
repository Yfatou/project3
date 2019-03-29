import React, { Component } from "react";
import API from "../utils/API";
// import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";
import Card from "../components/Card";

// import Calendar from 'react-calendar';



class FormServiceRequest extends Component {
  state = {
    services: [],
    title: "",
    time: "",
    zip: "",
    notes: "",
    date: new Date(),
    available: false
  };

  componentDidMount() {
    this.loadServices();
  }

  loadServices = () => {
    API.getServices()
      .then(res =>
        this.setState({ services: res.data, title: "", time: "", zip: "", notes: "", date: "", available: "" })
      )
      .catch(err => console.log(err));
  };

  deleteService = id => {
    API.deleteService(id)
      .then(res => this.loadServices())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onClickCalander = date => {

    this.setState({ date: this.state.date })
  };

 onBlur = event=>{
  const value  = event.target.value;
 
  this.setState({ date: value })

  // alert(value)
 }


  handleFormSubmit = event => {
    event.preventDefault();
    // alert("Hello from handleFormSubmit");
    if (this.state.title && this.state.zip) {
      API.saveService({
        title: this.state.title,
        zip: this.state.zip,
        notes: this.state.notes,
        date: this.state.date,
        time: this.state.time
      })
        .then(res => this.loadServices())
        .catch(err => console.log(err));
    }
  };



  render() {
    return (
      <div>

       
        <Card>
          <div id="title1" className="cardHeader title" >
            <h1 >What Assistance Would You Like To Request For?</h1>
          </div>
          <div id="card-body" className="cardBody">


            <form >
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Assistance Needed (required)"
              />
              <Input
                value={this.state.zip}
                onChange={this.handleInputChange}
                name="zip"
                placeholder="Zip (required)"
              />



              <div>
                <Input
                  id="datepicker"
                  
                  onBlur={this.onBlur}
 
                  placeholder="Date(required)"

                />
              </div>




              <Input

                value={this.state.time}
                onChange={this.handleInputChange}
                name="time"
                placeholder="Time (Optional)"

              />
              <TextArea
                value={this.state.notes}
                onChange={this.handleInputChange}
                name="notes"
                placeholder="Notes (Optional)"
              />

              <FormBtn
                disabled={!(this.state.zip && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Assistance Request
              </FormBtn>

            </form>
          </div>
        </Card>
      </div>
    );
  }
}

export default FormServiceRequest;
