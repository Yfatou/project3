import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import "./contactStyle.css";
import API from "../utils/API";
import ValidationModal from "../components/ValidationModal";

class ContactForm extends Component {
  //setting up  our states
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      phone: '',
      email: '',
      message: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.modalChild = React.createRef ();

  }
 
  //function handleChange
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  //function handleSubmit
  handleSubmit(e) {
    e.preventDefault() //preventing page refresh

    //declearing all of our states
    if (this.state.fname && this.state.email) {
      API.emailService({
       fname: this.state.fname,
        lname: this.state.lname,
        phone: this.state.phone,
        email: this.state.email,
        message: this.state.message
      })
        .then(res => {   
        'true'
        this.modalChild.current.handleShow();
        setTimeout(function(){ window.location.href="/send"; }, 1500);
        // window.location.href="/send"
       })
        .catch(err => console.log(err));
    }
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };


  render() {
    return (
      <div className="container wrapper  " style={{width:'90%', background:'white', height:'75%', border:'2px solid', boxShadow:'none', marginTop:'6%'}}>
      <h1 className="title">Contact the Senior</h1>
      
        <div className="row">
          <div className="col-md-3">
          <img className="card-img-top" src="https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/56300127_10162147879775455_2087679982204616704_n.jpg?_nc_cat=105&_nc_eui2=AeFG2Ql5-KwQdmxrcDxZREnmvjQ_2YhXgdXvoRqW4TdL3eEr_HhjPN-x96mxKabC8B2TpgSi7z7f2SlHcHrKDwukH2zakJfz3_x18OexqCy9sA&_nc_ht=scontent-ort2-2.xx&oh=88268b96cf29644db70feb32856f13e1&oe=5D4CC583" alt="Card image cap" />

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
              <div >
              <Button className="btn-success">SUBMIT</Button>
              </div>
             
            </Form>
          </div>
          <ValidationModal  ref={this.modalChild}>
              </ValidationModal>
          <div className="col-md-3">
          {/* empty */}
          </div>
        </div>
      </div>


    );
  }
}

export default ContactForm;