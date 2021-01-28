import React, { Fragment } from "react";
import "./LandPage.scss";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const LandPage = () => {
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
				<Fade bottom>
					<div className="btn-container">
						<Link to="/home">
							<button className="button">
								<p>ENTER</p>
							</button>
						</Link>
					</div>
				</Fade>
			</div>
		</Fragment>
	);
};

export default LandPage;
