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
        console.log("match: " + match)
        console.log("matchid: " + match.params.id)
        this.setState({ userId: match.params.id })
        this.state.userId = match.params.id
        console.log(this.state)
    }

    componentDidMount() {
        console.log('component mounted, id: ' + this.state.userId)
        API.getGoogleUser(this.state.userId).then((res) => {
            console.log("res in getGoogleUser: " + res)
            console.log(res.data)
            console.log("res.data.email: " + res.data.email)
            if(res.data.length === 0) { return }
            this.setState({
                email: res.data.email,
                firstname: res.data.name,
                lastname: res.data.family_name,
                image: res.data.picture,
                zip: res.data.zip
            })
        })
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

            <div style={{marginTop: '5%'}}>
                {/* <img src={this.state.image} alt="profile image"></img> */}
                <div>First name: {this.state.firstname}</div>
                <div>Last name: {this.state.lastname}</div>
                <div>Email: {this.state.email}</div>


//             <div>
//                 <br></br>
//                 <br></br>
//                 <br></br>
//                 <br></br>
//             <UserCard>
//                 <div>
//                     <img src={this.state.image} alt="profile image"></img>
//                     <h1 class="userName">{this.state.firstname} {this.state.lastname}</h1>
//                     <p class="email">{this.state.email}</p>
//                 </div>
//             </UserCard>

            </div>
        );
    }
}

export default UserInfos;