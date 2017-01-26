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
    /Parallax>
    <PageHeader>Stack Attack: MERN </PageHeader>
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
		  margin:10}}/> < /div>;
