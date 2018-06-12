import React, { Component } from 'react';

export default class Whyus extends Component {
	render() {
		return (
			<section class="pb_section" data-section="why-us" id="section-why-us">
      <div class="container">
        <div class="row justify-content-md-center text-center mb-5">
          <div class="col-lg-7">
            <h2 class="mt-0 heading-border-top mb-3 font-weight-normal">Why Us?</h2><br/>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-7">
            <div class="images right">
              <img class="img1 img-fluid" src="assets/images/600x450_img_2.jpg" alt="free Template by uicookies.com"/>
              <img class="img2" src="assets/images/800x500_img_1.jpg" alt="free Template by uicookies.com"/>
            </div>
          </div>
          <div class="col-lg-5 pl-md-5 pl-sm-0">
            <div id="exampleAccordion" class="pb_accordion" data-children=".item">
              <div class="item">
                <a data-toggle="collapse" data-parent="#exampleAccordion" href="#exampleAccordion1" aria-expanded="true" aria-controls="exampleAccordion1" class="pb_font-18">Industry relations</a>
                <div id="exampleAccordion1" class="collapse show" role="tabpanel">
                  <p>Strong Industry relations with over 4000 investors and funds</p>
                </div>
              </div>
              <div class="item">
                <a data-toggle="collapse" data-parent="#exampleAccordion" href="#exampleAccordion2" aria-expanded="false" aria-controls="exampleAccordion2" class="pb_font-18">Experienced Team</a>
                <div id="exampleAccordion2" class="collapse" role="tabpanel">
                  <p>People working with us come from a very deversified background with provent track record of executing successsful ico's in India</p>
                </div>
              </div>
              <div class="item">
                <a data-toggle="collapse" data-parent="#exampleAccordion" href="#exampleAccordion3" aria-expanded="false" aria-controls="exampleAccordion3" class="pb_font-18">Turn-key Solution</a>
                <div id="exampleAccordion3" class="collapse" role="tabpanel">
                  <p>We handle every step from developing blockchain use cases and strategy all the way to the finishing line of the token sale.</p>
                </div>
              </div>
              <div class="item">
                <a data-toggle="collapse" data-parent="#exampleAccordion" href="#exampleAccordion4" aria-expanded="false" aria-controls="exampleAccordion4" class="pb_font-18">Market Reach</a>
                <div id="exampleAccordion4" class="collapse" role="tabpanel">
                  <p>We are global with one of the largest communities in the world</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
		);
	}
}
