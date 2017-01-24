import React from 'react';
import axios from 'axios'
import { Col } from 'react-bootstrap'


class movieEntry extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}
	render() {
	  return (
      <Col sm={2} md={2} style={{border: 1+'px solid black'}}>{this.props.movie}</Col>
	  );
	}
}

export default movieEntry

