import React from "react";
import GptSearchInput from "./GptSearchInput";
import { NETFLIX_BACKGROUND } from "../utils/constant";

const GptSearchComponent = () => {
	return (
		<div className="">
			<img
				className="absolute max-w-full -z-20"
				src={NETFLIX_BACKGROUND}
				alt="CoverImage"
			/>
			<GptSearchInput />
		</div>
	);
};

export default GptSearchComponent;
