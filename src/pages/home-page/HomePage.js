import React, { Fragment } from "react";
import "./HomePage.scss";

const Homepage = () => {
	return (
		<Fragment>
			<div className="container">
				<video
					src="https://res.cloudinary.com/dusr8fbuo/video/upload/q_auto:best/v1611781922/digital_mobile.mp4"
					loop
					autoPlay
					playsInline
					preload
					muted
				></video>
				<div className="btn-container">
					<button className="enter-btn">
						<p>ENTER</p>
					</button>
				</div>
			</div>
		</Fragment>
	);
};

export default Homepage;
