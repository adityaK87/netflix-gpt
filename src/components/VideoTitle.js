import React from "react";

const VideoTitle = ({ title, overview }) => {
	return (
		<div className="w-screen aspect-video pt-40 px-16 absolute bg-gradient-to-r from-black text-white">
			<h1 className="font-bold text-6xl py-6">{title}</h1>
			<p className="text-lg w-1/3">{overview}</p>
			<div className="py-5">
				<button className="py-4 px-10 bg-white text-black text-xl rounded-md hover:bg-opacity-80">
					▶Play
				</button>
				<button className="py-4 mx-4 px-10 bg-gray-500 text-white  bg-opacity-50 text-xl rounded-md hover:bg-opacity-80">
					More Info
				</button>
			</div>
		</div>
	);
};

export default VideoTitle;
