import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./style.css";


class ValidationModal extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false,
      };

    //   console.log(this.props.show)
    //   console.log(this.state.show)
    //   console.log(props)

    }

    componentWillReceiveProps(newProps) {
        if(newProps.show !== this.state.show) {
            this.setState(newProps)
        }
    }
  
    handleClose() {
        console.log("handle close");
      this.setState({ show: false });
    }
  
    handleShow() {
        console.log("handle show");
      this.setState({ show: true });
    }
  
    render() {
      return (
        <div>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Success</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, your request has been submitted!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              {/* <Button variant="primary" onClick={this.handleClose}>
                Save Changes
              </Button> */}
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }
  
//   render(<ValidationModal />);


export default ValidationModal;