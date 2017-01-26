import React from 'react';
import axios from 'axios'
import MovieEntry from './movieEntry.jsx'
import { Grid } from 'react-bootstrap'
import { Row } from 'react-bootstrap'

class MovieList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

 render () {
	var movies = this.props.movies
	console.log('movies at render is', movies)
	return(
		<div>
			<h1>Most popular</h1>
			<Grid>
				<Row>
				{movies.map((movie, i) => (
			        <MovieEntry
				        key={i}
						openDetails = {this.props.openDetails}
				        movie={movie} />
			     	))}
				</Row>
			</Grid>
			
			<h1>Highest Rated</h1>
			<Grid>
				<Row>
				{movies.map((movie, i) => (
			        <MovieEntry
				        key={i}
						openDetails = {this.props.openDetails}
				        movie={movie} />
			     	))}
				</Row>
			</Grid>

			<h1>Staff Recommendations</h1>
			<Grid>
				<Row>
				{movies.map((movie, i) => (
			        <MovieEntry
				        key={i}
						openDetails = {this.props.openDetails}
				        movie={movie} />
			     	))}
				</Row>
			</Grid>

		</div>
		)
	}
}
export default MovieList