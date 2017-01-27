import React from 'react';
import axios from 'axios'
import { Col } from 'react-bootstrap'
import { Image } from 'react-bootstrap'
import { PageHeader } from 'react-bootstrap'
import { Parallax, Background } from 'react-parallax'



class movieDescription extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}
    render() {
		var genres = (this.props.movie.genres).join(' ');
		var actors = (this.props.movie.actors).slice(0,5).join(', ');
		var directors = (this.props.movie.directors).join(' ');
		var hbo = this.props.movie.hbo ?
		<Image src="/images/hbo.png" style={{
		  height: 20,
		  margin: 5}}/> : null;
		var hulu = this.props.movie.hulu ?
		<Image src="/images/Hulu_Logo_Option_A.png" style={{
		  height: 20,
		  margin:5}}/> : null;
		var netflix = this.props.movie.netflix ?
		<Image src="/images/netflix-logo-small.png" style={{
		  height: 20,
		  margin:5}}/> : null;
		var amazon = this.props.movie.amazon ?
		<Image src="/images/amazon_logo.png" style={{
		  height: 20,
		  margin:5}}/> : null;

	  return (<div><Parallax strength={300}>
          <Background>
			<img src={this.props.movie.banner} />
            <div style={{
               width: 800,
               height: 300,
              }}></div>
			<img src={this.props.movie.banner} />
          </Background>
	  <Col xs={6} md={4}>

	  <div style={{
		   width: 800,
		   height: 300, 
		}}></div>
	  </Col>
	  </Parallax>
	  <Col xs={6} md={4}>
	  <Image src={this.props.movie.poster} responsive />
	  <h4>Genres: </h4><p>{genres}</p>

	  <h4>Directors: </h4><p>{directors}</p>
	  <h4>Where to watch: </h4>
	  {hbo}
		{hulu}
		{netflix}
		{amazon}
	  </Col>
	  <Col xs={12} md={8}>
	  <PageHeader>{this.props.movie.title}<small> {this.props.movie.year}</small></PageHeader>
	  <p>{this.props.movie.description}</p>  <h3>Actors: </h3><p>{actors}</p>
	  <h3>Trailer</h3>
	  <div style={{width: 660, height: 'auto'}}>
	  <div className="embed-responsive embed-responsive-4by3">
	  <iframe className="embed-responsive-item" src={this.props.movie.trailer} allowFullScreen></iframe>
	  </div>
	  </div>
	  </Col>
	  </div>
	  );
	}
}

export default movieDescription
