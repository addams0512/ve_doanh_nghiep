import React, { useState, useEffect, useRef } from "react"
import "./YourBusiness.css"
import { BsFillBellFill } from "react-icons/bs"
import Rating from "../components/Rating"
import { BiDotsHorizontalRounded } from "react-icons/bi"
import { BsFlagFill } from "react-icons/bs"
import { YourBusinessData as data } from "../data/yourbusinessData"
import { FaSortUp, FaSortDown } from "react-icons/fa"
import ColorPicker from "../components/ColorPicker"
import { useCallback } from "react"
const YourBusiness = ({ createBusinessPage }) => {
	const [loading, setLoading] = useState(false)
	const [sortStatus, setSortStatus] = useState("")
	const [sortPostWeek, setSortPostWeek] = useState(true)
	const [sortTimePost, setSortTimePost] = useState(true)
	const [sortQueueMessage, setSortQueueMessage] = useState(true)
	const [sortViewer, setSortViewer] = useState(true)
	const [sortNotable, setSortNotable] = useState(true)
	const [sortBill, setSortBill] = useState(true)
	const [sortIncome, setSortIncome] = useState(true)
	const [sortAdmin, setSortAdmin] = useState(true)
	const [sortAddress, setSortAddress] = useState(true)
	const [dataSelected, setDataSelected] = useState()
	const isFirstRender = useRef(true)
	const handleColorPicker = (id) => {
		if (isFirstRender.current) {
			isFirstRender.current = false
			return
		}
		setDataSelected(
			data.map((item) => {
				if (id === item.id) {
					item.colorPicker = !item.colorPicker
				} else {
					item.colorPicker = false
				}
				return item
			})
		)
	}
	useEffect(() => {
		switch (sortPostWeek) {
			case true:
				data.sort((a, b) => {
					return a.postInWeek - b.postInWeek
				})
				break
			case false:
				data.sort((a, b) => {
					return b.postInWeek - a.postInWeek
				})
				break
			default:
				break
		}
	}, [sortPostWeek])

	useEffect(() => {
		switch (sortTimePost) {
			case true:
				data.sort((a, b) => {
					return a.timePost - b.timePost
				})
				break
			case false:
				data.sort((a, b) => {
					return b.timePost - a.timePost
				})
				break
			default:
				break
		}
	}, [sortTimePost])

	useEffect(() => {
		switch (sortQueueMessage) {
			case true:
				data.sort((a, b) => {
					return a.queueMessage - b.queueMessage
				})
				break
			case false:
				data.sort((a, b) => {
					return b.queueMessage - a.queueMessage
				})
				break
			default:
				break
		}
	}, [sortQueueMessage])

	const handleClickSort = (name) => {
		switch (name) {
			case "PostInWeek":
				setSortPostWeek(!sortPostWeek)
				break
			case "TimePost":
				setSortTimePost(!sortTimePost)
				break
			case "QueueMessage":
				setSortQueueMessage(!sortQueueMessage)
				break
			case "Viewer":
				setSortViewer(!sortViewer)
				break
			case "Notable":
				setSortNotable(!sortNotable)
				break
			case "Bill":
				setSortBill(!sortBill)
				break
			case "Income":
				setSortIncome(!sortIncome)
				break
			case "Admin":
				setSortAdmin(!sortAdmin)
				break
			case "Address":
				setSortAddress(!sortAddress)
				break
			default:
				break
		}
	}

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
					<div
						className="post-nav-main-your-business"
						onClick={() => {
							handleClickSort("PostInWeek")
						}}>
						Bài được đăng trong tuần{" "}
						<div className="icon-sort-post-nav-main-your-business">
							{sortPostWeek ? <FaSortDown /> : <FaSortUp />}
						</div>
					</div>
					<div
						onClick={() => {
							handleClickSort("TimePost")
						}}
						className="time-post-nav-main-your-business">
						Bài đăng được hẹn giờ
						<div className="icon-sort-post-nav-main-your-business">
							{sortTimePost ? <FaSortDown /> : <FaSortUp />}
						</div>
					</div>
					<div
						onClick={() => {
							handleClickSort("QueueMessage")
						}}
						className="queue-message-nav-main-your-business">
						Tin nhắn chờ{" "}
						<div className="icon-sort-post-nav-main-your-business">
							{sortQueueMessage ? <FaSortDown /> : <FaSortUp />}
						</div>
					</div>
					<div
						onClick={() => {
							handleClickSort("Viewer")
						}}
						className="viewer-nav-main-your-business">
						Lượt ghé thăm
						<div className="icon-sort-post-nav-main-your-business">
							{sortViewer ? <FaSortDown /> : <FaSortUp />}
						</div>
					</div>
					<div
						onClick={() => {
							handleClickSort("Notable")
						}}
						className="notable-nav-main-your-business">
						Lượt đánh giá
						<div className="icon-sort-post-nav-main-your-business">
							{sortNotable ? <FaSortDown /> : <FaSortUp />}
						</div>
					</div>
					<div
						onClick={() => {
							handleClickSort("Bill")
						}}
						className="bill-nav-main-your-business">
						Đơn hàng
						<div className="icon-sort-post-nav-main-your-business">
							{sortBill ? <FaSortDown /> : <FaSortUp />}
						</div>
					</div>
					<div
						onClick={() => {
							handleClickSort("Income")
						}}
						className="income-nav-main-your-business">
						Doanh thu
						<div className="icon-sort-post-nav-main-your-business">
							{sortIncome ? <FaSortDown /> : <FaSortUp />}
						</div>
					</div>
					<div
						onClick={() => {
							handleClickSort("Admin")
						}}
						className="admin-nav-main-your-business">
						Quản trị viên
						<div className="icon-sort-post-nav-main-your-business">
							{sortAdmin ? <FaSortDown /> : <FaSortUp />}
						</div>
					</div>
					<div
						onClick={() => {
							handleClickSort("Address")
						}}
						className="address-nav-main-your-business">
						Địa chỉ
						<div className="icon-sort-post-nav-main-your-business">
							{sortAddress ? <FaSortDown /> : <FaSortUp />}
						</div>
					</div>
				</div>
				{/* content */}
				<div className="main-your-business-container">
					{/* item */}
					{data.map((element) => {
						return (
							<div
								key={element.id}
								className="submain-your-business-item-container">
								<div className="submain-your-business-container">
									<div className="flag-item-main-your-business">
										<BsFlagFill />
									</div>
									<div className="main-your-business-container-item">
										<div className="heading-main-your-business-container">
											{/* card */}
											<div className="card-item-main-your-business">
												<div className="circles-card-nav-main-your-business"></div>
												<div
													onClick={createBusiness}
													className="heading-info-card-nav-main-your-business">
													<h3 style={{ fontWeight: "900" }}>
														Tên doanh nghiệp
													</h3>
													<Rating
														name="size-small"
														defaultValue={2}
														size="small"
													/>
													<p>Lĩnh vực</p>
												</div>
												<div className="color-picker-card-item-main-your-business">
													<BiDotsHorizontalRounded
														onClick={() => handleColorPicker(element.id)}
														color="gray"
														size={20}
													/>
													{element.colorPicker && (
														<ColorPicker color2={element.color} />
													)}
												</div>
											</div>
										</div>
										{/* item-content */}
										<div className="post-nav-main-your-business">
											{element.postInWeek}
										</div>
										<div className="time-post-nav-main-your-business">
											{element.timePost}
										</div>
										<div className="queue-message-nav-main-your-business">
											{element.queueMessage}
										</div>
										<div className="viewer-nav-main-your-business">
											{element.viewer}
										</div>
										<div className="notable-nav-main-your-business">
											{element.notable}
										</div>
										<div className="bill-nav-main-your-business">
											{element.bill}
										</div>
										<div className="income-nav-main-your-business">
											{element.income}
										</div>
										<div className="admin-nav-main-your-business">
											{element.admin}
										</div>
										<div className="address-nav-main-your-business">
											{element.address}
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
												<div>{element.like}</div>
												<div className="unlike-viewer-comment-main-your-business">
													{element.unlike}
												</div>
												<div className="comment-viewer-comment-main-your-business">
													{element.comment}
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
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default YourBusiness
