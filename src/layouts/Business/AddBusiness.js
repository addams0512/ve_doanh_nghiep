import React, { createContext, useContext, useEffect } from "react"
import "./AddBusiness.css"
import { useState } from "react"
import AboutBusiness from "../../components/Business/AboutBusiness"

import "../../components/Business/UploadImage"
import UploadImage from "../../components/Business/UploadImage"

// input components
function FormInput({ name, placeholder }) {
	return (
		<div className="input-business-information">
			<label>{name}</label>
			<input
				name={name}
				placeholder={placeholder}
			/>
		</div>
	)
}

export default function AddBusiness({ showBusiness }) {
	const [openPageAfter, setOpenPageAfter] = useState(false)
	const [closePageBefor, setClosePageBefor] = useState(true)

	const showYourBusiness = () => {
		showBusiness()
	}

	function openpage2() {
		setOpenPageAfter(true)
		setClosePageBefor(false)
	}

	// submit business data
	const submitBusiness = (e) => {
		e.preventDefault()
		const dataBusiness = new FormData(e.target)
		console.log(Object.fromEntries(dataBusiness.entries()))
	}

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
											<FormInput
												name="Tên doanh nghiệp"
												placeholder="Deedword"
											/>
											<FormInput
												name="Tên chủ doanh nghiệp"
												placeholder="Họ và tên"
											/>

											<FormInput
												name="MST"
												placeholder="MST"
											/>

											<FormInput
												name="CCCD/CMND của doanh nghiệp"
												placeholder="CCCD/CMND"
											/>

											<FormInput
												name="Địa chỉ"
												placeholder="Số nhà, tên đường"
											/>
											<div className="district-ward-container">
												<FormInput
													name="Phường"
													placeholder="Phường"
												/>

												<FormInput
													name="Quận"
													placeholder="Quận"
												/>
											</div>

											<FormInput
												name="Thành phố"
												placeholder="Thành phố"
											/>

											<FormInput
												name="Lĩnh vực"
												placeholder="Lĩnh vực"
											/>
											{/* <div className="add-business-create-file-business-body-porfile-personal">
												<div className="add-business-create-file-business-name-profile">
													Mô tả
												</div>
												<textarea className="add-business-create-file-business-info-describe" />
											</div> */}

											<button
												// onClick={openpage2}
												className="add-business-create-file-business-btn">
												TIẾP TỤC
											</button>
										</form>
									</div>
								)}
								{/* thoong tin trang 2 */}
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
													showYourBusiness()
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
					<AboutBusiness />
				</div>
			</div>
		</div>
	)
}
