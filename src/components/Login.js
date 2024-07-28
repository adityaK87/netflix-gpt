import React, { useState, useRef } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { NETFLIX_BACKGROUND, USER_AVTAR } from "../utils/constant";

const Login = () => {
	const [isSignInForm, setIsSignInForm] = useState(true);
	const [message, setErrorMessage] = useState(null);

	const dispatch = useDispatch();

	const email = useRef(null);
	const password = useRef(null);
	const name = useRef(null);

	const toggleForm = () => {
		setIsSignInForm(!isSignInForm);
	};

	const handleSignIn = () => {
		const message = validateData(
			email.current.value,
			password.current.value
		);
		setErrorMessage(message);
		if (message) return;

		if (!isSignInForm) {
			//Sign up logic
			createUserWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredential) => {
					// Signed up
					const user = userCredential.user;
					updateProfile(user, {
						displayName: name.current.value,
						photoURL: USER_AVTAR,
					})
						.then(() => {
							const { uid, email, displayName, photoURL } =
								auth.currentUser;
							dispatch(
								addUser({
									uid: uid,
									email: email,
									displayName: displayName,
									photoURL: photoURL,
								})
							);
						})
						.catch((error) => {
							setErrorMessage(error.message);
						});
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMessage(errorCode + "-" + errorMessage);
				});
		} else {
			//sign in logic
			signInWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user;
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMessage(errorCode + "-" + errorMessage);
				});
		}
	};

	return (
		<div>
			<Header />
			<div>
				<img
					className="absolute"
					src={NETFLIX_BACKGROUND}
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
						ref={name}
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
				<p className="text-red-600 font-bold">{message}</p>
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
