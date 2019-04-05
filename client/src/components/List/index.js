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
export function ListItem(props) {  
   //below are the actual attributes from <List> tag to be display as values that were stored in the attributes
  return <li className="list-group-item" data-id={props.key}>{" Title: "  + props.title } <br/> {"Zip: "+  props.zip}  <br/> {"Date: "+ props.date} <br/>{"Time: "+props.time } <br/> {"Notes: "+props.notes} <br/> <a href={"/UserInfos/" + props.profileId} target="_blank" rel="noopener noreferrer">Profile Link</a> <br/> {<a  className="btn btn-success"   href={"/send"} style={{color : "white"}}  >  I'M IN </a>}<br/></li>;
}
