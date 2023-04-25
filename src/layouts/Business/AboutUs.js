import React from "react"
import "./AboutUs.css"

const AboutUs = (props) => {
	return (
		<div>
			<div className="about-us-container">
				<div className="about-us-container-box">
					<div className="about-us-container-box-left">
						<div className="about-us-container-box-describe">Mô tả</div>
						<div className="about-us-container-box-describe-content">
							{props.description || ""}
						</div>
					</div>
					<div className="about-us-container-box-right1">
						<div className="about-us-container-box-describe">Địa chỉ</div>
						<div className="about-us-container-box-address-content">
							<p>Số nhà, tên đường: {props.address || ""}</p>
							<p>Phường: {props.ward || ""}</p>
							<p>Quận: {props.district || ""}</p>
							<p>Thành phố: {props.city || ""}</p>
						</div>
					</div>
					<div className="about-us-container-box-right2">
						<p style={{ marginTop: "10px" }}>Bản đồ</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutUs
