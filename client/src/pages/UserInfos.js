import React, {Component} from "react";
import API from "../utils/API";
import UserCard from "../components/UserCard";

class UserInfos extends Component {

    state = {
        user: [],
        email: "",
        firstname: "",
        lastname: "",
        image: "",
        zip: "",
        userId: ""
      };

    constructor({ match }) {
        super()
        this.setState({ userId: match.params.id })
        this.state.userId = match.params.id
    }

    componentDidMount() {
        API.getGoogleUser(JSON.parse(sessionStorage.volunteerData)._id).then((res) => {
            if(res.data.length === 0) { return }
            this.setState({
                email: res.data[0].email,
                firstname: res.data[0].name,
                lastname: res.data[0].family_name,
                image: res.data[0].picture,
                zip: res.data[0].zip
            })
        })
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
            <div style={{marginTop: '5%'}}>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <UserCard>
                    <div>
                        <img src={this.state.image} alt="profile image"></img>
                        <h1 class="userName">{this.state.firstname} {this.state.lastname}</h1>
                        <p class="email">{this.state.email}</p>
                    </div>
                </UserCard>
            </div>
        );
    }
}


export default UserInfos;