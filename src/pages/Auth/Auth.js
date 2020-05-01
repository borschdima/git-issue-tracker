import React, { useEffect } from "react";
import { Spinner, Error } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../redux/actions/root";
import config from "../../config/config";

const Auth = ({ location }) => {
	const dispatch = useDispatch();
	const { error } = useSelector((state) => state);

	useEffect(() => {
		if (location.search) {
			const searchParams = new URLSearchParams(location.search);
			const code = searchParams.get("code");
			dispatch(auth(code));
		} else {
			window.location.replace(`https://github.com/login/oauth/authorize?client_id=${config.CLIENT_ID}`);
		}
	}, [dispatch, location.search]);

	if (error)
		return (
			<section className="home d-flex justify-content-center align-items-center flex-column">
				<Error />
			</section>
		);

	return (
		<section className="home d-flex justify-content-center align-items-center flex-column">
			<Spinner />
		</section>
	);
};

export default Auth;
