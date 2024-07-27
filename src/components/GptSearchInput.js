import React from "react";

const GptSearchInput = () => {
	return (
		<div className="p-[10%] flex justify-center">
			<form className="bg-black w-1/2 grid grid-cols-12">
				<input
					type="text"
					className="p-3 m-4 col-span-9"
					placeholder="What would you like to watch today?"
				/>
				<button className="py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded-sm">
					Search
				</button>
			</form>
		</div>
	);
};

export default GptSearchInput;
