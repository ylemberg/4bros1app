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
	  return (<div><Parallax strength={400}>
	    <Background>
            <img src="http://www.fillmurray.com/400/300"/>
            <div style={{
               width: 800, 
               height: 300, 
               backgroundColor: '#450093'
              }}></div>
            <img src="http://www.fillmurray.com/500/300"/>
          </Background>
	  </Parallax>
	  <Col xs={6} md={4}>
	  <Image src={"http://static-api.guidebox.com/111615/thumbnails_movies/-alt--134704-5987681029-531570497-9316686070-large-400x570-alt-.jpg"} responsive />
	  <h4>genres:</h4>
	  </Col>
	  <Col xs={12} md={8}>
	  <PageHeader>Zootopia<small> 2016</small></PageHeader>
	  <p>Disney presents a heartwarming comedy-adventure set in the modern mammal metropolis of Zootopia. With habitat neighborhoods like ritzy Sahara Square and frigid Tundratown, it's a melting pot where animals from every environment live together—a place where no matter what you are, from the biggest elephant to the smallest shrew, you can be anything. But when optimistic Officer Judy Hopps arrives, she discovers that being the first bunny on a police force of big, tough animals isn't so easy. Determined to prove herself, she jumps at the opportunity to crack a case, even if it means partnering with fast-talking scam-artist fox Nick Wilde to solve the mystery. </p>  <h2>Trailer</h2>
	  <div style={{width: 660, height: 'auto'}}>
	  <div class="embed-responsive embed-responsive-4by3">
	  <iframe width="560" height="315" class="embed-responsive-item" src="https://www.youtube.com/embed/jWM0ct-OLsM"></iframe>
	  </div>
	  </div>
	  <h4>staring:</h4>
	  <h4>directors:</h4>

	  </Col>
	  </div>
	  );
	}
}

export default movieDescription 