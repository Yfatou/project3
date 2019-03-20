import React from "react";

// import './App.css';

import SearchForm from './components/SearchForm';
import Navbar from './components/Navbar';

class App extends React.Component {
 

render() {
  return (
    <div className="App">
      <Navbar />
      <SearchForm />
      
     
    
    </div>
  );
}

}

export default App;