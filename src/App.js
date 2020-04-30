import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Home, Auth, Issues } from "./pages";

function App() {
	const { token } = useSelector((state) => state);

	if (token) {
		return (
			<Router>
				<Switch>
					<Route path="/issues" component={Issues} />
					<Redirect to="/issues" />
				</Switch>
			</Router>
		);
	}

	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/user/signin/callback" component={Auth} />
				<Redirect to="/" />
			</Switch>
		</Router>
	);
}

export default App;
