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
		if (movie === undefined) {
			movie = {title: 'sorry, could not find any more results', thumbnail: 'not found', genres:['not found']}
		}
		var front= this.props.front
		var style = movie === front ? {border: 1+'px solid red'} : {border: 1+'px solid black'}
		console.log('this movie is', movie.title, 'and is from', movie.year)
		console.log('this movie has an imdb rating of', movie.imdb)
		console.log('this movie genres are', movie.genres.join(','))
	  return (
	  <div>
		  	<Col sm={2} md={2} style={style}
		  	onMouseEnter = {() => {this.props.changeFront(movie)}}
		  	onClick = {() => {this.props.openDetails(movie)}}
		  	>
		  		<img src={movie.thumbnail}/>
      		<p>{movie.title}</p>
		  	</Col>
	  </div>
	  );
	}
}

export default QuizMovieEntry

