import React, { useState } from "react";
import { MDBContainer, MDBBtn, MDBInput, MDBIcon } from "mdbreact";
import { useDispatch, useSelector } from "react-redux";
import { fetchIssues } from "../../redux/actions/root";
import { IssuesList, Pagination } from "../../components";
import { notify } from "../../utils/notify";
import { ToastContainer } from "react-toastify";

import "./Issues.scss";

const Issues = () => {
	const dispatch = useDispatch();

	// Local state
	const [values, setValues] = useState({ owner: "", repo: "" });
	// Global state
	const { token, issues, pagesCount } = useSelector((state) => state);

	const onValueChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

	const onClickHandler = () => {
		if (values.owner && values.repo) {
			dispatch(fetchIssues(values.owner, values.repo, token));
		} else {
			notify("You need to fullfill both fields to start searching!");
		}
	};

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
						<MDBBtn gradient="blue" onClick={onClickHandler}>
							Search <MDBIcon icon="search" className="ml-2" />
						</MDBBtn>
					</div>
				</form>

				<IssuesList items={issues} />
				<Pagination pagesLength={pagesCount} onPageChange={(page) => dispatch(fetchIssues(values.owner, values.repo, token, page))} />
			</MDBContainer>
			<ToastContainer />
		</section>
	);
};

export default Issues;
