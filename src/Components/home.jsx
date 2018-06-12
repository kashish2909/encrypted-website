import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';
import About from './about';
import Footer from './footer';
import CustNavbar from './navbar';
import Services from './services';
import Whyus from './whyus';
import Podcast from './podcasts';
import Jumbo from './jumbo';
import samplepods from './samplepod'
import Audio from 'react-audioplayer';
import playlist from './playlist.json';
import Displaypodcast from './displaypodcasts'
import Allpodcasts from './allpodcasts'
import Zoom from 'react-reveal/Zoom';

class Home extends Component {
  constructor() {
    super();
    {console.log(samplepods);}
    this.addPod = this.addPod.bind(this);
    this.loadsamples = this.loadsamples.bind(this);
    // getinitialState
    this.state={
    pods: {}
    }
  }

  addPod(pod) {
    // update our state
    const pods = {...this.state.pods};
    // add in our new fish
    const timestamp = Date.now();
    pods[`pod-${timestamp}`] = pod;
    // set state
    this.setState({ pods });
  }

  loadsamples()
  {
    console.log('this is working');
    this.setState({
      pods: samplepods
    })
  }

  render() {
    return (
      <Grid>
        <Jumbo/>
        <Zoom>
        <About/></Zoom>
        <Zoom>
        <Services/></Zoom>
        <Zoom>
        <Whyus/></Zoom>
      </Grid>
    );
  }
}

export default Home;


