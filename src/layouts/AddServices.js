import React, { useState } from "react"
import "./AddServices.css"
import { IoMdArrowDropdown } from "react-icons/io"

import { TfiMenuAlt } from "react-icons/tfi"
import { BsPlusCircleFill } from "react-icons/bs"
import { BiSquare } from "react-icons/bi"
import EditServices from "./EditServices"
const AddServices = ({ remove }) => {
	const [displayEditService, setDisplayEditServices] = useState(false)
	const removeAddServices = () => {
		remove()
	}
	return (
		<div className="add-services-container">
			{/* part1 */}
			<div className="type-services">
				<div className="type-services-container">
					<p className="title-type-services">Phân loại sản phẩm & dịch vụ</p>
					<div className="dropdown-type-services">
						<div className="group-type-services">
							Nhóm phân loại <IoMdArrowDropdown style={{ fontSize: "26px" }} />
						</div>
						<div className="main-type-services">
							Phân loại <IoMdArrowDropdown style={{ fontSize: "26px" }} />
						</div>
					</div>
				</div>
			</div>
			{/* part2 */}
			{displayEditService ? (
				<EditServices hideEditServices={removeAddServices} />
			) : (
				<div className="add-services-main">
					<div className="heading-add-services-main">
						<p className="title-add-services-main">Thêm sản phẩm & dịch vụ</p>
						<div className="icon-title-add-services-main">
							<BiSquare className="detail-icon-title-add-services-main" />
							<TfiMenuAlt className="detail-icon-title-add-services-main" />
						</div>
					</div>
					<div className="main-add-services-main">
						<div className="submain-add-services-main-container">
							<div className="submain-add-services-main">
								<div
									onClick={() => setDisplayEditServices(true)}
									className="img-add-services">
									<BsPlusCircleFill
										size={"20"}
										style={{ color: "orange" }}
									/>
									Thêm ảnh
								</div>
								<div className="title-add-services">
									<p className="name-add-services">Tên sản phẩm & dịch vụ</p>
									<p className="detail-add-services">Chi tiết</p>
								</div>
								<div className="code-add-services">Mã sản phẩm dịch vụ</div>
								<div className="price-add-services">____VND</div>
							</div>

							<div className="purchase-btn-add-services-main">
								<button onClick={removeAddServices}>HOÀN THÀNH</button>
							</div>
						</div>
					</div>
				</div>
			)}
			{/* part3 */}
			<div className="impress-services">
				<div className="title-impress-services">Sản phẩm & dịch vụ nổi bật</div>
				<div className="container-impress-services">
					<div className="sub-container-impress-services">
						<div className="img-container-impress-services">
							{" "}
							<BsPlusCircleFill
								size={"40"}
								style={{ marginBottom: "10px", color: "orange" }}
							/>
						</div>
						<div className="content-sub-container-impress-services">
							<b className="name-impress-services">Tên sản phẩm & dịch vụ</b>
							<div className="description-impress-services">Mô tả</div>
						</div>
					</div>
					<div className="sub-container-impress-services">
						<div className="img-container-impress-services">
							{" "}
							<BsPlusCircleFill
								size={"40"}
								style={{ marginBottom: "10px", color: "orange" }}
							/>
						</div>
						<div className="content-sub-container-impress-services">
							<b className="name-impress-services">Tên sản phẩm & dịch vụ</b>
							<div className="description-impress-services">Mô tả</div>
						</div>
					</div>
					<div className="sub-container-impress-services">
						<div className="img-container-impress-services">
							{" "}
							<BsPlusCircleFill
								size={"40"}
								style={{ marginBottom: "10px", color: "orange" }}
							/>
						</div>
						<div className="content-sub-container-impress-services">
							<b className="name-impress-services">Tên sản phẩm & dịch vụ</b>
							<div className="description-impress-services">Mô tả</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AddServices
