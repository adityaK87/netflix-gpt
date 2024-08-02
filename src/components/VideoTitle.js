import React from "react";
import { useSelector } from "react-redux";

const VideoTitle = ({ title, overview }) => {
	const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
	return (
		<div className="w-full aspect-video pt-24 px-8 md:pt-40 md:px-16 absolute bg-gradient-to-r from-black text-white">
			<h1 className="text-xl font-bold md:text-6xl py-6">{title}</h1>
			<p className="hidden md:inline-block text-lg w-1/3">{overview}</p>
			<div className="md:py-5">
				<button
					className="py-2 px-2 md:py-4 md:px-10 bg-white text-black md:text-xl font-bold rounded-md hover:bg-opacity-80"
					onClick={() =>
						(window.location =
							"https://www.youtube.com/embed/" +
							trailerVideo?.key +
							"?&autoplay=1")
					}>
					▶Play
				</button>
				<button className="py-4 mx-4 px-10 bg-gray-500 text-white  bg-opacity-50 text-xl rounded-md hover:bg-opacity-80 hidden md:inline-block">
					More Info
				</button>
			</div>
		</div>
	);
};

export default VideoTitle;
