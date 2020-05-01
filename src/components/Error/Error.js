import React from "react";
import errorImg from "../../assets/error.svg";

import "./Error.scss";

const Error = () => {
	return (
		<div className="error">
			<img src={errorImg} alt="error" />
			<p>Something went wrong! Try later</p>
		</div>
	);
};

export default Error;
