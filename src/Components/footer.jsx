import React, { Component } from 'react';

export default class Footer extends Component {
	render() {
		return (
			<footer class="pb_footer bg-light" role="contentinfo">
      <div class="container">
        <div class="row text-center">
          <div class="col">
            <ul class="list-inline">
              <li class="list-inline-item"><a href="#" class="p-2"><i class="fa fa-facebook"></i></a></li>
              <li class="list-inline-item"><a href="#" class="p-2"><i class="fa fa-twitter"></i></a></li>
              <li class="list-inline-item"><a href="#" class="p-2"><i class="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col text-center">
                      <p class="pb_font-14">Terms and Conditions.</p>
                      <p class="pb_font-14">Media Partners</p>
                      <p class="pb_font-14">Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
		);
	}
}
