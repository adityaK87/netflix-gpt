import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchInput = () => {
	const language = useSelector((store) => store.config.lang);

	return (
		<div className="p-[10%] flex justify-center">
			<form className="bg-black w-1/2 grid grid-cols-12">
				<input
					type="text"
					className="p-3 m-4 col-span-9"
					placeholder={lang[language].searchBoxPlaceholder}
				/>
				<button className="py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded-sm">
					{lang[language].search}
				</button>
			</form>
		</div>
	);
};

export default GptSearchInput;
