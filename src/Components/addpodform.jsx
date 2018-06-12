import React, { Component } from 'react';
import {Jumbotron, Grid, Row, Col, Image, Button,FormControl} from 'react-bootstrap';


export default class Addpodform extends Component {
	constructor()
	{
		super();
		this.createPod=this.createPod.bind(this);
		this.addPod=this.addPod.bind(this);
		this.state={
			pods:{}
		}
	}
	createPod(event) {
    event.preventDefault();
    const pod = {
      name: this.name.value,
      src: this.src.value
    }
    this.addPod(pod);
    this.podForm.reset();
  }
  addPod(pod) {
  	console.log("this.state");
  	console.log(this.state);
  	console.log("pod");
  	console.log(pod);
    // update our state
    const pods = {...this.state.pods};
    // add in our new fish
    const timestamp = Date.now();
    pods[`pod-${timestamp}`] = pod;
    // set state
    this.setState({ pods });
  }
	render() {
		return (
		<form ref={(input) => this.podForm = input} onSubmit={(e) => this.createPod(e)}>
        <FormControl ref={(input) => this.name = input} type="text" placeholder="Pod Name" />
        <FormControl ref={(input) => this.src = input} type="text" placeholder="Pod source" />
        <FormControl type="submit"/>
      </form>
		);
	}
}
