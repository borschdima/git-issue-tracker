import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "../Spinner/Spinner";

import "./IssuesList.scss";

const IssuesList = ({ items }) => {
	const { loading } = useSelector((state) => state);

	if (loading) return <Spinner />;

	if (!items.length) return <ul className="issues-list">No issues to display</ul>;

	return (
		<ul className="issues-list">
			{items.map((issue) => (
				<Link to={`/issues/${issue.id}`} key={issue.id}>
					<li className="issues-list__item d-flex align-items-center">
						<div className="issues-list__avatar">
							<img src={issue.user.avatar_url} alt="user-avatar" />
						</div>
						<div className="issues-list__title">{issue.title}</div>
						<div className="issues-list__time">opened on: {moment(issue.created_at).format("MMMM Do")}</div>
					</li>
				</Link>
			))}
		</ul>
	);
};

export default IssuesList;
