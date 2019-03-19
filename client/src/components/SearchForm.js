import React from "react";

class SearchForm extends React.Component{
    render(){
        return(
            <div>
                <form >
                    <input type="text" name ="zip" placeholder="Zip..."/>
                    <input type="text" name ="city" placeholder="City..."/>
                    <button>Search</button>
                </form>

            </div>
        
        );
    }
};

export default SearchForm;