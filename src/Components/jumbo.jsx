import React, { Component } from 'react';
import {Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';
import { TheJumbotron, TheJumbotronStyle } from 'the-jumbotron'


export default class Jumbo extends Component {
	render() {
		return (
			<div style={{marginTop:30}}>
<section class="pb_cover_v1 text-left cover-bg-black cover-bg-opacity-4" style={{backgroundImage: 'url(assets/images/1.jpg)'}} id="section-home">
      <div class="container">
        <div class="row align-items-center justify-content-end">
          <div class="col-md-6  order-md-1">
          <div style={{marginTop:80}}>
            <h2 class="heading mb-3">Encrypted</h2>
            <div class="sub-heading">Asia's Premium Blockchain Agency
            </div>
            </div>
          </div>  
        </div>
      </div>
    </section>

</div>

		);
	}
}
