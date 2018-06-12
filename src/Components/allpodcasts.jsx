import React, { Component } from 'react';
import Displaypodcast from './displaypodcasts';
import playlist from './playlist.json';
import samplepods from './samplepod'
import Podcast from './podcasts';
import Zoom from 'react-reveal/Zoom';



export default class Allpodcasts extends Component {
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
		return (<div>

			{/*
			<Podcast addPod={this.addPod} loadsamples={this.loadsamples}/>
		<h2 class="mt-0 heading-border-top mb-3 font-weight-normal">Podcasts</h2>
        <ul>
          {Object.keys(this.state.pods).map(key=><Displaypodcast key={key} details={this.state.pods[key]}/>)}
        </ul>
    */}
    <section class="pb_section pb_section_v1" data-section="about" id="section-about">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 pr-md-5 pr-sm-0">
            <h2 class="mt-0 heading-border-top mb-3 font-weight-normal">Podcasts</h2>
          </div>
        </div>
      </div>  
    </section><Zoom>
    <center style={{fontSize:50}}>Coming Soon</center></Zoom>
        </div>
		);
	}
}
