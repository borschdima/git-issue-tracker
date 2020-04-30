import React, { useEffect } from "react";
import { Spinner } from "../../components";
import { useDispatch } from "react-redux";
import { auth } from "../../redux/actions/root";

const Auth = ({ location }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		if (location.search) {
			const searchParams = new URLSearchParams(location.search);
			const code = searchParams.get("code");
			dispatch(auth(code));
		}
	}, [dispatch, location.search]);

	return (
		<section className="home d-flex justify-content-center align-items-center flex-column">
			<Spinner />
		</section>
	);
};

export default Auth;
