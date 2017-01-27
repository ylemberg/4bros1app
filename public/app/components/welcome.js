import React from 'react';
import { Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

import { PageHeader } from 'react-bootstrap';
import { Parallax, Background } from 'react-parallax';

export default () => < div >
    <
    Parallax strength = { 300 } >
    <
    Background >
    <
    img src = "/images/cover.jpg" / >
    <
    div style = {
        {
            width: 800,
            height: 300,
        }
    } > < /div> <
    img src = "/images/cover.jpg" / >
    <
    /Background>

<div style = {
        {
            width: 800,
            height: 300,
        }
    } > <div style = {{
      textAlign: 'center',
      margin: 200,
    }}>< h1 > Pick A Flick < /h1></div> <
    /div> <
    /Parallax> <div id="welcomeMiddle"style={{ marginTop: 200 }}>
		<Image src="/images/react.png" style={{
      marginTop: 80,

      display: 'block',
      marginBottom: 30,
      marginRight: 'auto',
      marginLeft: 'auto',
      height: 80}}/>
    <Image src="https://webassets.mongodb.com/_com_assets/cms/MongoDB-Logo-5c3a7405a85675366beb3a5ec4c032348c390b3f142f5e6dddf1d78e2df5cb5c.png" style={{
      display: 'block',
      marginBottom: 30,
      marginRight: 'auto',
      marginLeft: 'auto',
      height: 80}}/>
    <Image src="http://mean.io/wp-content/themes/twentysixteen-child/images/express.png" style={{
      display: 'block',
      marginBottom: 30,
      marginRight: 'auto',
      marginLeft: 'auto',
      height: 80}}/>
		<Image src="/images/node.png" style={{
      display: 'block',
      marginBottom: 30,
      marginRight: 'auto',
      marginLeft: 'auto',
      height: 80}}/>
      <Image src="/images/passport.png" style={{
        display: 'block',
        marginBottom: 30,
        marginRight: 'auto',
        marginLeft: 'auto',
        height: 80}}/>

    <div style={{ margin: 200 }}>  </div>
      <Parallax strength={300}>
            <Background>
  			<img src="/images/banner.jpg" />
              <div style={{
                 width: 500,
                 height: 300,
                }}></div>
  			<img src="/images/banner.png"/>
            </Background>
  	  <Col xs={6} md={4}>

  	  <div style={{
  		   width: 600,
  		   height: 500,
  		}}></div>
  	  </Col>
  	  </Parallax>
      </div><footer class="content-footer" style={{
        backgroundColor: '74818C',
        padding: 10 ,
        textAlign: 'center',
      }}>
    <h2>4bros1app</h2>
    <h4>Commited to simplify the decision making process in your movie and television watching experience</h4>
    <div style={{ marginTop: 10 }}>
      <Grid>
        <Row>
          <Col xs={6} md={6}>
            <Image style={{
              marginTop: 20,
        		   width: 170,
        		   height: 180 }} src="/images/big_boss.jpg" circle />
               <h3>Daniel Osaki</h3>
               <h4>Project Owner</h4>
               <h5>Stuff but also things</h5>


          </Col>
          <Col xs={6} md={6}>
            <Image style={{
              marginTop: 20,
        		   width: 170,
        		   height: 180 }} src="/images/big_boss.jpg" circle />
               <h3>David Park</h3>
               <h4>Auth</h4>
               <h5>Stuff but also things</h5>

          </Col>
          </Row>
          <Row>
          <Col xs={6} md={6}>
            <Image style={{
              marginTop: 20,
        		   width: 170,
        		   height: 180 }} src="/images/big_boss.jpg" circle />
               <h3>Jesse Nocon</h3>
               <h4>Backend</h4>
               <h5>Stuff but also things</h5>

          </Col>
          <Col xs={6} md={6}>
            <Image style={{
              marginTop: 20,

               width: 170,
               height: 180 }} src="/images/brit.png" circle />
               <h3>Richard Durazo</h3>
               <h4>Scrum</h4>
               <h5>Stuff but also things</h5>


          </Col>
        </Row>
      </Grid>
    </div>
</footer>< /div>;
