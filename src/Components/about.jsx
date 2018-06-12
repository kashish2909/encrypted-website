import React, { Component } from 'react';
import {Jumbotron, Grid, Row, Col, Image, Button, Clearfix, Glyphicon} from 'react-bootstrap';


export default class About extends Component {
	render() {
		return (
      <div>
            <h2 class="mt-0 heading-border-top mb-3 font-weight-normal">About Us</h2>
            <Grid>
  <Row className="show-grid">
    <Col md={6} mdPush={6}>
      <p>We are a blockchain venture builder focused on promising projects targeting the Asian geographies. Our capable team with relevant experience will provide a holistic solution to address Asia’s blockchain ecosystem.</p>
            <p>We develop strategies and customized execution plans for our project partners who wish to:
            <ol>
            <li>Create Blockchain projects that solve unique problems for existing customers</li>
            <li>Generate and issue token</li>
            <li>Raise capital via token sale/ token generation </li>
            </ol>
            </p>
    </Col>
    <Col md={6} mdPull={6}>
    <Image src="assets/images/600x450_img_2.jpg" rounded responsive/>
    </Col>
  </Row>
</Grid>
		  </div>
    );
	}
}
