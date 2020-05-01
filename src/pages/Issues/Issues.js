import React from "react";
import { MDBContainer, MDBBtn, MDBInput, MDBIcon } from "mdbreact";
import { useDispatch, useSelector } from "react-redux";
import { fetchIssues, changeOwner, changeRepo } from "../../redux/actions/root";
import { IssuesList, Pagination } from "../../components";
import { notify } from "../../utils/notify";
import { ToastContainer } from "react-toastify";

import "./Issues.scss";

const Issues = () => {
	const dispatch = useDispatch();

	// Local state
	// const [values, setValues] = useState({ owner: "", repo: "" });
	// Global state
	const { token, issues, pagesCount, ownerName, repoName, currentPage } = useSelector((state) => state);

	// const onValueChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

	const onClickHandler = () => {
		if (ownerName && repoName) {
			dispatch(fetchIssues(ownerName, repoName, token));
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
						<MDBInput
							label="Owner"
							className="form__input"
							name="owner"
							value={ownerName}
							onChange={(e) => dispatch(changeOwner(e.target.value))}
						/>
						<span className="mx-2 font-weight-bold">/</span>
						<MDBInput
							label="Repo"
							className="form__input"
							name="repo"
							value={repoName}
							onChange={(e) => dispatch(changeRepo(e.target.value))}
						/>
					</div>

					<div className="form__control ml-2">
						<MDBBtn gradient="blue" onClick={onClickHandler}>
							Search <MDBIcon icon="search" className="ml-2" />
						</MDBBtn>
					</div>
				</form>

				<IssuesList items={issues} />

				<Pagination
					pagesLength={pagesCount}
					currentPage={currentPage}
					onPageChange={(page) => dispatch(fetchIssues(ownerName, repoName, token, page))}
				/>
			</MDBContainer>
			<ToastContainer />
		</section>
	);
};

export default Issues;
