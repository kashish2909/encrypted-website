import React, { Component } from 'react';

export default class About extends Component {
	render() {
		return (
			<section class="pb_section pb_section_v1" data-section="about" id="section-about">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 pr-md-5 pr-sm-0">
            <h2 class="mt-0 heading-border-top mb-3 font-weight-normal">About Us</h2>
            <p>We are a blockchain venture builder focused on promising projects targeting the Asian geographies. Our capable team with relevant experience will provide a holistic solution to address Asia’s blockchain ecosystem.</p>
            <p>We develop strategies and customized execution plans for our project partners who wish to:
            <ol>
            <li>Create Blockchain projects that solve unique problems for existing customers</li>
            <li>Generate and issue token</li>
            <li>Raise capital via token sale/ token generation </li>
            </ol>
            </p>

          </div>
          <div class="col-lg-7">
            <div class="images">
              <img class="img1 img-fluid" src="assets/images/600x450_img_2.jpg" alt="free Template by uicookies.com"/>
              <img class="img2" src="assets/images/800x500_img_1.jpg" alt="free Template by uicookies.com"/>
            </div>
          </div>
        </div>
      </div>  
    </section>
		);
	}
}
