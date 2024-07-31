import React from "react";
import GptSearchInput from "./GptSearchInput";
import { NETFLIX_BACKGROUND } from "../utils/constant";
import GptMovieSuggestion from "./GptMovieSuggestion";

const GptSearchComponent = () => {
	return (
		<div className="">
			<img
				className="fixed max-w-full -z-20"
				src={NETFLIX_BACKGROUND}
				alt="CoverImage"
			/>
			<GptSearchInput />
			<GptMovieSuggestion />
		</div>
	);
};

export default GptSearchComponent;
