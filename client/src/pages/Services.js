import React, { Component } from "react";

class Services extends Component {
  state = {
    services: [],
    service: "",
    available: false,
    time: "",
    date: ""
  };

  componentDidMount() {
    this.loadServices();
  }

  loadServices = () => {
    API.getServices()
      .then(res =>
        this.setState({ services: res.data, service: "", available: "", time: "", data: "" })
      )
      .catch(err => console.log(err));
  };

  // deleteService = id => {
  //   API.deleteService(id)
  //     .then(res => this.loadServices())
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.service) {
      API.saveService({
        service: this.state.service,
        available: this.state.available,
        time: this.state.time,
        date: this.state.date
      })
        .then(res => this.loadServices())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Service Request Form</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.service}
                onChange={this.handleInputChange}
                name="service"
                placeholder="Service (required)"
              />
              <Input
                value={this.state.available}
                onChange={this.handleInputChange}
                name="available"
                placeholder="Available"
              />
              <Input
                value={this.state.time}
                onChange={this.handleInputChange}
                name="time"
                placeholder="Time "
              />
              <Input
                value={this.state.date}
                onChange={this.handleInputChange}
                name="date"
                placeholder="Date"
              />
              <FormBtn
                disabled={!(this.state.service)}
                onClick={this.handleFormSubmit}
              >
                Submit Service Request
              </FormBtn>
            </form>
          </Col>

          {/* <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col> */}
        </Row>
      </Container>
    );
  }
}

export default Services;
