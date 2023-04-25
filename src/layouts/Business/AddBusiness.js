import React, { createContext, useContext, useEffect, useRef } from "react"
import "./AddBusiness.css"
import { useState } from "react"
import "../../components/Business/UploadImage"
import UploadImage from "../../components/Business/UploadImage"
import { BusinessContext } from "../../pages/BusinessPage"
import PreviewBusiness from "./PreviewBusiness"

// input components
function FormInput(props) {
	const { errorMessage, nameData, name, placeholder, onchange, required } =
		props
	return (
		<div className="input-business-information">
			<label>{name}</label>
			<input
				type="text"
				onChange={(e) => onchange(e.target.value)}
				name={nameData}
				placeholder={placeholder}
				required={required}
			/>
			<span>{errorMessage}</span>
		</div>
	)
}

export default function AddBusiness({ showBusiness }) {
	const { businessData, setBusinessData } = useContext(BusinessContext)
	const [openPageAfter, setOpenPageAfter] = useState(false)
	const [closePageBefor, setClosePageBefor] = useState(true)
	const [businessName, setBusinessName] = useState("")
	const [major, setMajor] = useState("")
	const [description, setDescription] = useState("")
	const [address, setAddress] = useState("")
	const [ward, setWard] = useState("")
	const [district, setDistrict] = useState("")
	const [city, setCity] = useState("")

	const showYourBusiness = () => {
		showBusiness()
	}

	// submit business data
	const submitBusiness = (e) => {
		e.preventDefault()
		const dataBusiness = new FormData(e.target)
		setBusinessData((businessData) => {
			return [...businessData, Object.fromEntries(dataBusiness.entries())]
		})
		setOpenPageAfter(true)
		setClosePageBefor(false)
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
												onchange={(e) => setBusinessName(e)}
												nameData="businessName"
												name="Tên doanh nghiệp"
												placeholder="Deedword"
												errorMessage="(*) Trường này là bắt buộc"
												required={require}
											/>
											<FormInput
												nameData="businessOwner"
												name="Tên chủ doanh nghiệp"
												placeholder="Họ và tên"
												errorMessage="(*) Trường này là bắt buộc"
											/>

											<FormInput
												nameData="taxCode"
												name="MST"
												placeholder="MST"
											/>

											<FormInput
												nameData="CIC"
												name="CCCD/CMND chủ doanh nghiệp"
												placeholder="CCCD/CMND"
											/>

											<FormInput
												onchange={(e) => setAddress(e)}
												nameData="address"
												name="Địa chỉ"
												placeholder="Số nhà, tên đường"
												errorMessage="(*) Trường này là bắt buộc"
											/>
											<div className="district-ward-container">
												<FormInput
													onchange={(e) => setWard(e)}
													nameData="ward"
													name="Phường"
													placeholder="Phường"
													errorMessage="(*) Trường này là bắt buộc"
												/>

												<FormInput
													onchange={(e) => setDistrict(e)}
													nameData="district"
													name="Quận"
													placeholder="Quận"
													errorMessage="(*) Trường này là bắt buộc"
												/>
											</div>

											<FormInput
												onchange={(e) => setCity(e)}
												nameData="city"
												name="Thành phố"
												placeholder="Thành phố"
												errorMessage="(*) Trường này là bắt buộc"
											/>

											<FormInput
												onchange={(e) => setMajor(e)}
												nameData="major"
												name="Lĩnh vực"
												placeholder="Lĩnh vực"
												errorMessage="(*) Trường này là bắt buộc"
											/>
											<div className="add-business-create-file-business-body-porfile-personal">
												<div className="add-business-create-file-business-name-profile">
													Mô tả
												</div>
												<textarea
													onChange={(e) => setDescription(e.target.value)}
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
					<PreviewBusiness
						description={description}
						address={address}
						ward={ward}
						district={district}
						city={city}
						businessName={businessName}
						major={major}
					/>
				</div>
			</div>
		</div>
	)
}
