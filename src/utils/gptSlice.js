import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
	name: "gpt",
	initialState: {
		showGptSearch: false,
		movieResults: null,
		movieNames: null,
	},
	reducers: {
		toggleGptSearch: (state) => {
			state.showGptSearch = !state.showGptSearch;
		},
		addGroqMovieResult: (state, actions) => {
			const { movieResults, movieNames } = actions.payload;
			state.movieResults = movieResults;
			state.movieNames = movieNames;
		},
	},
});

export const { toggleGptSearch, addGroqMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
