import React, { useContext, useEffect, useState, useReducer } from "react"
import "./CreatePlan.css"
import { IoLocationSharp } from "react-icons/io5"
import { BsFillPersonFill } from "react-icons/bs"
import { FaRegClock, FaTags } from "react-icons/fa"
import { BiSearch } from "react-icons/bi"
import { GrHistory } from "react-icons/gr"
import BasicCalendar from "./BasicCalendar"
import moment from "moment"
import { DayContext, PlanContext } from "../../layouts/Calendar/CalendarLayout"
import instance from "../../data/instance"
import { RiDeleteBack2Line, RiChatDeleteLine } from "react-icons/ri"
import { ChromePicker } from "react-color"
import { HiPlusSmall } from "react-icons/hi2"
import { BiLoaderCircle } from "react-icons/bi"
// const initState = {
// 	loading: true,
// 	data: [],
// 	error: null,
// }

// const planReducer = (state, action) => {
// 	switch (action.type) {
// 		case "GET_PLAN_REQUEST":
// 			return {
// 				...state,
// 				loading: false,
// 			}
// 		case "GET_PLAN_SUCCESS":
// 			return {
// 				...state,
// 				loading: true,
// 				data: action.data,
// 			}
// 		case "GET_PLAN_FAILED":
// 			return {
// 				...state,
// 				error: action.data,
// 				data: [],
// 			}
// 		default:
// 			break
// 	}
// }
const CreatePlan = ({ remove }) => {
	const { finalData, setFinalData, tagPlan, setTagPlan } =
		useContext(PlanContext)
	const [tagChoice, setTagChoice] = useState()
	const [displayDayPicker, setDisplayDayPicker] = useState(false)
	const [dayPicker, setDayPicker] = useState(new Date())
	const [showTime, setShowTime] = useState(false)
	const [content, setContent] = useState()
	const [displayMorePartner, setDisplayMorePartner] = useState(false)
	const [timePicker, setTimePicker] = useState("00:00 - 01:00")
	const [openGoToPlace, setOpenFileGoToPlace] = useState(false)
	const [dataNotice, setDataNotice] = useState()
	const [selectedUsers, setSelectedUsers] = useState([])
	const [color, setColor] = useState("black")
	const [showcolordisplay, setShowColorDisplay] = useState(false)
	const [newPlan, setNewPlan] = useState("")
	const [location, setLocation] = useState()
	const [isTagChoice, setIsTagChoice] = useState(false)
	const [isUserData, setIsUserData] = useState(false)
	const [selectedIndex, setSelectedIndex] = useState(0)
	// loading
	// const [plan, userDispatch] = useReducer(planReducer, initState)

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
		// userDispatch({
		// 	type: "GET_PLAN_REQUEST",
		// })

		// instance
		// 	.get("/users")
		// 	.then((res) => {
		// 		userDispatch({
		// 			type: "GET_PLAN_SUCCESS",
		// 			data: res,
		// 		})
		// 	})
		// 	.then((res) => console.log({ res }))
		// 	.catch((e) => {
		// 		userDispatch({
		// 			type: "GET_PLAN_ERROR",
		// 			data: e,
		// 		})
		// 	})
	}

	const deleteTag = (id) => {
		setTagPlan(tagPlan.filter((plan) => !plan.delete))
	}

	//handle show deleteTag
	const handleDeleteTag = (id) => {
		setTagPlan(
			tagPlan.map((plan) => {
				if (plan.id === id) {
					plan.delete = true
				}
				return plan
			})
		)
	}

	const cancelDeleteTag = (id) => {
		setTagPlan(
			tagPlan.map((plan) => {
				if (plan.id === id) {
					plan.delete = false
				}
				return plan
			})
		)
	}

	// remove createPlan form
	const handleCancel = () => {
		remove()
	}

	// colorPicker
	function showcolor() {
		setShowColorDisplay(!showcolordisplay)
	}

	const closeColorPicker = () => {
		setShowColorDisplay(false)
	}

	// handle add tag plan

	const handleAddTag = (e) => {
		if (e.key === "Enter") {
			const lastTagId = tagPlan.length > 0 ? tagPlan.at(-1).id + 1 : 0
			const newTag = {
				id: lastTagId,
				color: color,
				type: newPlan,
				delete: false,
			}
			setTagPlan([...tagPlan, newTag])
			setNewPlan("")
		}
	}

	// choose Tag
	const tagChosen = (id) => {
		const tagChosen = tagPlan.find((tag) => id === tag.id)
		setIsTagChoice(true)
		setTagChoice(tagChosen)
	}

	// get User API
	const [userData, setUserData] = useState("")
	const [loading, setLoading] = useState(true)
	const [filteringData, setFilteringData] = useState([])
	useEffect(() => {
		const getUserData = async () => {
			try {
				const res = await instance.get("/users")
				setLoading(false)
				setUserData(res.data)
			} catch (error) {
				console.log(error)
			} finally {
				setLoading(false)
			}
		}
		getUserData()
	}, [openGoToPlace])

	// searchbar function
	const filterData = (value) => {
		setIsUserData(true)
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

	// partnerChoices with key
	function handleKeyDown(event) {
		if (event.keyCode === 38) {
			// up arrow
			setSelectedIndex((prevIndex) => {
				if (prevIndex === 0) {
					return 0
				} else {
					return prevIndex - 1
				}
			})
		} else if (event.keyCode === 40) {
			// down arrow
			setSelectedIndex((prevIndex) => {
				if (prevIndex === filteringData.length - 1) {
					return 0
				} else {
					return prevIndex + 1
				}
			})
		} else if (event.keyCode === 13) {
			setUserData(
				filteringData.map((user, index) => {
					if (index === selectedIndex) {
						user.chosen = !user.chosen
					}
					return user
				})
			)
			const existingUser = selectedUsers.find(
				(user, index) => selectedIndex === index
			)
			if (existingUser) {
				return selectedUsers.filter(
					(user, index) => user.id !== existingUser.id
				)
			}
			const newUser = filteringData.find(
				(user, index) => index === selectedIndex
			)
			selectedUsers.push(newUser)
		}
	}

	const selected = selectedUsers.filter((s) => {
		return s.chosen
	})

	// get Notices data
	const noticeData = (e) => {
		setDataNotice(e.target.value)
	}

	// get Location data
	const onChangeLocation = (e) => {
		setLocation(e.target.value)
	}

	// create plan
	const createPlan = (item) => {
		const nextId = finalData.length > 0 ? finalData.at(-1).id + 1 : 0
		const existingPlan = finalData.find((plan) => plan.id === item.id)
		if (existingPlan) {
			return finalData.filter((plan) => plan.id !== item.id)
		}
		let dataArray = [
			...finalData,
			{
				id: nextId,
				content: content,
				tagChoice: tagChoice || { color: "black", name: "" }, // tag chosen
				date: date, // full date format YYYY-MM-DD
				intervalTime: timePicker, // time format HH:MM - HH:MM
				partner: selectedUsers, // array of partner
				location: location,
				note: dataNotice,
				planWeekDate: dayOfWeek, // day of week in format 1,2,3,4,5,6,7
				planTime: Number(timePicker.slice(0, 2)), // time format HH
				timePicker: timePicker.slice(0, 5), // time format HH:MM
				day: day, // day in format DD with dayPicker
				month: month, // month of dayPicker
				year: year, // year of dayPicker
				completed: false,
				expirePlan: false,
			},
		]
		setFinalData(dataArray)
		remove()
	}

	return (
		<div className="create-plan-container">
			{loading ? (
				<div className="loading">
					<BiLoaderCircle
						size={100}
						color="white"
					/>
				</div>
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
								{isTagChoice ? (
									<div className="tag-type-create-plan__box">
										<div
											style={
												isTagChoice
													? {
															cursor: "pointer",
															backgroundColor: tagChoice.color,
													  }
													: { cursor: "pointer", backgroundColor: "black" }
											}
											className="tag-type-create-plan"></div>
										<div className="content-type-create-plan">
											{" "}
											{tagChoice.type}
										</div>
										<RiChatDeleteLine
											onClick={() => {
												setTagChoice([])
												setIsTagChoice(false)
											}}
											color="red"
											size={20}
											style={{ cursor: "pointer", marginBottom: "20px" }}
										/>
									</div>
								) : (
									<div className="add-new-tag-plan">
										<input
											onKeyUp={handleAddTag}
											value={newPlan}
											onChange={(e) => setNewPlan(e.target.value)}
											type="text"
											placeholder="Tạo tag"
											className="new-tag-input"
										/>

										<div className="new-tag-add-color">
											<div
												onClick={showcolor}
												style={{ backgroundColor: color }}
												className="new-tag-color-option"></div>
											{showcolordisplay && (
												<div className="tag-color-option">
													<div
														onClick={closeColorPicker}
														className="tag-color-option-cover"
													/>
													<ChromePicker
														color={color}
														onChange={(e) => setColor(e.hex)}
													/>
												</div>
											)}
										</div>
									</div>
								)}
							</div>
						</div>
						<div className="tag-type-create-plan-container">
							<div className="tag-type-create-plan-box-4">
								{tagPlan.map((item) => {
									return (
										<div
											key={item.id}
											className="array-of-tag-plan">
											<div
												style={{ cursor: "pointer" }}
												onClick={() => tagChosen(item.id)}
												className="tag-type-create-plan__box">
												<div
													style={{
														backgroundColor: item.color,
													}}
													className="tag-type-create-plan"></div>
												<div className="content-type-create-plan">
													{" "}
													{item.type}
												</div>
											</div>
											<RiDeleteBack2Line
												style={{ cursor: "pointer" }}
												onClick={() => handleDeleteTag(item.id)}
												color="red"
											/>
											{item.delete && (
												<div className="accept-delete-tag-container">
													<div className="accept-delete-tag-box">
														<div className="title-delete-tag__pop-up">
															Bạn có chắc muốn hủy tag này?
														</div>
														<div className="btn-delete-tag__pop-up">
															<button onClick={() => cancelDeleteTag(item.id)}>
																Hủy
															</button>
															<button onClick={() => deleteTag(item.id)}>
																{" "}
																Xác nhận
															</button>
														</div>
													</div>
												</div>
											)}
										</div>
									)
								})}
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
								style={{ cursor: "pointer" }}
								onClick={showDayPicker}
								className="date-detail-create-plan-container">
								{getDayName()}, {day} tháng {month + 1} , {year}
							</div>
							{displayDayPicker && (
								<div className="calendar-picker-container">
									<div
										onClick={() => setDisplayDayPicker(false)}
										className="calendar-picker-cover"
									/>
									<div className="calendar-for-pickerDate">
										<BasicCalendar
											onChange={(e) => {
												setDayPicker(e)
												setDisplayDayPicker(false)
											}}
											value={dayPicker}
										/>
									</div>
								</div>
							)}

							<div className="repeat-create-plan-container"> Lặp lại</div>
							<div
								style={{ cursor: "pointer" }}
								onClick={showAllTime}
								className="time-detail-create-plan-container">
								{" "}
								<p>{timePicker}</p>
								{showTime && (
									<div>
										<div
											onClick={() => setShowTime(false)}
											className="time-detail-create-plan-cover"
										/>
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
							className="go-together-create-plan-box">
							{(selected.length > 5 && displayMorePartner
								? selected
								: selected.slice(0, 4)
							).map((user) => {
								return (
									<div
										key={user.id}
										className="partner-together-item">
										{user.username},
									</div>
								)
							})}
						</div>
						<HiPlusSmall
							color="gray"
							style={{ cursor: "pointer" }}
							onClick={showfilegotoplace}
							size={36}
						/>
					</div>
					{selected.length > 4 ? (
						<div
							className="show-more-partner"
							onClick={() => setDisplayMorePartner(!displayMorePartner)}
							style={{
								marginTop: "10px",
								cursor: "pointer",
								fontStyle: "italic",
								fontSize: "1rem	",
							}}>
							+ {selected.length > 4 ? selected.length - 4 : 0}
						</div>
					) : (
						<div className="show-more-partner"></div>
					)}
					<div className="location-create-plan-container">
						<div
							style={{
								display: "flex",
								justifyContent: "center",
							}}>
							<IoLocationSharp size={30} />
						</div>
						<input
							onChange={onChangeLocation}
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
					{/* partner  */}
					<div className="go-together-background">
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
											onKeyDown={handleKeyDown}
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
									{(filteringData.length === 0
										? selected.slice(0, 5)
										: filteringData
									).map((user, index) => {
										return (
											<div
												style={
													selectedIndex === index
														? {
																transform: "scale(1.1)",
														  }
														: {}
												}
												onClick={() => {
													toggleUserSelection(user.id)
												}}
												key={user.id}
												className={
													user.chosen
														? "go-to-palace-result-name-choice"
														: "go-to-palace-result-name"
												}>
												<div className="go-to-palace-result-name-img"></div>
												<div className="go-to-palace-result-name-info">
													{user.username}
												</div>
											</div>
										)
									})}
								</div>
								<div className="go-to-palace-btn-bottom">
									<div className="go-to-palace-btn-cancel">
										<button
											onClick={() => setOpenFileGoToPlace(false)}
											className="go-to-palace-form-btn-cancel">
											Hủy
										</button>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			)}
		</div>
	)
}

export default CreatePlan
