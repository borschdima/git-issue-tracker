import React from "react";
import { MDBContainer } from "mdbreact";
import { useSelector } from "react-redux";

import "./IssueDetails.scss";

const IssueDetails = ({ match }) => {
	const { issues } = useSelector((state) => state);

	const issue = issues.find((item) => item.id === +match.params.id);

	return (
		<section className="issue-details">
			<MDBContainer>
				<h2 className="font-weight-bold text-center text-white">Issue Details</h2>
				<div className="issue-details__container">
					<div className=" issue-details__info">
						<h4 className="font-weight-bold">State:</h4>
						<div>{issue.state}</div>
					</div>
					<div className=" issue-details__info">
						<h4 className="font-weight-bold">Title:</h4>
						<div>{issue.title}</div>
					</div>
					<div className=" issue-details__info">
						<h4 className="font-weight-bold">Body:</h4>
						<div>{issue.body}</div>
					</div>
					<div className=" issue-details__info">
						<h4 className="font-weight-bold">Link:</h4>
						<div>
							<a href={issue.html_url} target="_blank" rel="noopener noreferrer">
								{issue.html_url}
							</a>
						</div>
					</div>
					<div className=" issue-details__info">
						<h4 className="font-weight-bold">User created issue:</h4>
						<div>
							<a href={issue.user.html_url} target="_blank" rel="noopener noreferrer">
								{issue.user.login}
							</a>
						</div>
					</div>
				</div>
			</MDBContainer>
		</section>
	);
};

export default IssueDetails;
