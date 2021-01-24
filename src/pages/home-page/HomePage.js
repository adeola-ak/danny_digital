import React from "react";
import "./HomePage.scss";

const Homepage = () => {
	return (
		<div className="bg-video-container">
			<video
				src="https://res.cloudinary.com/dusr8fbuo/video/upload/v1611391881/DIGITAL_DRIP_1_jhwwcq.mp4"
				loop
				autoPlay
				playsInline
				preload
				muted
			></video>
			<div className="overlay"></div>
			<button className="enter-btn">
				<h1>ENTER</h1>
			</button>
		</div>
	);
};

export default Homepage;
