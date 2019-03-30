import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import axios from 'axios';
import "./contactStyle.css";
import API from "../utils/API";

class ContactForm extends Component {
  //setting up  our states
  state = {
    fname: '',
    lname: '',
    phone: '',
    email: '',
    message: ''
  }


  //function handleChange
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  //function handleSubmit
  async handleSubmit(e) {
    e.preventDefault() //preventing page refresh

    //declearing all of our states
   // if (this.state.fname && this.state.lname && this.state.phone && this.state.email && this.state.message) {
      API.emailService({
       fname: this.state.fname,
        lname: this.state.lname,
        phone: this.state.phone,
        email: this.state.email,
        message: this.state.message
      })
        .then(res => true)
        .catch(err => console.log(err));
    //}
  
  };

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({ [name]: value });
  // };


  render() {
    return (
      <div className="container wrapper  ">
        <div className="row">
          <div className="col-md-3">
          {/* empty */}
          </div>
          <div className="col-md-6 ">
            <Form className="contact" onSubmit={this.handleSubmit} style={{ width: '800px'}} >
              <FormGroup>
                <Label className="label" for="fname">First Name: </Label>
                <Input className="form-input"
                  type="text"
                  name="fname"
                  onChange={this.handleChange}
                //to get the values out of the field. need to use onChange. 
                //need to define handleChange function
                />
              </FormGroup>

              <FormGroup>
                <Label className="label" for="lname">Last Name: </Label>
                <Input className="form-input"
                  type="text"
                  name="lname"
                  onChange={this.handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Label className="label fa fa-phone "  for="phone">Phone: </Label>
                <Input className="form-input"
                  type="text"
                  name="phone"
                  onChange={this.handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Label className="label fa fa-envelope" for="email">Email: </Label>
                <Input className="form-input"
                  type="email"
                  name="email"
                  onChange={this.handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Label className="label fa fa-sticky-note" for="message">Message: </Label>
                <Input className="form-input"
                  type="textarea"
                  name="message"
                  onChange={this.handleChange}
                />
              </FormGroup>

              <Button >SUBMIT</Button>
            </Form>
          </div>
          <div className="col-md-3">
          {/* empty */}
          </div>
        </div>
      </div>


    );
  }
}

export default ContactForm;
