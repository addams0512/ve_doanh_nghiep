import React, { useContext, useEffect, useState } from "react"
import "./CreatePlan.css"
import { IoLocationSharp } from "react-icons/io5"
import { BsFillPersonFill } from "react-icons/bs"
import { FaRegClock, FaTags } from "react-icons/fa"
import { AiOutlinePlus } from "react-icons/ai"
import { BiSearch } from "react-icons/bi"
import { GrHistory } from "react-icons/gr"
import BasicCalendar from "./BasicCalendar"
import Kindofplan from "../../layouts/Calendar/Kindofplan"
import moment from "moment"
import { PlanContext } from "../../layouts/Calendar/CalendarLayout"
import instance from "../../data/instance"
import { ChromePicker } from "react-color"

const CreatePlan = ({ remove }) => {
	const { finalData, setFinalData } = useContext(PlanContext)
	const [tagPlan, setTagPlan] = useState([])
	const [displayDayPicker, setDisplayDayPicker] = useState(false)
	const [dayPicker, setDayPicker] = useState(new Date())
	const [displayAllPlan, setDisplayAllPlan] = useState(true)
	const [showTime, setShowTime] = useState(false)
	const [content, setContent] = useState()
	const [displayMorePartner, setDisplayMorePartner] = useState(false)
	const [timePicker, setTimePicker] = useState("00:00 - 01:00")
	const [openKindOfplan, setOpenFileKindOfPlan] = useState(false)
	const [openGoToPlace, setOpenFileGoToPlace] = useState(false)
	const [typeOfPlan, setTypeOfPlan] = useState(false)
	const [dataNotice, setDataNotice] = useState()
	const [selectedUsers, setSelectedUsers] = useState([])
	const [color, setColor] = useState("black")
	const [showcolordisplay, setShowColorDisplay] = useState(false)
	const [newPlan, setNewPlan] = useState("")
	const [tagPlanChoice, setTagPlanChoice] = useState()
	// get day - month - year
	const day = dayPicker.getDate()
	const month = dayPicker.getMonth()
	const year = dayPicker.getFullYear()

	// format currentDay
	const date = moment(dayPicker).format("YYYY-MM-DD")

	// format CN-T2-T3-T4-T5-T6-T7 to 1-2-3-4-5-6-7
	const dayOfWeek = (dayPicker.getDay() + 1) % 7 || 7

	// format day to Chủ nhật, Thứ 2, Thứ 3,...
	const getDayName = (date = dayPicker, locale = "vi-VN") => {
		return date.toLocaleDateString(locale, { weekday: "long" })
	}

	// generate timePicker
	const arrayTime = Array.from({ length: 24 }, (v, i) => {
		const startTime = new Date()
		startTime.setHours(i, 0, 0)
		const endTime = new Date(startTime)
		endTime.setHours(endTime.getHours() + 1)
		const formattedStartTime =
			startTime.getHours().toString().padStart(2, "0") +
			":" +
			startTime.getMinutes().toString().padStart(2, "0")
		const formattedEndTime =
			endTime.getHours().toString().padStart(2, "0") +
			":" +
			endTime.getMinutes().toString().padStart(2, "0")
		const intervalTime = formattedStartTime + " - " + formattedEndTime
		return {
			id: i + 1,
			time: intervalTime,
		}
	})

	// fucntion display

	//Type Of Plan
	const seeAllPlan = () => {
		setDisplayAllPlan(!displayAllPlan)
	}

	// Calendar for dayPicker
	const showDayPicker = () => {
		setDisplayDayPicker(!displayDayPicker)
	}

	//timePicker
	const showAllTime = () => {
		setShowTime(!showTime)
	}

	// Partner form
	function showfilegotoplace() {
		setOpenFileGoToPlace(!openGoToPlace)
	}

	// Kind of plan
	function showKindOfPlan() {
		setOpenFileKindOfPlan(true)
		setOpenFileGoToPlace(false)
	}

	// Display tagPlan
	const displayTagPlan = () => {
		setTypeOfPlan(true)
		setOpenFileKindOfPlan(false)
	}

	// remove createPlan form
	const handleCancel = () => {
		remove()
	}

	// colorPicker
	function showcolor() {
		setShowColorDisplay(!showcolordisplay)
	}

	// handle add tag plan

	const handleAddTag = (e) => {
		if (e.key === "Enter") {
			const lastTagId = tagPlan.length > 0 ? tagPlan.at(-1).id + 1 : 0
			const newTag = {
				id: lastTagId,
				color: color,
				type: newPlan,
				choose: false,
			}
			setTagPlan([...tagPlan, newTag])
			setNewPlan("")
		}
	}

	// choose tagPlan
	const chosenTagPlan = (id) => {
		const tagChosen = tagPlan.find((tag) => tag.id === id)
		setTagPlanChoice(tagChosen)
	}
	console.log(tagPlanChoice)
	// get User API
	const [userData, setUserData] = useState("")
	const [loading, setLoading] = useState(true)
	const [filteringData, setFilteringData] = useState([])
	useEffect(() => {
		instance
			.get("/users")
			.then((res) => {
				setUserData(res.data)
				setLoading(false)
			})
			.catch((e) => {
				console.log("hello")
			})
	}, [])

	// searchbar function
	const filterData = (value) => {
		if (!value) {
			setFilteringData([])
			return
		}
		const querry = value.toLowerCase()
		const dataFilter = userData.filter((item) => {
			return item.username.toLowerCase().includes(querry)
		})
		setFilteringData(dataFilter)
	}

	// partnerChoices
	const toggleUserSelection = (id) => {
		setUserData(
			userData.map((user) => {
				if (user.id === id) {
					user.chosen = !user.chosen
				}
				return user
			})
		)

		setSelectedUsers((selectedUsers) => {
			const existingUser = selectedUsers.find((user) => user.id === id)
			if (existingUser) {
				return selectedUsers.filter((user) => user.id !== id)
			}
			const newUser = userData.find((user) => user.id === id)

			return [...selectedUsers, newUser]
		})
	}

	// Notices data
	const noticeData = (e) => {
		setDataNotice(e.target.value)
	}

	// create plan
	const createPlan = () => {
		const nextId = finalData.length > 0 ? finalData.at(-1).id + 1 : 0
		setFinalData((item) => {
			const existingPlan = finalData.find((plan) => plan.id === item.id)
			if (existingPlan) {
				return finalData.filter((plan) => plan.id !== item.id)
			}
			return [
				...finalData,
				{
					id: nextId,
					content: content,
					tagPlan: tagPlan, // array of object of tagPlan
					date: date, // full date format YYYY-MM-DD
					timePicker: timePicker.slice(0, 5), // time format HH:MM
					intervalTime: timePicker, // time format HH:MM - HH:MM
					partner: selectedUsers, // array of partner
					note: dataNotice,
					planWeekDate: dayOfWeek, // day of week in format 1,2,3,4,5,6,7
					planTime: Number(timePicker.slice(0, 2)), // time format HH
					day: day, // day in format DD with dayPicker
					month: month, // month of dayPicker
					year: year, // year of dayPicker
				},
			]
		})
		console.log(finalData)
	}

	return (
		<div className="create-plan-container">
			<div className="calendar-picker-container">
				{displayDayPicker && (
					<BasicCalendar
						onChange={setDayPicker}
						value={dayPicker}
					/>
				)}
			</div>
			{openKindOfplan ? (
				<Kindofplan filteringPlan={displayTagPlan} />
			) : (
				<div className="create-plan-box">
					<div className="create-plan-btn">Tạo kế hoạch</div>
					<input
						onChange={(e) => setContent(e.target.value)}
						className="name-create-plan-input"
						type="text"
						placeholder="Kế hoạch của bạn"
					/>
					<div className="type-create-plan-container">
						<div className="title-type-create-plan-container">
							<FaTags size={30} />
							<div className="title-type-create-plan">Loại kế hoạch</div>
							<div className="new-tag-add-info">
								{tagPlanChoice === undefined ? (
									<input
										onKeyUp={handleAddTag}
										value={newPlan}
										onChange={(e) => setNewPlan(e.target.value)}
										type="text"
										placeholder="Tên tag"
										className="new-tag-input"></input>
								) : (
									<div>
										<div
											style={{ backgroundColor: tagPlanChoice.color }}
											className="tag-type-create-plan"></div>
										<div className="content-type-create-plan">
											{" "}
											{tagPlanChoice.type}
										</div>
									</div>
								)}
							</div>
							<div className="new-tag-add-color">
								<div className="new-tag-name-color">Chọn màu</div>
								<div
									onClick={showcolor}
									style={{ backgroundColor: color }}
									className="new-tag-color-option">
									{showcolordisplay && (
										<div>
											<ChromePicker
												color={color}
												onChange={(e) => setColor(e.hex)}
											/>
										</div>
									)}
								</div>
							</div>
						</div>
						<div className="tag-type-create-plan-container">
							<div
								style={displayAllPlan ? { height: "30px" } : { height: "70px" }}
								className="tag-type-create-plan-box-4">
								{displayAllPlan
									? tagPlan?.slice(0, 4).map((item) => {
											return (
												<div
													onClick={() => {
														chosenTagPlan(item.id)
													}}
													key={item.id}
													style={{ cursor: "pointer" }}
													className="tag-type-create-plan__box">
													<div
														style={{ backgroundColor: item.color }}
														className="tag-type-create-plan"></div>
													<div className="content-type-create-plan">
														{" "}
														{item.type}
													</div>
												</div>
											)
									  })
									: tagPlan?.map((item) => {
											return (
												<div key={item.id}>
													<div
														onClick={() => {
															chosenTagPlan(item.id)
														}}
														className="tag-type-create-plan__box">
														<div
															style={{ backgroundColor: item.color }}
															className="tag-type-create-plan"></div>
														<div className="content-type-create-plan">
															{" "}
															{item.type}
														</div>
													</div>
												</div>
											)
									  })}
							</div>
							<div
								onClick={seeAllPlan}
								style={{
									marginTop: "7px",
									fontSize: "14px",
									fontStyle: "italic",
									cursor: "pointer",
								}}>
								Xem tất cả
							</div>
							<div
								onClick={showKindOfPlan}
								style={{
									cursor: "pointer",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}>
								<AiOutlinePlus size={26} />
							</div>
						</div>
					</div>
					<div className="time-create-plan-container">
						<div
							style={{
								marginTop: "6px",
								display: "flex",
								justifyContent: "center",
							}}>
							<FaRegClock size={30} />
						</div>

						<div className="date-detail-create-plan-box">
							<div
								onClick={showDayPicker}
								className="date-detail-create-plan-container">
								{getDayName()}, {day} tháng {month + 1}{" "}
							</div>
							<div className="repeat-create-plan-container"> Lặp lại</div>
							<div
								style={{ cursor: "pointer" }}
								onClick={showAllTime}
								className="time-detail-create-plan-container">
								{" "}
								<p>{timePicker}</p>
								{showTime && (
									<div className="dropdown-time-detail-create-plan-container">
										{arrayTime.map((time) => {
											return (
												<div
													onClick={() => setTimePicker(time.time)}
													key={time.id}
													className="dropdown-time-detail-create-plan-box">
													{time.time}
												</div>
											)
										})}
									</div>
								)}
							</div>
						</div>
					</div>
					<div className="go-together-create-plan-container">
						<div
							style={{
								display: "flex",
								justifyContent: "center",
							}}>
							<BsFillPersonFill size={30} />
						</div>
						<div
							style={
								displayMorePartner ? { height: "100px" } : { height: "70px" }
							}
							onClick={showfilegotoplace}
							className="go-together-create-plan-box">
							{selectedUsers.length > 5 && displayMorePartner
								? selectedUsers.map((user) => {
										return (
											<div
												key={user.id}
												className="partner-together-item">
												{user.username},
											</div>
										)
								  })
								: selectedUsers.slice(0, 4).map((user) => {
										return (
											<div
												key={user.id}
												className="partner-together-item">
												{user.username},
											</div>
										)
								  })}
						</div>
						<div
							onClick={() => setDisplayMorePartner(!displayMorePartner)}
							style={{
								cursor: "pointer",
								fontStyle: "italic",
								fontSize: "1rem	",
							}}>
							+ {selectedUsers.length > 4 ? selectedUsers.length - 4 : 0}
						</div>
					</div>
					<div className="location-create-plan-container">
						<div
							style={{
								display: "flex",
								justifyContent: "center",
							}}>
							<IoLocationSharp size={30} />
						</div>
						<input
							placeholder="Vị trí"
							className="location-create-plan-box"></input>
					</div>
					<div className="notice-create-plan-container">
						<textarea
							onChange={noticeData}
							placeholder="Chú thích"></textarea>
					</div>
					<div className="button-delete-create-plan-container">
						<button onClick={handleCancel}>Hủy</button>
						<button onClick={createPlan}>Tạo</button>
					</div>
				</div>
			)}
			{openGoToPlace && (
				<div className="go-to-palace-container">
					<div className="go-to-palace-tittle">
						<div className="go-to-palace-tittle-info">Đi cùng</div>
					</div>
					<div className="go-to-palace-search-bar">
						<div className="go-to-palace-search-all">
							<div className="go-to-palace-search-icon">
								<BiSearch size={20} />
							</div>
							<input
								onChange={(e) => filterData(e.target.value)}
								type="text"
								placeholder="Tìm bạn"
								className="go-to-palace-search-input"></input>
						</div>
					</div>
					<div className="go-to-palace-result">
						<div className="go-to-palace-result-icon">
							<GrHistory size={18} />
						</div>
						<div className="go-to-palace-result-info"> Gần nhất</div>
					</div>
					<div className="go-together-user-container">
						{filteringData.length === 0
							? selectedUsers.slice(0, 5).map((user) => {
									return (
										<div
											onClick={() => {
												toggleUserSelection(user.id)
											}}
											key={user.id}
											className="go-to-palace-result-name">
											<div className="go-to-palace-result-name-img"></div>
											<div className="go-to-palace-result-name-info">
												{user.username}
											</div>
										</div>
									)
							  })
							: filteringData.map((user) => {
									return (
										<div
											onClick={() => {
												toggleUserSelection(user.id)
											}}
											key={user.id}
											className="go-to-palace-result-name">
											<div className="go-to-palace-result-name-img"></div>
											<div className="go-to-palace-result-name-info">
												{user.username}
											</div>
										</div>
									)
							  })}
					</div>
					<div className="go-to-palace-btn-bottom">
						<div className="go-to-palace-btn-cacel">
							<button
								onClick={() => setOpenFileGoToPlace(false)}
								className="go-to-palace-form-btn-cancel">
								Hủy
							</button>
						</div>
						<div className="go-to-palace-btn-add">
							<button className="go-to-palace-form-btn-add">Thêm</button>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default CreatePlan
