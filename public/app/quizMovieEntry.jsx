import React from 'react';
import axios from 'axios'
import { Col } from 'react-bootstrap'

class QuizMovieEntry extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}

	render() {
		var movie = this.props.movie
		var frontId = this.props.frontId
	  return (
	  <div>
		  {movie === frontId ? 
	      <Col sm={2} md={2} style={{border: 1+'px solid red'}}>{movie.title}</Col>
		  	:
		  	<Col sm={2} md={2} style={{border: 1+'px solid black'}}
		  	onClick = {() => {this.props.changeFront(movie)}}>{movie.title}</Col>
		  }
	  </div>
	  );
	}
}

export default QuizMovieEntry

