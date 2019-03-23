import React, {Component} from "react";
import Jumbotron from "../components/Jumbotron";
import GoogleLogin from "react-google-login";
import API from "../utils/API";
import Card from "../components/Card";
import Footer from "../components/Footer"


class UserInfos extends Component {

    state = {
        user: [],
        email: "",
        first_name: "",
        last_name: "",
        zip: ""
      };



    // signup(res, type) {
    //     let postData;
    //     if (type === 'google' && res.w3.U3) {
    //         postData = {
    //             name: res.w3.ig,
    //             provider: type,
    //             email: res.w3.U3,
    //             provider_id: res.El,
    //             token: res.Zi.access_token,
    //             provider_pic: res.w3.Paa
    //         };
    //     }

    // DO WE NEED A LOAD USER 
    // componentDidMount() {
    //     this.loadUser();
    // } 
    
    // loadUser = id => {
    //     API.getUser()
    //       .then(res =>
    //         this.setState({ user: res.data, email: "", first_name:"", last_name: "", zip: "" })
    //       )
    //       .catch(err => console.log(err));
    //   };

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
  
        const responseGoogle = (response) => {
            console.log("google console");
            console.log(response);
            console.log(response.w3.ofa);
            console.log(response.w3.wea);
            console.log(response.w3.U3);
            
            // user = {
            //     first_name: response.w3.ofa,
            //     last_name: response.w3.wea,
            //     email: response.w3.U3
            // }
        }

        // const logout = (response) => {
        //     console.log("google console");
        //     console.log(response);
        // }
        return(
            <div>
                <Jumbotron>SeniorNextDoor</Jumbotron>
                <GoogleLogin
                    // clientId="702002442826-lnucl09e0ce578hh3n320kj3156ptdjp.apps.googleusercontent.com"
                    clientId="601157754613-0js8ncq3uld0pj9gp3vtf1insj3lacu4.apps.googleusercontent.com"
                    buttonText="Login with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                />
                <Footer />
            </div>
        );
    }
}


export default UserInfos;