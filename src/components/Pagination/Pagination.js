import React, { useState } from "react";
import { MDBPagination, MDBPageItem, MDBPageNav } from "mdbreact";

import "./Pagination.scss";

const Pagination = ({ pagesLength, currentPage, onPageChange }) => {
	const [activeItem, setActiveItem] = useState(currentPage);

	// Render pagination numbers
	const createPages = () => {
		const pages = new Array(pagesLength).fill(0);

		return pages.map((page, index) => (
			<MDBPageItem active={index === activeItem} key={index} onClick={() => changePageHandler(index)}>
				<MDBPageNav className="page-link">
					{index + 1} {index === activeItem ? <span className="sr-only">(current)</span> : null}
				</MDBPageNav>
			</MDBPageItem>
		));
	};

	// Changing active page
	const changePageHandler = (value) => {
		if (activeItem !== value) {
			onPageChange(value + 1);
			setActiveItem(value);
		}
	};

	if (!pagesLength) return null;

	return (
		<MDBPagination circle color="blue" className="my-pagination">
			<MDBPageItem disabled={activeItem === 0}>
				<MDBPageNav className="page-link" aria-label="Previous" onClick={() => changePageHandler(activeItem - 1)}>
					<span aria-hidden="true">Prev</span>
					<span className="sr-only">Prev</span>
				</MDBPageNav>
			</MDBPageItem>
			{createPages()}
			<MDBPageItem disabled={activeItem === pagesLength - 1}>
				<MDBPageNav className="page-link" onClick={() => changePageHandler(activeItem + 1)}>
					Next
				</MDBPageNav>
			</MDBPageItem>
		</MDBPagination>
	);
};

export default Pagination;
