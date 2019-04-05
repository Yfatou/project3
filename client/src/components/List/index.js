import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}
//passing the props object in as an argument. This case the props object gets destructed into the
//actual name of the attributes from FormSearchOpportunity.js-> <list> 
export function ListItem({ 
  key,  
  title,
  zip,
  date,
  notes,
  time,
  profileId 

 }) {  
   //below are the actual attributes from <List> tag to be display as values that were stored in the attributes
  return <li className="list-group-item" data-id={key}>{" Title: "  + title } <br/> {"Zip: "+  zip}  <br/> {"Date: "+ date} <br/>{"Time: "+time } <br/> {"Notes: "+notes} <br/> <a href={"/UserInfos/" + profileId} target="_blank">Profile Link</a> <br/> {<button className="btn btn-success" > I'M IN </button>}<br/></li>;

}
