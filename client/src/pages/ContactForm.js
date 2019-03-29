import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import axios from 'axios';
// import "./contactStyle.css";

class ContactForm extends Component {
  //setting up  our states
  state = {
    fname: '',
    lname: '',
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
    const { fname, lname, phone, email, message } = this.state

    const form = await axios.post('/send', {
      fname,
      lname,
      email,
      phone,
      message
    })
  }


  render() {
    return (
      <div className="container wrapper ">
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
                <Label className="label"  for="phone">Phone: </Label>
                <Input className="form-input"
                  type="text"
                  name="phone"
                  onChange={this.handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Label className="label" for="email">Email: </Label>
                <Input className="form-input"
                  type="email"
                  name="email"
                  onChange={this.handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Label className="label" for="message">Message: </Label>
                <Input className="form-input"
                  type="textarea"
                  name="message"
                  onChange={this.handleChange}
                />
              </FormGroup>

              <Button className="button">SUBMIT</Button>
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
