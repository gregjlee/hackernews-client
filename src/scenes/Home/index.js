import React, { Component } from 'react';
import axios from 'axios';
import { 
  Form,
  FormGroup,
  FormControl,
} from 'react-bootstrap';
class Home extends Component {
  //create post form
  //submit button
  //list of your posts + pagination

  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
  }

  validatePost() {
    return null;
  }

  handleTextChange = (event) => {
    this.setState({ value: event.target.value });
  }

  render() {
    return(
      <Form>
        <FormGroup
          controlId="CreatePost"
        >
          <ControlLabel>Whats Poppin?</ControlLabel>
          <FormControl 
            type="text"
            value={this.state.value}
            placeholder="say some-sing"
            onChange={this.handleTextChange}
          />
        </FormGroup>
      </Form>
    );
  }
}

export default Home;