import React from "react"
import "./YourBusiness.css"
import { BsFillBellFill } from "react-icons/bs"
import Rating from "../components/Rating"
import { BsFlagFill } from "react-icons/bs"
import { BiDotsHorizontalRounded } from "react-icons/bi"
const YourBusiness = ({ createBusinessPage }) => {
	const createBusiness = () => {
		createBusinessPage()
	}
	return (
		<div className="your-business-container">
			<div className="title-your-business-container">
				<div className="title-your-business">
					<div className="heading-your-business"> Doanh nghiệp của bạn </div>
					<button className="create-your-business-btn">Tạo doanh nghiệp</button>
				</div>
				<BsFillBellFill className="bell-icon" />
			</div>
			{/* main */}
			<div className="main-your-business">
				{/* nav-main */}
				<div className="nav-main-your-business">
					<div className="flag-nav-main-your-business"></div>
					<div className="card-nav-main-your-business"></div>
					<div className="post-nav-main-your-business">
						Bài được đăng trong tuần
					</div>
					<div className="time-post-nav-main-your-business">
						Bài đăng được hẹn giờ
					</div>
					<div className="queue-message-nav-main-your-business">
						Tin nhắn chờ
					</div>
					<div className="viewer-nav-main-your-business">Lượt ghé thăm</div>
					<div className="notable-nav-main-your-business">Lượt đánh giá</div>
					<div className="bill-nav-main-your-business">Đơn hàng</div>
					<div className="income-nav-main-your-business">Doanh thu</div>
					<div className="admin-nav-main-your-business">Quản trị viên</div>
					<div className="address-nav-main-your-business">Địa chỉ</div>
				</div>
				{/* content */}
				<div className="main-your-business-container">
					{/* item1 */}
					<div className="submain-your-business-item-container">
						<div className="submain-your-business-container">
							<div className="flag-item-main-your-business">
								<BsFlagFill />
							</div>
							<div className="main-your-business-container-item">
								<div
									onClick={createBusiness}
									className="heading-main-your-business-container">
									{/* card */}
									<div className="card-item-main-your-business">
										<div className="circles-card-nav-main-your-business"></div>
										<div className="heading-info-card-nav-main-your-business">
											<h3 style={{ fontWeight: "900" }}>Tên doanh nghiệp</h3>
											<Rating
												name="size-small"
												defaultValue={2}
												size="small"
											/>
											<p>Lĩnh vực</p>
										</div>
										<BiDotsHorizontalRounded
											color="gray"
											size={20}
											style={{
												marginRight: "6px",
												marginLeft: "auto",
												marginTop: "auto",
											}}
										/>
									</div>
								</div>
								{/* item-content */}
								<div className="post-nav-main-your-business">5</div>
								<div className="time-post-nav-main-your-business">3</div>
								<div className="queue-message-nav-main-your-business">5</div>
								<div className="viewer-nav-main-your-business">1000</div>
								<div className="notable-nav-main-your-business">15</div>
								<div className="bill-nav-main-your-business">25</div>
								<div className="income-nav-main-your-business">5.000.000</div>
								<div className="admin-nav-main-your-business">
									Nguyễn Hoàng Luân
								</div>
								<div className="address-nav-main-your-business">
									123 Trường Sa, P.15, Q.3, TP.HCM
								</div>
							</div>
						</div>
						{/* comment */}
						<div>
							<div className="comment">
								<div className="comment-main-your-business">
									<div className="flag-comment-main-your-business"></div>
									<div className="card-comment-main-your-business"></div>
									<div className="post-comment-main-your-business"></div>
									<div className="time-post-comment-main-your-business"></div>
									<div className="queue-message-comment-main-your-business"></div>
									<div className="viewer-comment-main-your-business">
										<div>500 thích</div>
										<div className="unlike-viewer-comment-main-your-business">
											300 không thích
										</div>
										<div className="comment-viewer-comment-main-your-business">
											500 bình luận
										</div>
									</div>
									<div className="notable-comment-main-your-business"></div>
									<div className="bill-comment-main-your-business"></div>
									<div className="income-comment-main-your-business"></div>
									<div className="admin-comment-main-your-business"></div>
									<div className="address-comment-main-your-business"></div>
								</div>
							</div>
						</div>
					</div>
					{/* item2 */}
				</div>
			</div>
		</div>
	)
}

export default YourBusiness
