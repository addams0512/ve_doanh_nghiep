import "./Services.css"
import { BsThreeDots } from "react-icons/bs"
import { FaEdit } from "react-icons/fa"
import { IoMdArrowDropdown } from "react-icons/io"
import { BsPlusCircleFill } from "react-icons/bs"
import { impressServicesData } from "../data/impressServicesData"
import { servicesData } from "../data/servicesData"
import AddServices from "../layouts/AddServices"
import React, { useState } from "react"
import Dropdown from "../components/Dropdown"

const Services = () => {
	const [displayEditService, setDisplayEditServices] = useState(false)
	const unDisplayEditService = () => {
		setDisplayEditServices(false)
	}
	return (
		<div className="services">
			{/* part1 */}
			<div className="img-services">
				<div
					onClick={() => {
						setDisplayEditServices(true)
					}}
					style={{ cursor: "pointer" }}
					className="img-services-custom">
					<FaEdit
						style={{ paddingBottom: "2px" }}
						size={"20"}
					/>
					Chỉnh sửa mục sản phẩm & dịch vụ
				</div>
				<div className="img-services-main">
					<img
						src=""
						alt="img123*123.png"
					/>
				</div>
				<div className="img-service-icon">
					<div className="img-service-icon-dot">
						<BsThreeDots />
					</div>
				</div>
			</div>
			{/* part2 */}
			<div className="outstanding-services">
				<div className="outstanding-services-title">Nổi bật</div>
				<div className="outstanding-services-content">
					{impressServicesData.map((elements) => {
						return (
							<div key={elements.id}>
								<div className="outstanding-services-content-img">
									<img
										src={elements.img}
										alt="img123*123.png"
									/>
								</div>
								<div className="outstanding-services-content-name">
									{elements.productName}
								</div>
								<div className="outstanding-services-content-description">
									{elements.description}
								</div>
							</div>
						)
					})}
				</div>
			</div>
			{/* part3 */}
			<div className="main-services">
				{/* part3.1 */}
				<div className="main-services-nav">
					<div className="main-services-nav-name">Sản phẩm và dịch vụ</div>
					<div className="main-services-nav-arrange">
						<div className="main-services-nav-arrange-title">Phân loại:</div>
						<div className="main-services-nav-arrange-dropdown">
							<Dropdown />
						</div>
					</div>
					<div className="main-services-nav-sort">
						<div className="main-services-nav-sort-title">Sắp xếp:</div>
						<div className="main-services-nav-sort-dropdown">
							<p>Mới nhất</p>
							<IoMdArrowDropdown size={"22"} />
						</div>
					</div>
				</div>
				{/* part 3.2 */}
				<div className="main-services-content-container">
					{servicesData.map((elements) => {
						return (
							<div key={elements.serviceId}>
								<div className="main-services-content">
									<div className="main-services-content-img">
										<img
											src={elements.img}
											alt="img123*123.png"
										/>
									</div>
									<div className="main-services-content-name">
										<div className="main-services-content-name-title">
											<h3>{elements.serviceName}</h3>
											<p>{elements.serviceDescription}</p>
										</div>
										<div className="main-services-content-name-des">
											{elements.serviceCode}
										</div>
									</div>
									<div className="main-services-content-price">
										<div>
											<BsPlusCircleFill
												size={"30"}
												style={{ color: "orange" }}
											/>
										</div>
										<div>{elements.servicePrice}</div>
									</div>
								</div>
							</div>
						)
					})}
				</div>
			</div>
			{displayEditService && <AddServices remove={unDisplayEditService} />}
		</div>
	)
}

export default Services
