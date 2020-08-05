import React from "react";
import { Col } from "react-bootstrap";

function Home() {
	return (
		<div>
			<br />
			<Col align='center'>
				<h1 className='text'>
					Tweetotaler
					<hr />
				</h1>
			</Col>

			<div id='transparent'></div>

			<Col align='center'>
				<h4 className='text'>
					Please abstain from other social media platforms other than Twitter,
					this is Tweetotaler. Use this app to interact with Twitter's API by
					searching for tweets or viewing random posts from some of my favorite
					users.
				</h4>
			</Col>
		</div>
	);
}

export default Home;
