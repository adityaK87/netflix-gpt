import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
	const { movieNames, movieResults } = useSelector((store) => store.gpt);
	if (!movieNames) return null;

	return (
		<div className="p-4 mx-4 -my-4  bg-black bg-opacity-70">
			{movieNames?.map((movieName, index) => (
				<MovieList
					key={movieName}
					title={movieName}
					movies={movieResults[index]}
				/>
			))}
		</div>
	);
};

export default GptMovieSuggestion;
