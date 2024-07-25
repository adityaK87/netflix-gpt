import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
	//Fetch  movies data from TMDB API and adding movies to store
	const dispatch = useDispatch();
	const getNowPlayingMovies = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/movie/now_playing?page=1",
			API_OPTIONS
		);
		const json = await data.json();
		dispatch(addMovies(json?.results));
	};

	useEffect(() => {
		getNowPlayingMovies();
	}, []);
};

export default useNowPlayingMovies;
