import React from 'react';
import axios from 'axios'
import MovieEntry from './movieEntry.jsx'
import { Grid, Row, Col } from 'react-bootstrap'

class MovieList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			savedMovies: []
		}
		this.deleteMovie = this.deleteMovie.bind(this)
	}
	componentDidMount() {
		var context = this;
		axios.get('/api/savedMovies', {
			headers: {
				user: this.props.user
			}
		})
		.then(resp => {
			context.setState({
				savedMovies: resp.data
			})
		})
		.catch(err => {
			console.log('error in fetching user\'s movies', err)
		})
	}
	deleteMovie(index) {
		var prevMovieList = this.state.savedMovies
		var removed = prevMovieList.splice(index, 1)
		this.setState({
			savedMovies: prevMovieList
		})

		//axios.delete removed
	}

 render () {
	var movies = this.props.movies
	var user = this.props.user
	var savedMovieEntries = this.state.savedMovies.map((movie, i) => {
		return <li key={i} onClick={()=>{this.deleteMovie(i)}} >{movie}</li>
	})
	var staffMovies = this.props.staffMovies
	console.log('movies at render is', movies)
	console.log('saved movies for', this.props.user, 'are', savedMovieEntries)
	return(
		<div>
			<h1 className="text-center">Most popular</h1>
			<Grid>
				<Row>
				{movies.map((movie, i) => (
			        <MovieEntry
				        key={i}
								openDetails = {this.props.openDetails}
				        movie={movie} />
			     	))}
					  {/* <Col sm={2} md={2} className="descriptionPage">
			      	<p>Hello {user}!</p>
			      	<p>Your saved movies</p>
			      	<ul>
			      		{savedMovieEntries}
			      	</ul>
			      </Col> */}
				</Row>
			</Grid>
			<h1 className="text-center">Staff Recommendations</h1>
			<Grid>
				<Row>
				{staffMovies.map((movie, i) => (
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
