import React, {useState} from 'react';
import { Button, Typography, TextField } from '@mui/material';

import './footer.scss';


function Footer() {
	const currentYear = new Date().getFullYear();


	return (
		<div className="footer-container">
			<div className="container">
				<div className="newsletter-container">
					<Typography variant="subtitle1" className="newsletter-subtitle">
						Subscribe to our tech newsletter
					</Typography>

					<Typography variant="caption">
						Freshest from the world of web and cybersecurity 
						straight to your inbox every Thursday.
					</Typography>

					<Typography variant="overline">
						*by signing up to nuclecode tech newsletter, 
						you agree to the &#160;
						<a href="/terms-and-conditions">terms and conditions</a>
					</Typography>
				</div>

				<Typography variant="overline" className="grid-container">
					<div className="item">
						<div className="footer-section-title">
							Solutions
						</div>
						
						<ul className="hide-bullets">
							<li><a href="/solutions/frontend">Front End</a></li>
							<li><a href="/solutions/backend">Back End</a></li>
							<li><a href="/solutions/testing">Software Testing</a></li>
						</ul>
					</div>

					<div className="item">
						<div className="footer-section-title">
							Company
						</div>

						<ul className="hide-bullets">
							<li><a href="/about">About</a></li>
							<li><a href="/contact">Contact</a></li>
							<li><a href="/terms-and-conditions">Terms and Conditions</a></li>
						</ul>
					</div>
				</Typography>

				<div className="social-media-container">
					&copy; idncod {currentYear}
					<div className="social-media">
						<a href="https://www.linkedin.com/violaly/" target="_blank" rel="noreferrer">
							<i className="fab fa-linkedin"></i>
						</a>
						<a href="https://www.facebook.com/violaly/" target="_blank" rel="noreferrer">
							<i className="fab fa-facebook"></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;