import React from "react"
import "./AboutUs.css"
import { GoLocation } from "react-icons/go"
const AboutUs = () => {
	return (
		<div>
			<div className="about-us-container">
				<div className="about-us-container-box">
					<div className="about-us-container-box-left">
						<div className="about-us-container-box-describe">Mô tả</div>
						<div className="about-us-container-box-describe-content"></div>
					</div>
					<div className="about-us-container-box-right1">
						<div className="about-us-container-box-describe">Địa chỉ</div>
						<div className="about-us-container-box-address-content">
							<div className="about-us-container-box-address-info">
								<GoLocation size={20} />
							</div>
							<div
								style={{ display: "flex" }}
								className="about-us-container-box-address-info">
								<div
									style={{ marginLeft: "10px" }}
									className="about-us-container-box-address-info"></div>
								<div
									style={{ marginLeft: "20px" }}
									className="about-us-container-box-address-info"></div>
							</div>
							<div
								style={{ marginLeft: "18px" }}
								className="about-us-container-box-address-info"></div>
						</div>
					</div>
					<div className="about-us-container-box-right2">Bản đồ</div>
				</div>
			</div>
		</div>
	)
}

export default AboutUs
