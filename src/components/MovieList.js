import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
	if (!movies) return null;
	return (
		<div className="text-white px-8 md:px-12">
			<div>
				<h1 className="text-lg md:text-3xl py-5">{title}</h1>
			</div>
			<div className="flex overflow-x-scroll scroll-my-5">
				<div className="flex">
					{movies.map((movie) => (
						<MovieCard key={movie.id} poster={movie.poster_path} />
					))}
				</div>
			</div>
		</div>
	);
};

export default MovieList;
