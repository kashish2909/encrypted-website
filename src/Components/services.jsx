import React, { Component } from 'react';
import {Jumbotron, Grid, Row, Col, Image, Button, Clearfix, Glyphicon} from 'react-bootstrap';


export default class Services extends Component {

	render() {
		return (
			<Grid>
			<h2 class="mt-0 heading-border-top mb-3 font-weight-normal">Services</h2>
			<br/><br/><br/>
    <Row className="show-grid">
      <Col sm={6} md={3}>
      <Glyphicon glyph='glyphicon glyphicon-user'style={{fontSize:30}}/>
      <div  style={{fontWeight:'bold', fontSize:18}}>
			Community Management        </div>
			<br />
			An in-house studio with 24/7 localized language support to help projects to increase their market reach in Asia.
      </Col>
      <Col sm={6} md={3}>
            <Glyphicon glyph='glyphicon glyphicon-tasks'style={{fontSize:30}}/>
      <div  style={{fontWeight:'bold', fontSize:18}}>
        Venture Capital</div>
        <br />
        Investing in the projects of the future and providing them strategic capital.
      </Col>
      <Clearfix visibleSmBlock>
        <code>&lt;{'Clearfix visibleSmBlock'} /">">">&gt;</code>
      </Clearfix>
      <Col sm={6} md={3}>
            <Glyphicon glyph='glyphicon glyphicon-stats'style={{fontSize:30}}/>

      <div  style={{fontWeight:'bold', fontSize:18}}>
        Marketing Planning and Strategy</div>
        With proven track record, we provide hands on expertise on strategic placement, growth hacking etc.
      </Col>
      <Col sm={6} md={3}>
            <Glyphicon glyph='glyphicon glyphicon-signal'style={{fontSize:30}}/>

      <div  style={{fontWeight:'bold', fontSize:18}}>
        Community Gathering</div>
        <br />
        A group dedicated to meeting, discussing, and sharing ideas on the future of the decentralized world.
      </Col>
    </Row>
</Grid>
		);
	}
}
