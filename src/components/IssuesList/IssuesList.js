import React from "react";

const IssuesList = ({ items }) => {
	return (
		<ul className="issue-list">
			{items.map((issue) => (
				<li className="issue-list__item" key={issue.id}>
					{issue.title}
				</li>
			))}
		</ul>
	);
};

export default IssuesList;
