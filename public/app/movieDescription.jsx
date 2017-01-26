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
	  return (<div><Parallax strength={300}>
          <Background>
			<img src={this.props.movie.banner}/>
            <div style={{
               width: 800, 
               height: 300, 
              }}></div>
			  <img src={this.props.movie.banner}/>
          </Background>
	  <Col xs={6} md={4}>
			<h4>genres: {this.props.movie.genres}</h4>
	  <h4>staring: {this.props.movie.actors}</h4>
	  <h4>directors: {this.props.movie.directors}</h4>
	  
	  </Col>		  
	  </Parallax>
	  <Col xs={6} md={4}>
	  <Image src={this.props.movie.poster} responsive />

	  </Col>
	  <Col xs={12} md={8}>
	  <PageHeader>{this.props.movie.title}<small> {this.props.movie.year}</small></PageHeader>
	  <p>{this.props.movie.description}</p>  <h2>Trailer</h2>
	  <div style={{width: 660, height: 'auto'}}>
	  <div className="embed-responsive embed-responsive-4by3">
	  <iframe className="embed-responsive-item" src={this.props.movie.trailer}></iframe>
	  </div>
	  </div>
	  

	  </Col>        

	  </div>
	  );
	}
}

export default movieDescription 