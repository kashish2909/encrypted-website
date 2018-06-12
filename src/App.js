import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './Components/home';
import About from './Components/about';
import Footer from './Components/footer';
import CustNavbar from './Components/navbar';
import Services from './Components/services';
import Whyus from './Components/whyus';
import Notfound from './Components/notfound';
import DisplayPodcasts from './Components/displaypodcasts'
import Podcast from './Components/podcasts'
import Allpodcasts from './Components/allpodcasts';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <CustNavbar/>
        <Route exact path="/" component={Home}/>
        <Route path="/aboutus" component={About}/>
        <Route path="/services" component={Services}/>
        <Route path="/whyus" component={Whyus}/>
        <Route path="/displaypodcasts" component={Allpodcasts}/>
        <Route path="/addpodcast" component={Podcast}/>
        <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
