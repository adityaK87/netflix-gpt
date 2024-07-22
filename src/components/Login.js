import React, { useState, useRef } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";

const Login = () => {
	const [isSignInForm, setIsSignInForm] = useState(true);
	const [errMessage, setErrmessage] = useState(null);

	const email = useRef(null);
	const password = useRef(null);

	const toggleForm = () => {
		setIsSignInForm(!isSignInForm);
	};

	const handleSignIn = () => {
		const errMessage = validateData(
			email.current.value,
			password.current.value
		);
		setErrmessage(errMessage);
	};

	return (
		<div>
			<Header />
			<div>
				<img
					className="absolute"
					src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_large.jpg"
					alt="CoverImage"
				/>
			</div>
			<form
				onSubmit={(e) => e.preventDefault()}
				className="absolute my-36 p-12 mx-auto w-3/12 right-0 rounded-lg left-0 bg-black opacity-80 text-white">
				<h1 className="font-bold text-3xl my-4">
					{isSignInForm ? "Sign In" : "Sign Up"}
				</h1>
				{!isSignInForm && (
					<input
						className="w-full my-4 p-4 bg-gray-700"
						type="text"
						placeholder="Full Name"
					/>
				)}
				<input
					ref={email}
					className="w-full my-4 p-4 bg-gray-700"
					type="text"
					placeholder="Email or phone number"
				/>
				<input
					ref={password}
					className="w-full my-4 p-4 bg-gray-700"
					type="password"
					placeholder="Password"
				/>
				<p className="text-red-600 font-bold">{errMessage}</p>
				<button
					onClick={handleSignIn}
					className="w-full my-6 rounded-md bg-red-700 p-4">
					{isSignInForm ? "Sign In" : "Sign Up"}
				</button>
				<p className="cursor-pointer" onClick={toggleForm}>
					{isSignInForm
						? "New to Netflix? Sign up now."
						: "Already a user? Sign in now."}
				</p>
			</form>
		</div>
	);
};

export default Login;
