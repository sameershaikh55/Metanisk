import React, { useState } from "react";
import placeholder from "../assets/placeholderPerson.webp";
import badge from "../assets/badgeWhite.svg";
import product from "../assets/annonces1.webp";
import { BsThreeDotsVertical } from "react-icons/bs";
import PaginationC from "./PaginationC";

const VendeursTab = ({ mobile }) => {
	const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
	// FOR PAGINATION
	const [posts] = useState(data);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(3);
	// Get current posts
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const totalPages = Math.ceil(posts.length / postsPerPage);
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

	const handleChangePage = (event, newPage) => {
		setCurrentPage(newPage);
	};

	const bg = {
		background: "linear-gradient(90deg, #4DBCEF 0%, #1B8ACC 98.04%), #FFFFFF",
		borderTopLeftRadius: "8px",
		borderTopRightRadius: "8px",
	};

	return (
		<div className="container-fluid my-4 vendourMainContainer">
			<div className="d-flex justify-content-between align-items-center">
				{!mobile && (
					<>
						<h1 className="font-weight-bold">Total: {posts.length} Vendeurs</h1>
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
			<div className="row px-3 px-lg-0">
				{currentPosts.map((prev, i) => {
					return (
						<div key={i} className="col-12 mb-3 shadow text-white">
							<div className="row">
								{!mobile && (
									<div
										style={bg}
										className="col-12 d-flex justify-content-between py-3"
									>
										<div className="d-flex">
											<img src={placeholder} alt="placeholder" />
											<div className="ml-3">
												<h3 className="font-weight-bold d-flex align-items-center">
													Ernest Peguita
													<img src={badge} alt="badge" className="ml-1" />
												</h3>
												<h5>Sur Makiti+ depuis Avril 2020</h5>
											</div>
										</div>
										<div className="d-flex align-self-end">
											<h5>12 publications</h5>
											<h5 className="ml-5">146 abonn??s</h5>
										</div>
										<BsThreeDotsVertical className="dotsIcon pointer" />
									</div>
								)}

								{mobile && (
									<div
										style={bg}
										className="col-12 d-flex align-items-center py-3"
									>
										<div className="d-flex">
											<div className="ml-3">
												<img
													className="userImg"
													src={placeholder}
													alt="placeholder"
												/>
											</div>
										</div>
										<div className="ml-4">
											<h3 className="font-weight-bold d-flex align-items-center">
												Ernest Peguita
												<img src={badge} alt="badge" className="ml-1" />
											</h3>
											<h5>Sur Makiti+ depuis Avril 2020</h5>
											<div className="d-flex text-dark">
												<h5 className="mb-0 ">12 publications</h5>
												<h5 className="mb-0 ml-4">146 abonn??s</h5>
											</div>
										</div>
										<BsThreeDotsVertical className="dotsIcon pointer" />
									</div>
								)}
								<div className="vendeursContainer col-12 px-2 px-lg-4 bg-white">
									<div className="d-flex my-4">
										{[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(
											(prev, i) => {
												return (
													<div key={i} className="col-4 col-lg-2 px-2">
														<div className="vendeursCard shadow bg-white text-dark">
															<img src={product} alt="product" />
															<div className="p-2">
																<h4 className="m-0 font-weight-bold">
																	800 000 FG
																</h4>
																<h5 className="themeColor">
																	Chaussure Nike a vendre
																</h5>
															</div>
														</div>
													</div>
												);
											}
										)}
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default VendeursTab;
