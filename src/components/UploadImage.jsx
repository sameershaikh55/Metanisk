import React from "react";
import uploadImg from "../assets/uploadImg.svg";
import greenImgTick from "../assets/greenImgTick.svg";
import removeIcon from "../assets/removeIcon.svg";
import ImageUploading from "react-images-uploading";

const UploadImage = () => {
	const [images, setImages] = React.useState([]);
	const maxNumber = 69;
	const onChange = (imageList, addUpdateIndex) => {
		// data for submit
		console.log(imageList, addUpdateIndex);
		setImages(imageList);
	};
	return (
		<div>
			<ImageUploading
				multiple
				value={images}
				onChange={onChange}
				maxNumber={maxNumber}
				dataURLKey="data_url"
			>
				{({
					imageList,
					onImageUpload,
					// onImageRemoveAll,
					// onImageUpdate,
					onImageRemove,
					isDragging,
					dragProps,
				}) => (
					// write your building UI
					<div className="d-flex">
						<div className="mt-4">
							{imageList.length && imageList[0].data_url ? (
								<div className="uploadedImg position-relative">
									<img
										className="px-3 borderRounded"
										src={imageList[0].data_url}
										alt=""
										width="100"
									/>
									<div className="greenTick">
										<img src={greenImgTick} alt="greenImgTick" />
									</div>

									<div className="removeBtn">
										<img
											onClick={() => onImageRemove(0)}
											className="pointer"
											src={removeIcon}
											alt="removeIcon"
										/>
									</div>
								</div>
							) : (
								<img
									src={uploadImg}
									alt="lol"
									style={isDragging ? { color: "red" } : null}
									className="px-3 pointer"
									onClick={onImageUpload}
									{...dragProps}
								/>
							)}
						</div>

						<div className="mt-4">
							{imageList.length >= 2 && imageList[1].data_url ? (
								<div className="uploadedImg position-relative">
									<img
										className="px-3 borderRounded"
										src={imageList[1].data_url}
										alt=""
										width="100"
									/>
									<div className="greenTick">
										<img src={greenImgTick} alt="greenImgTick" />
									</div>

									<div className="removeBtn">
										<img
											onClick={() => onImageRemove(1)}
											className="pointer"
											src={removeIcon}
											alt="removeIcon"
										/>
									</div>
								</div>
							) : (
								<img
									src={uploadImg}
									alt="lol"
									style={isDragging ? { color: "red" } : null}
									className="px-3 pointer"
									onClick={onImageUpload}
									{...dragProps}
								/>
							)}
						</div>

						<div className="mt-4">
							{imageList.length >= 3 && imageList[2].data_url ? (
								<div className="uploadedImg position-relative">
									<img
										className="px-3 borderRounded"
										src={imageList[2].data_url}
										alt=""
										width="100"
									/>
									<div className="greenTick">
										<img src={greenImgTick} alt="greenImgTick" />
									</div>

									<div className="removeBtn">
										<img
											onClick={() => onImageRemove(3)}
											className="pointer"
											src={removeIcon}
											alt="removeIcon"
										/>
									</div>
								</div>
							) : (
								<img
									src={uploadImg}
									alt="lol"
									style={isDragging ? { color: "red" } : null}
									className="px-3 pointer"
									onClick={onImageUpload}
									{...dragProps}
								/>
							)}
						</div>
					</div>
				)}
			</ImageUploading>
		</div>
	);
};

export default UploadImage;
