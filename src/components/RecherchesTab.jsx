import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import PaginationC from "./PaginationC";

const RecherchesTab = ({ mobile }) => {
	const data = [
		1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
		1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
		1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
		1,
	];
	// FOR PAGINATION
	const [posts] = useState(data);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(8);
	// Get current posts
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const totalPages = Math.ceil(posts.length / postsPerPage);
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

	const handleChangePage = (event, newPage) => {
		setCurrentPage(newPage);
	};

	return (
		<div className="xScrollbarHide container-fluid px-0 my-4">
			<div className="d-flex justify-content-between align-items-center">
				{!mobile && (
					<>
						<h1 className="font-weight-bold ml-1">
							Total: {posts.length} recherches
						</h1>
						<div>
							<PaginationC
								totalPages={totalPages}
								currentPage={currentPage}
								handleChangePage={handleChangePage}
							/>
						</div>
					</>
				)}
			</div>
			<div className="row px-4">
				{currentPosts.map((prev, i) => {
					return (
						<div
							key={i}
							className="col-12 d-flex borderRounded justify-content-between align-items-center shadow bg-white px-3 py-3 my-2"
						>
							<div>
								<h4 className="font-weight-bold mb-1">Chaussures Nike</h4>
								<h6 className="h5">
									Conakry, Prix: 100 000 FG - 3 000 000 FG, Nouveau
								</h6>
							</div>
							<div>
								<BsThreeDotsVertical fontSize="1.5rem" className="themeColor" />
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default RecherchesTab;
