import React from "react"
import "./ManagePost.css"
import { AiOutlineEye } from "react-icons/ai"
import { AiFillLike } from "react-icons/ai"
import { BiCommentDetail } from "react-icons/bi"
import { HiOutlineShare } from "react-icons/hi"
import { BsCart2 } from "react-icons/bs"
import { CiClock2 } from "react-icons/ci"
import { BiCalendar } from "react-icons/bi"

export default function ManagePost() {
	return (
		<div className="manage-post-container">
			<div className="manage-post-BOX">
				<div className="manage-post-box-left">
					<div className="manage-post-box-left-high">Bài viết đã đăng</div>
					<div className="manage-post-box-left-1">
						<div className="manage-post-box-left-2">
							<div className="manage-post-left-content">
								<div className="manage-post-left-content-1">DW 00001</div>
								<div className="manage-post-left-content-2">Tiêu đề</div>
							</div>
							<div className="manage-post-right-content">
								<div className="manage-post-right-num">
									<div className="manage-post-right-number-1">
										<div className="manage-post-right-icon-1">
											<AiOutlineEye />
										</div>
										<div className="manage-post-right-content-1">2000</div>
									</div>
									<div className="manage-post-right-number-1">
										<div className="manage-post-right-icon-2">
											<AiFillLike />
										</div>
										<div className="manage-post-right-content-1">1000</div>
									</div>
									<div className="manage-post-right-number-1">
										<div className="manage-post-right-icon-3">
											<BiCommentDetail />
										</div>
										<div className="manage-post-right-content-1">300</div>
									</div>
								</div>
								<div className="manage-post-right-num-1">
									<div className="manage-post-right-number-1">
										<div className="manage-post-right-icon-4">
											<HiOutlineShare />
										</div>
										<div className="manage-post-right-content-1">100</div>
									</div>
									<div className="manage-post-right-number-1">
										<div className="manage-post-right-icon-5">
											<BsCart2 />
										</div>
										<div className="manage-post-right-content-1">50</div>{" "}
									</div>
								</div>
							</div>
						</div>

						<div className="manage-post-box-left-below">
							<div className="manage-post-box-left-below-date">1/1/2023</div>
							<div className="manage-post-box-left-below-option">...</div>
						</div>
					</div>
				</div>
				<div className="manage-post-box-right">
					<div className="manage-post-box-right-high">Bài viết đã được hẹn</div>
					<div className="manage-post-box-right-background">
						<div className="manage-post-box-left-2">
							<div className="manage-post-left-content">
								<div className="manage-post-left-content-1">DW 00001</div>
								<div className="manage-post-left-content-2">Tiêu đề</div>
							</div>
							<div className="manage-post-right-content">
								<div className="manage-post-right-num">
									<div className="manage-post-right-number-1">
										<div className="manage-post-right-icon-1">
											<CiClock2 />
										</div>
										<div className="manage-post-right-content-1">19:00</div>
									</div>
									<div className="manage-post-right-number-1">
										<div className="manage-post-right-icon-2">
											<BiCalendar />
										</div>
										<div className="manage-post-right-content-1">2/1/2023</div>
									</div>
								</div>
							</div>
						</div>
						<div className="manage-post-box-right-below">
							<div className="manage-post-box-right-below-option">...</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
