import React from 'react';
import axios from 'axios'

class movieEntry extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}
	render() {
	  return (
	  	<p>{this.props.movie}</p>
	  );
	}
}

export default movieEntry

