import React, { useState, useEffect, useRef } from "react"
import "./YourBusiness.css"
import { BsFillBellFill } from "react-icons/bs"
import Rating from "../../components/Business/Rating"
import { BiDotsHorizontalRounded } from "react-icons/bi"
import { BsFlagFill, BsFlag } from "react-icons/bs"

import { FaSortUp, FaSortDown } from "react-icons/fa"
import ColorPicker from "../../components/Business/ColorPicker"
import axios from "axios"
import { useCallback } from "react"
import instance from "../../data/instance"
import Notification from "../../components/Business/Notification"
const YourBusiness = ({ createBusinessPage }) => {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)
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
	const [sortData, setSortData] = useState([])
	const [color, setColor] = useState([])
	const [displayNotification, setDisplayNotification] = useState(false)
	const [dataFavorite, setDataFavovrite] = useState(data)
	const [onFiltering, setOnFiltering] = useState(false)

	// Get API
	useEffect(() => {
		instance.get("/DataYourBusiness").then((res) => {
			setData(res.data)
			setLoading(false)
		})
	}, [])

	// handleColorPicker
	const handleColorPicker = (id) => {
		setDataSelected(
			data.map((item) => {
				if (item.id === id) {
					item.colorPicker = !item.colorPicker
				}
				return item
			})
		)
	}

	// handlePriority
	const displayPriority = (id) => {
		// const newArray = data.filter((item) => {
		// 	return item.id !== id
		// })

		// const dataPriority = data.find((item) => {
		// 	return item.id === id
		// })

		// newArray.unshift(dataPriority)

		setDataSelected(
			data.map((item) => {
				if (item.id === id) {
					item.priOrity = !item.priOrity
				}
				return item
			})
		)
	}

	// handleClickSort
	const handleClickSort = (name) => {
		switch (name) {
			case "PostInWeek":
				setSortPostWeek(!sortPostWeek)
				setSortData(() => {
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
				})
				break
			case "TimePost":
				setSortTimePost(!sortTimePost)
				setSortData(() => {
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
				})
				break
			case "QueueMessage":
				setSortQueueMessage(!sortQueueMessage)
				setSortData(() => {
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
				})
				break
			case "Viewer":
				setSortViewer(!sortViewer)
				setSortData(() => {
					switch (sortViewer) {
						case true:
							data.sort((a, b) => {
								return a.viewer - b.viewer
							})
							break
						case false:
							data.sort((a, b) => {
								return b.viewer - a.viewer
							})
							break
						default:
							break
					}
				})
				break
			case "Notable":
				setSortNotable(!sortNotable)
				setSortData(() => {
					switch (sortNotable) {
						case true:
							data.sort((a, b) => {
								return a.notable - b.notable
							})
							break
						case false:
							data.sort((a, b) => {
								return b.notable - a.notable
							})
							break
						default:
							break
					}
				})
				break
			case "Bill":
				setSortBill(!sortBill)
				setSortData(() => {
					switch (sortBill) {
						case true:
							data.sort((a, b) => {
								return a.bill - b.bill
							})
							break
						case false:
							data.sort((a, b) => {
								return b.bill - a.bill
							})
							break
						default:
							break
					}
				})
				break
			case "Income":
				setSortIncome(!sortIncome)
				setSortData(() => {
					switch (sortIncome) {
						case true:
							data.sort((a, b) => {
								return a.income - b.income
							})
							break
						case false:
							data.sort((a, b) => {
								return b.income - a.income
							})
							break
						default:
							break
					}
				})
				break
			case "Admin":
				setSortAdmin(!sortAdmin)
				switch (sortAdmin) {
					case true:
						data.sort((a, b) => {
							if (a.admin < b.admin) return -1
							if (a.admin > b.admin) return 1
							return 0
						})
						break
					case false:
						data.sort((a, b) => {
							if (a.admin > b.admin) return -1
							if (a.admin < b.admin) return 1
							return 0
						})
						break
					default:
						break
				}
				break
			case "Address":
				setSortAddress(!sortAddress)
				switch (sortAddress) {
					case true:
						data.sort((a, b) => {
							if (a.address < b.address) return -1
							if (a.address > b.address) return 1
							return 0
						})
						break
					case false:
						data.sort((a, b) => {
							if (a.address > b.address) return -1
							if (a.address < b.address) return 1
							return 0
						})
						break
					default:
						break
				}
				break
			default:
		}
	}

	// convertRGBA
	function hexToRgbA(hex, opacity) {
		var c
		if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
			c = hex.substring(1).split("")
			if (c.length === 3) {
				c = [c[0], c[0], c[1], c[1], c[2], c[2]]
			}
			c = "0x" + c.join("")
			return (
				"rgba(" +
				[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") +
				`,${opacity})`
			)
		}
	}
	// confirmColor
	const confirmColor = () => {
		color.forEach((item) => {
			axios
				.put(
					`https://64267442556bad2a5b50064a.mockapi.io/DataYourBusiness/${item.id}`,
					{
						color: item.color,
						id: item.id,
					}
				)
				.then(() => {
					console.log(
						"🚀 ~ file: YourBusiness.js:256 ~ color.forEach ~ item.id:",
						item.id + "-" + item.color
					)
				})
				.catch((err) => {
					console.log(err)
				})
		})
	}
	const createBusiness = () => {
		createBusinessPage()
	}

	const toggleNoti = () => {
		setDisplayNotification(!displayNotification)
	}

	// filterFavorite
	// const filterFavorite = () => {
	// 	setDataFavovrite(
	// 		data.filter((item) => {
	// 			if (item.priOrity === true) return item
	// 		})
	// 	)
	// 	console.log(dataFavorite)
	// }

	const favoriteData = data.filter((s) => {
		if (onFiltering) {
			return s.priOrity
		} else {
			return s
		}
	})

	// const reOrderingData = data.sort((a, b) => {
	// 	a = a.priOrity || ""
	// 	b = b.priOrity || ""
	// 	return b - a
	// })

	return (
		<div className="your-business-container">
			<div className="title-your-business-container">
				<div className="title-your-business">
					<div className="heading-your-business"> Doanh nghiệp của bạn </div>
					<button className="create-your-business-btn">Tạo doanh nghiệp</button>
				</div>
				<BsFillBellFill
					onClick={toggleNoti}
					className="bell-icon"
				/>
				{displayNotification && (
					<div
						onMouseDown={() => setDisplayNotification(false)}
						className="notification-toggle-background">
						<div className="notification-toggle-container">
							<Notification />
						</div>
					</div>
				)}
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
					{favoriteData.map((element) => {
						return (
							<div
								key={element.id}
								className="submain-your-business-item-container">
								<div className="submain-your-business-container">
									<div
										onClick={() => {
											displayPriority(element.id)
										}}
										className="flag-item-main-your-business">
										{element.priOrity ? <BsFlagFill /> : <BsFlag />}
									</div>
									<div
										style={{
											backgroundColor: hexToRgbA(element?.color, 0.2),
										}}
										className="main-your-business-container-item">
										<div
											style={{
												backgroundColor: `${element.color}`,
											}}
											className="heading-main-your-business-container">
											{/* card */}
											<div className="card-item-main-your-business">
												<div className="circles-card-nav-main-your-business"></div>
												<div
													onClick={createBusiness}
													className="heading-info-card-nav-main-your-business">
													<h3 style={{ fontWeight: "900" }}>
														{element.yourBusiness}
													</h3>
													<Rating
														name="size-small"
														defaultValue={2}
														size="small"
													/>
													<p>{element.major}</p>
												</div>
												<div className="color-picker-card-item-main-your-business">
													<BiDotsHorizontalRounded
														onClick={() => handleColorPicker(element.id)}
														color="gray"
														size={20}
													/>
													{element.colorPicker && (
														<ColorPicker
															displayColor={(displayColor) => {
																setColor(
																	data.map((item) => {
																		if (item.id === element.id) {
																			item.color = displayColor.hex
																		}
																		return item
																	})
																)
															}}
														/>
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
												<div>{element.like} thích</div>
												<div className="unlike-viewer-comment-main-your-business">
													{element.unlike} không thích
												</div>
												<div className="comment-viewer-comment-main-your-business">
													{element.comment} bình luận
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
				<button
					onClick={confirmColor}
					className="confirm-color">
					CONFIRMCOLOR
				</button>
				<button onClick={() => setOnFiltering(!onFiltering)}>FAVORITE</button>
			</div>
		</div>
	)
}

export default YourBusiness
