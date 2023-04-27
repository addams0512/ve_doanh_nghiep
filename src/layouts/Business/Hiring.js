import React from "react"
import "./Hiring.css"
import { AiOutlinePaperClip } from "react-icons/ai"
import Rating from "../../components/Business/Rating"
const Hiring = (props) => {
	const handleclick = () => {
		props.reset()
	}

	return (
		<div className="about-business-hiring">
			<div className="about-business-hiring-container ">
				<div className="hiring-container-heading">
					<div className="hiring-heading-1">
						<h3>Ứng tuyển</h3>
					</div>

					<div className="hiring-heading-2">
						<div className="hiring-circles"></div>
						<div className="hiring-heading-info">
							<h4 style={{ fontSize: "20px", fontWeight: "900" }}>
								Tên người dùng
							</h4>
							<h6>Lĩnh vực</h6>
							<Rating size="small" />
						</div>
					</div>
					<div className="hiring-container-body">
						<div className="hiring-body-box">
							<textarea
								className="hiring-body-info"
								placeholder=" Nội dung..."></textarea>
						</div>
						<div className="hiring-container-bottom">
							<div className="hiring-bottom-info-1">
								<div className="hiring-bottom-info-2">
									<div className="hiring-bottom-info-2-option">
										<input
											className="hiring-option1"
											type="checkbox"></input>
										<div className="hiring-option2">
											{" "}
											Sử dụng CV online của bạn
										</div>
									</div>
								</div>
								<div className="hiring-bottom-info-3">
									<label htmlFor="hiring-document">
										<AiOutlinePaperClip size={20} /> Thêm hồ sơ đính kèm
									</label>
									<input
										type="file"
										id="hiring-document"
									/>
								</div>
							</div>
						</div>
						<div className="hiring-bottom-info-4">
							<button onClick={handleclick}>Hoàn thành</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hiring
