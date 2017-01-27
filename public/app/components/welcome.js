import React from 'react';
import { Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
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

<
div style = {
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
    <p>footer placeholder:</p>
    <div style={{ marginTop: 200 }}>
        <ul class="icons">
            <li>
                <i class="fa fa-google-plus"></i>
            </li>
            <li>
                <a href="https://www.instagram.com/">
                    <i class="fa fa-instagram"></i></a>
            </li>
            <li>
                <a href="https://github.com/">
                    <i class="fa fa-github"></i></a>
            </li>
            <li>
                <a href="https://www.linkedin.com/">
                    <i class="fa fa-linkedin"></i></a>
            </li>

        </ul>
    </div>
</footer>< /div>;
