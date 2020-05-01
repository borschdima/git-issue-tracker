import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Home, Auth, Issues, IssueDetails } from "./pages";

function App() {
	const { token } = useSelector((state) => state);

	if (token) {
		return (
			<Router>
				<Switch>
					<Route path="/issues" exact component={Issues} />
					<Route path="/issues/:id" component={IssueDetails} />
					<Redirect to="/issues" exact />
				</Switch>
			</Router>
		);
	}

	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/user/signin/callback" component={Auth} />
				<Redirect to="/" exact />
			</Switch>
		</Router>
	);
}

export default App;
