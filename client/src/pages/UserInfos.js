import React, {Component} from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import Card from "../components/Card";
import { Input, FormBtn } from "../components/Form";
import Footer from "../components/Footer";

class UserInfos extends Component {

    state = {
        user: [],
        email: sessionStorage.getItem("userEmail"),
        firstname: sessionStorage.getItem("userFirstName"),
        lastname: sessionStorage.getItem("userLastName"),
        image: sessionStorage.getItem("userPic"),
        zip: ""
      };

    componentDidMount() {
        // this.getUser();
        console.log("storage" + sessionStorage.getItem("response"));
    }

    handleFormSubmit = event => {
        event.preventDefault();
        
        if (this.state.firstname && this.state.lastname) {
          API.saveUser({
            email: this.state.email,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            zip : this.state.zip
          })
            .then(res => this.loadUser())
            .catch(err => console.log(err));
        }
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };


    render(){
  
        
        return(
            <div>
                <Jumbotron>SeniorNextDoor</Jumbotron>
                <Card>
                    
                    {/* <div className="cardHeader title" > */}
                    <div className="card flex-row flex-wrap cardHeader">
                        <div className="card-header border-0 userPic">
                            <img src={this.state.image} alt="" className="center" />
                        </div>
                        <div className="card-block px-6">
                            <h1 className="card-title title">Welcome {this.state.firstname} </h1>
                        </div>
                        {/* <h1 >Welcome {this.state.firstname} </h1> */}
                    </div>
                    
                    <div className="cardBody">
                        <form >
                            <Input
                                value={this.state.firstname}
                                onChange={this.handleInputChange}
                                name="First Name"
                                placeholder="First Name (required)"
                            />
                            <Input
                                value={this.state.lastname}
                                onChange={this.handleInputChange}
                                name="Last Name"
                                placeholder="Last Name (required)"
                            />
                            <Input
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                name="Email"
                                placeholder="Email (required)"
                            />
                            <Input
                                value={this.state.zip}
                                onChange={this.handleInputChange}
                                name="zip"
                                placeholder="Zip (Optional)"
                            />
                            <FormBtn 
                                disabled={!(this.state.firstname && this.state.lastname && this.state.email)}
                                onClick={this.handleFormSubmit}
                            >
                                Save
                            </FormBtn>
                        </form>
                    </div>
                </Card>
                <Footer />
            </div>
        );
    }
}


export default UserInfos;