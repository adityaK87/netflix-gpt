import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
	name: "movies",
	initialState: {
		nowPlayingMovies: null,
		trailerVideo: null,
		popularMovies: null,
		upComingMovies: null,
		topRatedMovies: null,
	},
	reducers: {
		addMovies: (state, action) => {
			state.nowPlayingMovies = action.payload;
		},
		addTrailerVideo: (state, action) => {
			state.trailerVideo = action.payload;
		},
		addPopularMovies: (state, action) => {
			state.popularMovies = action.payload;
		},
		addUpComingMovies: (state, action) => {
			state.upComingMovies = action.payload;
		},
		addTopRatedMovies: (state, action) => {
			state.topRatedMovies = action.payload;
		},
	},
});

export const {
	addMovies,
	addTrailerVideo,
	addPopularMovies,
	addTopRatedMovies,
	addUpComingMovies,
} = movieSlice.actions;
export default movieSlice.reducer;
