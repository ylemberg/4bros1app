import React from 'react';
import { Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { PageHeader } from 'react-bootstrap';
import { Parallax, Background } from 'react-parallax';

export default () => < div >
<Parallax strength={300}>
      <Background>
  <img src="/images/cover.jpg" />
        <div style={{
           width: 800,
           height: 300,
          }}></div>
  <img src="/images/cover.jpg" />
      </Background>

<div style={{
   width: 800,
   height: 600,
}}></div>
</Parallax>
Welcome to our slice of paradise < /div>;
