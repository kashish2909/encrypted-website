import React, { Component } from 'react';
import {Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';
import { TheJumbotron, TheJumbotronStyle } from 'the-jumbotron'


export default class Jumbo extends Component {
	render() {
		return (
			<div style={{marginTop:0}}>
			<Jumbotron style={{backgroundImage:'url(assets/images/1.jpg)', height:600, width:'deviceWidth'}}>
  <h1 style={{fontWeight:'bold', fontSize:70, color:'white', textAlign:'center',fontFamily:'BioRhyme Expanded'}}>Encrypted</h1>
  <p style={{color:'white',textAlign:'center',fontFamily:'Cabin',fontSize:30}}>
    Asia's Premium Blockchain Agency
  </p>

</Jumbotron>
</div>

		);
	}
}
