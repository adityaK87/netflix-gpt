import React from "react";
import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ poster }) => {
	if (!poster) return null;
	return (
		<div className="w-36 md:w-44 px-2">
			<img src={IMG_CDN_URL + poster} alt="Poster" />
		</div>
	);
};

export default MovieCard;
