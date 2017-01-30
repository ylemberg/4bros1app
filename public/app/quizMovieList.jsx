import React from 'react'
import axios from 'axios'
import QuizMovieEntry from './quizMovieEntry.jsx'
import { Grid, Row, Jumbotron, Button, Col } from 'react-bootstrap'


class QuizMovieList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			front: this.props.movies[0]
		}
		this.changeFront = this.changeFront.bind(this)
	}

	changeFront(newFront) {
		this.setState({front: newFront})
	}

 render () {
	let movies = this.props.movies.slice(0)
	let front = this.state.front
	if (front === undefined) {
		front = {
			title: 'sorry could not find any matching movies',
			description: 'sorry could not find any matching movies',
			poster: 'sorry could not find any matching movies',
			title: 'sorry could not find any matching movies'
		}
	}
	console.log('movies at render is', movies)
	return(
		<div>
			<Jumbotron className = "searchResults">
				<Grid>
					<Row className = "searchResults">
						<Col sm={5} md={5}>
		  	  		<img className = "movieEntry" onClick={() => {this.props.openDetails(front)}} src={front.poster} />
		  	  	</Col>
		  	  	<Col sm={7} md={7}>
		  	  	<p>{front.title}</p>
		  	  	<p>{front.description}</p>
		  	  	</Col>
		    		<p>
		    			<Button bsStyle="default"
		    			onClick = {() => {this.props.openDetails(front)}}
		    			>See full description</Button>
		    		</p>
		    	</Row>
    		</Grid>
  		</Jumbotron>
  		<h1 className = "text-center">Next closest picks</h1>
			<Grid>
				<Row>
					<Col md={1}>
					</Col>
					{movies.map((movie, i) => (
		        <QuizMovieEntry
		        	front={front}
		        	changeFront={this.changeFront}
			        key={i}
			        movie={movie}
			        openDetails={this.props.openDetails}
			         />
		     	))}
				</Row>
			</Grid>
		</div>
		)
	}
}
export default QuizMovieList
