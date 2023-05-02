import React, { useContext } from "react";
import "./AddBusiness.css";
import { useState } from "react";
import "../../components/Business/UploadImage";
import UploadImage from "../../components/Business/UploadImage";
import { BusinessContext } from "../../pages/BusinessPage";
import PreviewBusiness from "./PreviewBusiness";
import {
	FormInput,
	inputs,
} from "../../components/Business/BusinessInformation";

export default function AddBusiness({ showBusiness }) {
	const { setBusinessData } = useContext(BusinessContext);
	const [openPageAfter, setOpenPageAfter] = useState(false);
	const [closePageBefor, setClosePageBefor] = useState(true);
	const valueBusiness = {
		businessName: "",
		businessOwner: "",
		taxCode: "",
		CIC: "",
		address: "",
		ward: "",
		district: "",
		city: "",
		major: "",
		description: "",
	};

	const [businessInformation, setBusinessInformation] = useState(valueBusiness);
	const showYourBusiness = () => {
		showBusiness();
	};

	// submit business data
	const submitBusiness = (e) => {
		e.preventDefault();
		const dataBusiness = new FormData(e.target);
		setBusinessData((businessData) => {
			return [...businessData, Object.fromEntries(dataBusiness.entries())];
		});
		setOpenPageAfter(true);
		setClosePageBefor(false);
	};

	// onchange Business Data
	const onBusinessData = (e) => {
		setBusinessInformation({
			...businessInformation,
			[e.target.name]: e.target.value, // array of name of business
		});
	};

	return (
		<div className="add-business-container-all">
			<div className="add-business-container">
				{/* Trang taoj doanh  nghiep */}

				<div className="add-business-container">
					<div style={{ backgroundColor: "rgb(230, 230, 230)" }}>
						{
							<div className="add-business-create-file-business-container">
								<div className="add-business-create-file-business-heading">
									<div className="add-business-create-file-business-heading-tittle">
										TẠO TRANG DOANH NGHIỆP
									</div>
								</div>
								{closePageBefor && (
									<div className="add-business-create-file-business-body">
										<div className="add-business-create-file-business-body-tittle">
											<div className="add-business-create-file-business-body-tittle-info">
												Thông tin doanh nghiệp
											</div>
										</div>
										<form
											onSubmit={submitBusiness}
											className="form-business-information"
											action="">
											{inputs.map((input) => (
												<div key={input.id}>
													<FormInput
														name={input.name}
														placeholder={input.placeholder}
														nameData={input.nameData}
														errorMessage={input.errorMessage}
														onChange={onBusinessData}
														required={input.required}
													/>
												</div>
											))}
											<div className="add-business-create-file-business-body-porfile-personal">
												<div className="add-business-create-file-business-name-profile">
													Mô tả
												</div>
												<textarea
													onChange={(e) => {
														setBusinessInformation({
															...businessInformation,
															description: e.target.value,
														});
													}}
													name="description"
													className="add-business-create-file-business-info-describe"
												/>
											</div>
											<button className="add-business-create-file-business-btn">
												TIẾP TỤC
											</button>
										</form>
									</div>
								)}
								{/* thông tin trang 2 */}
								{openPageAfter && (
									<div className="add-business-create-file-business-page-2">
										<div className="add-business-create-file-business-body-tittle">
											<div className="add-business-create-file-business-body-tittle-info">
												Thông tin doanh nghiệp
											</div>
										</div>
										<div className="add-business-create-file-business-profile-logo-personal">
											<div className="add-business-create-file-business-profile-logo">
												<div className="add-business-create-file-business-name-profile">
													Logo doanh nghiệp
												</div>
												<div className="add-business-create-file-business-compulsory">
													(*)
												</div>
											</div>
											<UploadImage
												imgClassName="img-avatar-business"
												containerName="detail-profile-add-business_container"
												imgContainer="add-business-create-file-business-profile-logo-circles "
												editContainer="add-business-create-file-business-profile-logo-fix-icon "
											/>
										</div>{" "}
										<div
											style={{ marginTop: "35px" }}
											className="add-business-create-file-business-profile-logo-personal">
											<div className="add-business-create-file-business-profile-background-pic">
												<div className="add-business-create-file-business-name-profile">
													Ảnh nền doanh nghiệp
												</div>
												<UploadImage
													imgClassName="img-background-business"
													containerName="background-business-container"
													imgContainer="add-business-create-file-business-profile-add-background-pic"
													editContainer="add-business-create-file-business-profile-background-pic-fix "
												/>
											</div>
										</div>
										<div className="add-business-create-file-business-page-2-bottom">
											<button
												onClick={() => {
													showYourBusiness();
												}}
												className="add-business-create-file-business-page-2-btn">
												XONG
											</button>
										</div>
									</div>
								)}
							</div>
						}
					</div>

					{/* trang doanh nghiệp */}
					<PreviewBusiness
						description={businessInformation.description}
						address={businessInformation.address}
						ward={businessInformation.ward}
						district={businessInformation.district}
						city={businessInformation.city}
						businessName={businessInformation.businessName}
						major={businessInformation.major}
					/>
				</div>
			</div>
		</div>
	);
}
