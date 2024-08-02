import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import groqai from "../utils/groqai";
import { API_OPTIONS } from "../utils/constant";
import { addGroqMovieResult } from "../utils/gptSlice";

const GptSearchInput = () => {
	const inputRef = useRef();
	const dispatch = useDispatch();
	const language = useSelector((store) => store.config.lang);

	//creating a function which take moviename and returns moviedata from TMDB api
	const getMovieDetails = async (moviename) => {
		const movieData = await fetch(
			"https://api.themoviedb.org/3/search/movie?query=" +
				moviename +
				"&include_adult=false&language=en-US&page=1",
			API_OPTIONS
		);
		const json = await movieData.json();
		return json.results;
	};

	const handleGptSearchClick = async () => {
		const inputText = inputRef.current.value;
		const gptQuery =
			"act as a movie recommendation system for the query: " +
			inputText +
			". Give only just only five movies name, comma separated just like example results given ahead. example result: Gadar, Golmaal, Madgaon express, Sholay, Don. Don't give other message";

		const groqMovieData = await groqai.chat.completions.create({
			messages: [
				{
					role: "user",
					content: gptQuery,
				},
			],
			model: "llama3-8b-8192",
		});

		//converting movies string into the array
		const groqMovies =
			groqMovieData?.choices[0]?.message?.content.split(",");

		//for each movie will be searching TMDB API
		const tmdbPromises = groqMovies.map((movie) => getMovieDetails(movie));

		const tmdbResults = await Promise.all(tmdbPromises);
		dispatch(
			addGroqMovieResult({
				movieNames: groqMovies,
				movieResults: tmdbResults,
			})
		);
	};

	return (
		<div className="p-[10%] flex justify-center">
			<form
				className="bg-black w-1/2 grid grid-cols-12"
				onSubmit={(e) => e.preventDefault()}>
				<input
					ref={inputRef}
					type="text"
					className="p-3 m-4 col-span-9"
					placeholder={lang[language].searchBoxPlaceholder}
				/>
				<button
					className="py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded-sm"
					onClick={handleGptSearchClick}>
					{lang[language].search}
				</button>
			</form>
		</div>
	);
};

export default GptSearchInput;
