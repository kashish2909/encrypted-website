import React, { Component } from 'react';
import Addpodform from './addpodform';

export default class Podcast extends Component {
	constructor()
	{
		super();
	}
	render() {
		return (
			<div>
              <center><h1>Upload a podcast</h1></center>
              <Addpodform addPod={this.props.addPod}/>
              <button onClick={this.props.loadsamples}>Load Sample podcasts</button>
			</div>
		);
	}
}
