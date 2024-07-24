import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
	const dispatch = useDispatch();
	const user = useSelector((store) => store.user);

	const navigate = useNavigate();
	const handleSignout = () => {
		signOut(auth)
			.then(() => {
				// navigate("/");
			})
			.catch((error) => {
				navigate("/error");
			});
	};

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				const { uid, email, displayName, photoURL } = user;
				dispatch(
					addUser({
						uid: uid,
						email: email,
						displayName: displayName,
						photoURL: photoURL,
					})
				);
				navigate("/browse");
			} else {
				// User is signed out
				dispatch(removeUser());
				navigate("/");
			}
		});
	}, []);
	return (
		<div className="absolute py-2 px-8 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
			<img
				className="w-40 "
				src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
				alt="Logo"
			/>
			{user && (
				<div className="flex p-2">
					<img
						className="w-12 h-12"
						src={user?.photoURL}
						alt="userIcon"
					/>
					<button
						className="text-white font-bold"
						onClick={handleSignout}>
						(Sign Out)
					</button>
				</div>
			)}
		</div>
	);
};

export default Header;
