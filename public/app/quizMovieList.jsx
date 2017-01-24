import React from 'react';
import axios from 'axios'
import QuizMovieEntry from './quizMovieEntry.jsx'
import { Grid, Row, Jumbotron, Button } from 'react-bootstrap'


class QuizMovieList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

 render () {
	var movies = this.props.movies.slice(0)
	var front = movies[0]
	console.log('movies at render is', movies)
	return(
		<div>
			<Jumbotron>
	    	<h1>{front}</h1>
  	  	<p>Description of the movie and a bunch of other stuff</p>
    		<p><Button bsStyle="primary">Save for later</Button></p>

  		</Jumbotron>
  		<h1>Next closest picks</h1>
			<Grid>
				<Row>
					{movies.map((movie, i) => (
		        <QuizMovieEntry
			        key={i}
			        movie={movie} />
		     	))}
				</Row>
			</Grid>
		</div>
		)
	}
}
export default QuizMovieList