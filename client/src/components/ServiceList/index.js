import React from "react";
// import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function ServiceList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function ServiceListItem({
  key,
  title,
  zip,
  time,
  date,
  notes,
  available
 
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            {/* <Thumbnail src={image} /> */}
          </Col>
          <Col size="xs-8 sm-9">
            <p>Service:{title}</p>
            <p> Notes: { notes}</p>
            <p> Zip: {zip}</p>
            <p> Time: {time}</p>
            <p> Date: { date}</p>
            {/* <a rel="noreferrer noopener" target="_blank" href= {available}>
              Go to the Contact info!
            </a> */}
            <button> Available?</button>
          </Col>
        </Row>
      </Container>
    </li>
  );
}





