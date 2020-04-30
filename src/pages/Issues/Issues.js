import React, { useState } from "react";
import { MDBContainer, MDBBtn, MDBInput, MDBIcon } from "mdbreact";
import { useDispatch, useSelector } from "react-redux";
import { fetchIssues } from "../../redux/actions/root";
import { IssuesList } from "../../components";

import "./Issues.scss";

const Issues = () => {
	const dispatch = useDispatch();

	// Local state
	const [values, setValues] = useState({ owner: "", repo: "" });
	// Global state
	const { token, issues } = useSelector((state) => state);

	const onValueChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

	return (
		<section className="issues">
			<MDBContainer>
				<h2 className="font-weight-bold text-center text-white">Issues</h2>
				<form className="issues__form form">
					<div className="form__inputs d-flex align-items-center justify-content-center">
						<MDBInput label="Owner" className="form__input" name="owner" onChange={onValueChange} />
						<span className="mx-2 font-weight-bold">/</span>
						<MDBInput label="Repo" className="form__input" name="repo" onChange={onValueChange} />
					</div>

					<div className="form__control ml-2">
						<MDBBtn gradient="blue" onClick={dispatch.bind(null, fetchIssues(values.owner, values.repo, token))}>
							Search <MDBIcon icon="search" className="ml-2" />
						</MDBBtn>
					</div>
				</form>

				{issues.length ? <IssuesList items={issues} /> : "Список пуст"}
			</MDBContainer>
		</section>
	);
};

export default Issues;