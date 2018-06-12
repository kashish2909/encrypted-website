import React, { Component } from 'react';
import ReactPlayer from 'react-player'

export default class Displaypodcast extends Component {
	render() {
		const { details } = this.props;
		return (
			<div>
			<h1>{details.name}</h1>
			<audio id="audio-player" src={details.src} type="audio/mp3" controls="controls"></audio>
			<ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing controls/>			
			</div>
		);
	}
}
