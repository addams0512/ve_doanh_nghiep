import React from "react"
import "./PreviewPost.css"
import { Rating } from "@mui/material"
import { VscTriangleDown } from "react-icons/vsc"
import { MdOutlineCalendarMonth } from "react-icons/md"

export default function PreviewPost({ hideCreatePost }) {
	function handleclick() {
		hideCreatePost()
	}
	return (
		<div className="preview-post">
			<div className="preview-post-BOX">
				<div className="preview-post-Box-heading">
					<div className="preview-post-circles"></div>
					<div className="preview-post-heading-info">
						<div className="preview-post-heading-info-1">Tên doanh nghiệp</div>
						<div className="preview-post-heading-info-2">Lĩnh vực</div>
						<div className="preview-post-STAR">
							<Rating />
						</div>
						<div className="preview-post-heading-info-3">Người đăng bài</div>
					</div>
					<div className="preview-post-Date">
						1/1/2023{" "}
						<VscTriangleDown
							size={"18px"}
							style={{ marginLeft: "20px" }}
						/>
					</div>
				</div>
				<div className="preview-post-Box-body">
					<div className="preview-post-body-info">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
						aperiam molestiae beatae eum nulla vitae sit quae cum saepe eveniet
						fuga omnis natus, quidem recusandae perspiciatis nobis libero, quod
						optio ab ex labore obcaecati, accusamus quis consequatur. Error
						voluptate facere, incidunt dicta adipisci laborum architecto nam
						vitae sit perspiciatis nobis eaque atque officia? Tenetur nobis
						obcaecati esse deleniti sed quasi nostrum vitae beatae deserunt
						distinctio velit eaque temporibus impedit, iusto aperiam vel qui
						repellat ea. Eligendi omnis hic voluptas delectus?
					</div>
				</div>
				<div className="preview-post-Box-botttom">
					<div className="preview-post-bottom-box"></div>
				</div>
				<div className="preview-post-Box-below">
					<div className="preview-post-below-button">
						<div className="preview-post-button-1">
							<button>
								<MdOutlineCalendarMonth
									style={{ marginRight: "8px" }}
									size={"20px"}
								/>
								Đặt lịch hẹn đăng bài
							</button>
						</div>
						<div className="preview-post-button-2">
							<button onClick={handleclick}>ĐĂNG BÀI</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
