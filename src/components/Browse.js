import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpComingMovies from "./useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import { useSelector } from "react-redux";
import GptSearchComponent from "./GptSearchComponent";

const Browse = () => {
	//these are the custom hooks for fetching data and updating the store
	useNowPlayingMovies();
	usePopularMovies();
	useUpComingMovies();
	useTopRatedMovies();
	const isGptSearchOpen = useSelector((store) => store.gpt.showGptSearch);
	return (
		<div className="w-[100%]">
			<Header />
			{isGptSearchOpen ? (
				<GptSearchComponent />
			) : (
				<>
					<MainContainer />
					<SecondaryContainer />
				</>
			)}
		</div>
	);
};

export default Browse;
