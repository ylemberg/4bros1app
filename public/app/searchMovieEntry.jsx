import React from 'react'
import { Grid, Row, Jumbotron, Button, Col } from 'react-bootstrap'

class SearchMovieEntry extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    var movie = this.props.movie
    var frontId = this.props.frontId
    var style = movie === frontId ? {border: 3 + 'px solid red'} : {border: 3 + 'px solid gray'}
    return (
      <div>
        <Col sm={2} md={2}
          onMouseEnter={() => { this.props.changeFront(movie) }}
          onClick={() => {this.props.openDetails(movie)}}>
          <img  style={style} src={movie.thumbnail} />
          <p>{movie.title}</p>
        </Col>
      </div>
    )
  }
}

export default SearchMovieEntry
