import React from "react";
import Pagination from "@material-ui/lab/Pagination";

const PaginationC = ({ currentPage, totalPages, handleChangePage }) => {
	return (
		<>
			{/* PAGINATION START */}
			<Pagination
				shape="rounded"
				count={totalPages}
				onChange={handleChangePage}
				page={currentPage}
			/>
			{/* PAGINATION END */}
		</>
	);
};

export default PaginationC;
