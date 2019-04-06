# SeniorNextdoor

## Description
Welcome to "SeniorNextDoor".
This app has been built with elderly people leaving alone in mind.
In this busy and active world, the elder often found themselves in an empty house once all the childrens are gone. Thus, daily activities like grocery shopping, lawn mowing, dog walking become hard to do. In the meantime, there is usually someone in the neighbourhood like an high school student that need volunteer hours who is willing to help but how to connect them? 
__SeniornextDoor is here to help!!__


The app will have two purposes:
 - Allows the requester - the elder -  to post a volunteer opportunity.
 - Give the "provider" the option to look for volunteer opportunities in a choosen area.



Click here https://seniornextdoor-live1.herokuapp.com/ to access to the deployed version of the app.


## How to request help?
After the user logged in with google, he/she is redirected to the options page. 
The user can then chose the optin "Post a service request", a form will allow the user to enter all the informations concerning the request.
Name, email, zipcode and date of the requested services should be entered.
After submitting the request, a message will tell the user that the request have been submitted.



![](SeniorNextDoor_demo1.gif)



## How to look for Volunteer opportunities?
To look for Volunteer opportunities the user will, after login, choose the option "Find a Volunteer opportunity".
He will then be redirected to a Search opportunities page with a search form. The user can then enter a zipcode to see all the requests in the chosen area.
For each request, a button "I'm IN" is available. 
When the volunteer click on the "I'm IN" button, he/she will be redirected to a contact form. Once filled, the informations in the form will be sent to the requester.

The requester can then contact the volunteer.

For safety purpose, we choosed to not let the Volunteer contact the requester directly.

![](SeniorNextDoor_demo2.gif)

![](SeniorNextDoor_demo3.gif)



## How is SeniorNextDoor built
The app is built with ReactJS. 
It uses the npm packaged react-google-login to log the user and the informations - user and services - are stored in a Mongoose database.
Once the user logged in SeniorNextDoor, the informations provided by Google are stored in a Mongoose collection __googles__. 
If the user has previously visited the app, his/hers informations are not stored a second time.

Requested services are also stored in a Mongoose collection __services__. Every service is linked to the profile of the requester.




## Technologies used
 * ReactJS
 * ReactStrap
 * React-Googgle-Login
 * Javascript
 * [Node.js]Download the latest version of Node https://nodejs.org/en/
 * Express
 * MongoDB/Mongoose
 * NodeMailer
 * Materialize
 * Bootstrap
 * HTML
 * Animated CSS
 * CSS
 


## How to setup SeniorNextDoor locally
To use SeniorNextDoor application from a local environment, the following steps will be necessary:
 
 1. Clone this repo using the command line on the terminal: __git clone https://github.com/Yfatou/project3.git__

 2. Open the cloned repo, rename the existing client folder and create a new react app by typing create-react-app client at the root of the cloned repo.

 3. Replace the src and public folder just created by the one in the renamed client folder.

 4. Open the new client folder and copy the line __"proxy": "http://localhost:3001/",__ after "private": true,

 5. Type npm run build.

 6. Follow the instructions and install the packages missing.

 7. Type npm run build again until the build is successful (repeat steps 6 and 7 as needed).

 8. Start the application from the command line to the root level: npm start.


## Future developments
For the future, enhancements could be added to this application:
 * Add a points system so that users can keep track of how many volunteer hours they have.
 * Add a rating system so that users can be validated.
 * Give the user the option to edit their profile.
 * Add a recommendations system so that users can build trust.


## Contributors to this project (GitHub account)
 - Darakshan Ahmed (https://github.com/dara9234)
 - Syeda Ahmed (https://github.com/sahmed1035)
 - Eileen Sul (https://github.com/eilsul10)
 - Fatou Thiam (https://github.com/Yfatou)

