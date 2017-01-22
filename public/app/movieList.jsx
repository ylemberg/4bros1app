import React from 'react';
import axios from 'axios'
import MovieEntry from './movieEntry.jsx'

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
			{movies.map((movie, i) => (
		        <MovieEntry
			        key={i}
			        movie={movie} />
		     	))}
		</div>
		)
	}
}
export default MovieList