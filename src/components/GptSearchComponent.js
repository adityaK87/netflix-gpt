import React from "react";
import GptSearchInput from "./GptSearchInput";
import { NETFLIX_BACKGROUND } from "../utils/constant";
import GptMovieSuggestion from "./GptMovieSuggestion";

const GptSearchComponent = () => {
	return (
		<>
			<div className="">
				<img
					className="fixed object-cover md:w-full h-screen max-w-full -z-20"
					src={NETFLIX_BACKGROUND}
					alt="CoverImage"
				/>
			</div>
			<div className="">
				<GptSearchInput />
				<GptMovieSuggestion />
			</div>
		</>
	);
};

export default GptSearchComponent;
