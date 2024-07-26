import React from "react";
import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ poster }) => {
	return (
		<div className="w-44 px-2">
			<img src={IMG_CDN_URL + poster} alt="Poster" />
		</div>
	);
};

export default MovieCard;
