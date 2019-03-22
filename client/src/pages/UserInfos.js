import React, {Component} from "react";
// import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
import Form from "../components/Form";


const GOOGLE_BUTTON_ID = 'google-sign-in-button';

class UserInfos extends Component {
  componentDidMount() {
    window.gapi.signin2.render(
      GOOGLE_BUTTON_ID,
      {
        width: 200,
        height: 50,
        onsuccess: this.onSuccess,
      },
    );
  }

  onSuccess(googleUser) {
    const profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    const userId = profile.getId;

    console.log("Name: " + profile.getName());
    const userName = profile.getName;

    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
    const userEmail = profile.getEmail;

  }
//   render() {
//     return (
//         <div>
//             <div id={GOOGLE_BUTTON_ID}/>
//             <form>
//                 <Input
//                     value ="userName"


//             </form>
//             <Footer />
//         </div>
//     );
  };

// IF THE USER RETRIEVE THE INFORMATIONS AFTER, MAYBE WE'LL NEED TO DO THE isSignedIn FUNCTION
// if (auth2.isSignedIn.get()) {
//     var profile = auth2.currentUser.get().getBasicProfile();
//     console.log('ID: ' + profile.getId());
//     console.log('Name: ' + profile.getName());
//     console.log('Image URL: ' + profile.getImageUrl());
//     console.log('Email: ' + profile.getEmail());
//   }


export default UserInfos;