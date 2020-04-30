import React from "react";
import { MDBContainer, MDBBtn, MDBIcon } from "mdbreact";
import config from "../../config/config";

import "./Home.scss";

const Home = () => {
	return (
		<section className="home d-flex justify-content-center align-items-center flex-column">
			<MDBContainer className="d-flex justify-content-center align-items-center flex-column">
				<h2 className="font-weight-bold text-center">Welcome to Github Issue Tracker</h2>
				<h4 className="text-center">Please, login via your github account to start working!</h4>
				<MDBBtn gradient="purple" href={`https://github.com/login/oauth/authorize?client_id=${config.CLIENT_ID}`} className="mt-4">
					Login
					<MDBIcon fab icon="github" className="ml-2" />
				</MDBBtn>
			</MDBContainer>
		</section>
	);
};

export default Home;
