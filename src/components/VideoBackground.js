import React from "react";

import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
	useMovieTrailer(movieId);
	const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

	return (
		<div>
			<iframe
				className="w-screen aspect-video"
				src={
					"https://www.youtube.com/embed/" +
					trailerVideo?.key +
					"?controls=0&loop=100&autoplay=1&mute=1"
				}
				title="YouTube video player"
				allow="autoplay;"
				referrerPolicy="strict-origin-when-cross-origin"></iframe>
		</div>
	);
};

export default VideoBackground;
