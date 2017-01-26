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
            height: 500,
        }
    } > <div style = {{
      textAlign: 'center',
      margin: 200,
    }}>< h1 > Pick A Flick < /h1></div> <
    /div> <
    /Parallax> <div>
    <Image src="/images/mongodb.jpg" style={{
		  height: 80,
		  margin: 10}}/>

		<Image src="/images/express.jpg" style={{
		  height: 80,
		  margin:10}}/>
		<Image src="/images/react.png" style={{
		  height: 80,
		  margin:10}}/>
		<Image src="/images/node.png" style={{
		  height: 80,
		  margin:10}}/> </div><footer class="content-footer" style={{
        backgroundColor: 'D0C3B7',
        marginTop: 10,
        padding: 10 ,
        textAlign: 'center',
      }}>
    <p>footer placeholder:</p>
    <div>
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
