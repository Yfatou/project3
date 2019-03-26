import React, {Component} from "react";
import Jumbotron from "../components/Jumbotron";
// import GoogleLogin from "react-google-login";
import API from "../utils/API";
import Card from "../components/Card";
import { Input, FormBtn } from "../components/Form";
import Footer from "../components/Footer";

class UserInfos extends Component {

    state = {
        user: [],
        email: "",
        first_name: "",
        last_name: "",
        zip: ""
      };

    componentDidMount() {
        this.getUser();
    }

    handleFormSubmit = event => {
        event.preventDefault();
        
        if (this.state.first_name && this.state.last_name) {
          API.saveUser({
            email: this.state.email,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
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
                    <div className="cardHeader title" >
                        <h1 >Welcome {this.first_name} </h1>
                    </div>
                    
                    <div className="cardBody">
                        <form >
                            <Input
                                value={this.state.first_name}
                                onChange={this.handleInputChange}
                                name="First Name"
                                placeholder="First Name (required)"
                            />
                            <Input
                                value={this.state.last_name}
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
                                disabled={!(this.state.first_name && this.state.last_name && this.state.email)}
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