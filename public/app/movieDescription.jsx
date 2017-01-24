import React from 'react';
import axios from 'axios'


class movieDescription extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}
    render() {
	  return (
      <Col xs={6} md={4} style={{border: 1+'px solid black'}}>{this.props.movie}</Col>
	  );
	}
}

export default movieDescription 