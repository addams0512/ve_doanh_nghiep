import React, { useContext, useEffect, useRef, useState } from "react"
import "./CreatePlan.css"
import { IoLocationSharp } from "react-icons/io5"
import { BsFillPersonFill } from "react-icons/bs"
import { FaRegClock, FaTags } from "react-icons/fa"
import { BiSearch } from "react-icons/bi"
import { GrHistory } from "react-icons/gr"
import BasicCalendar from "./BasicCalendar"
import moment from "moment"
import { PlanContext } from "../../layouts/Calendar/CalendarLayout"
import instance from "../../data/instance"
import { RiDeleteBack2Line, RiChatDeleteLine } from "react-icons/ri"
import { ChromePicker } from "react-color"
import { HiPlusSmall } from "react-icons/hi2"
import "./ShowPlan.css"

const ShowPlan = ({ remove }) => {
	const {
		finalData,
		setFinalData,
		tagPlan,
		setTagPlan,
		idEditPlan,
		idDeletePlan,
	} = useContext(PlanContext)

	// plan edited
	const planEdit = finalData.find((plan) => plan.id === idEditPlan)
	const formatDatePlanEdit = new Date(planEdit.date)
	const [tagChoice, setTagChoice] = useState()
	const [displayDayPicker, setDisplayDayPicker] = useState(false)
	const [dayPicker, setDayPicker] = useState(formatDatePlanEdit)

	const [showTime, setShowTime] = useState(false)
	const [content, setContent] = useState()
	const [displayMorePartner, setDisplayMorePartner] = useState(false)
	const [timePicker, setTimePicker] = useState(planEdit.intervalTime)
	const [openGoToPlace, setOpenFileGoToPlace] = useState(false)
	const [dataNotice, setDataNotice] = useState()
	const [selectedUsers, setSelectedUsers] = useState(planEdit.partner)
	const [color, setColor] = useState("black")
	const [showcolordisplay, setShowColorDisplay] = useState(false)
	const [newPlan, setNewPlan] = useState("")
	const [location, setLocation] = useState()
	const [isTagChoice, setIsTagChoice] = useState(true)
	const [isDayChoice, setIsDayChoice] = useState(true)
	const [isTimeChoice, setIsTimeChoice] = useState(true)
	const [isLocation, setIsLocation] = useState(true)
	const [isNoticeData, setIsNoticeData] = useState(true)
	const [isContent, setIsContent] = useState(true)
	const [isEditTag, setIsEditTag] = useState(true)
	const [selectedIndex, setSelectedIndex] = useState(0)
	const [confirmDeletePlan, setIsConfirmDeletePlan] = useState(false)
	const [confirmDeleteTag, setConfirmDeleteTag] = useState(false)
	const [idDelete, setIdDelete] = useState("")
	const tagDelete = tagPlan[idDelete]

	// get day - month - year
	const day = dayPicker.getDate()
	const month = dayPicker.getMonth()
	const year = dayPicker.getFullYear()

	// day of week of planEdit
	const weekDay = [
		"Chủ nhật",
		"Thứ 2",
		"Thứ 3",
		"Thứ 4",
		"Thứ 5",
		"Thứ 6",
		"Thứ 7",
	]
	const pickWeekday = weekDay[planEdit.planWeekDate - 1]

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
	}

	const deleteTag = (id) => {
		const tagOnDelete = tagPlan.filter((tag) => tag.id !== id)
		setTagPlan(tagOnDelete)
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
		setIsEditTag(false)
	}

	// get User API
	const [userData, setUserData] = useState("")
	const [loading, setLoading] = useState(true)
	const [filteringData, setFilteringData] = useState([])
	useEffect(() => {
		const getUserData = async () => {
			try {
				const res = await instance.get("/users")
				setUserData(res.data)
			} catch (error) {
				console.log(error)
			} finally {
				setLoading(false)
			}
		}
		getUserData()
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
	const selected = selectedUsers.filter((s) => {
		return s.chosen
	})
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

	// get Notices data
	const handleNoticeData = (e) => {
		setIsNoticeData(false)
		setDataNotice(e.target.value)
	}

	// get Location data
	const onChangeLocation = (e) => {
		setIsLocation(false)
		setLocation(e.target.value)
	}

	// create plan
	const editPlan = (item) => {
		const updateData = [...finalData]
		updateData[planEdit.id] = {
			id: planEdit.id,
			content: content || planEdit.content,
			tagChoice: tagChoice || planEdit.tagChoice, // tag chosen
			date: date || planEdit.date, // full date format YYYY-MM-DD
			intervalTime: timePicker || planEdit.intervalTime, // time format HH:MM - HH:MM
			partner: selectedUsers || planEdit.partner, // array of partner
			location: location || planEdit.location,
			note: dataNotice || planEdit.note,
			planWeekDate: dayOfWeek || planEdit.planWeekDate, // day of week in format 1,2,3,4,5,6,7
			planTime: Number(timePicker.slice(0, 2)) || planEdit.planTime, // time format HH
			timePicker: timePicker.slice(0, 5) || planEdit.timePicker, // time format HH:MM
			day: day || planEdit.day, // day in format DD with dayPicker
			month: month || planEdit.month, // month of dayPicker
			year: year || planEdit.year, // year of dayPicker
			expirePlan: false,
			completed: false,
		}
		setFinalData(updateData)
		remove()
	}
	// delete plan
	const deleteCurrentPlan = () => {
		// const deletePlan = finalData.filter((plan) => plan.id !== idDeletePlan)
		// setFinalData(deletePlan)
		setFinalData(
			finalData.filter((plan) => {
				return plan.id !== idDeletePlan
			})
		)
	}

	// out side click
	const refOne = useRef(null)
	const handleClickOutSide = (e) => {
		if (refOne.current && !refOne.current.contains(e.target)) {
			remove()
		}
	}

	useEffect(() => {
		document.addEventListener("click", handleClickOutSide, true)
	}, [])
	return (
		<div className="create-plan-container">
			<div
				ref={refOne}
				className="create-plan-box">
				<div className="create-plan-btn">Tạo kế hoạch</div>
				<input
					onChange={(e) => {
						setContent(e.target.value)
						setIsContent(false)
					}}
					className="name-create-plan-input"
					type="text"
					value={isContent ? planEdit.content : content}
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
											isEditTag
												? {
														backgroundColor: planEdit.tagChoice.color,
														cursor: "pointer",
												  }
												: {
														cursor: "pointer",
														backgroundColor: tagChoice.color,
												  }
										}
										className="tag-type-create-plan"></div>
									<div className="content-type-create-plan">
										{" "}
										{isEditTag ? planEdit.tagChoice.type : tagChoice.type}
									</div>
									<RiChatDeleteLine
										onClick={() => {
											setTagChoice([])
											setIsTagChoice(false)
											setIsEditTag(true)
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
										<div className="tag-type-create-plan__box">
											<div
												style={{
													cursor: "pointer",
													backgroundColor: item.color,
												}}
												onClick={() => tagChosen(item.id)}
												className="tag-type-create-plan"></div>
											<div className="content-type-create-plan">
												{" "}
												{item.type}
											</div>
										</div>
										<RiDeleteBack2Line
											style={{ cursor: "pointer" }}
											onClick={() => {
												setIdDelete(item.id)
												setConfirmDeleteTag(true)
											}}
											color="red"
										/>
										{confirmDeleteTag && (
											<div className="accept-delete-tag-container">
												<div className="accept-delete-tag-box">
													<b className="title-delete-tag__pop-up">
														Bạn có chắc chắn muốn hủy tag này?
													</b>
													<div className="tag-delete__pop-up">
														<div
															style={{
																backgroundColor: tagDelete.color,
															}}
															className="tag-type-create-plan"></div>
														<div className="content-type-create-plan">
															{" "}
															{tagDelete.type}
														</div>
													</div>
													<div className="btn-delete-tag__pop-up">
														<button
															onClick={() => {
																setConfirmDeleteTag(false)
															}}>
															Hủy
														</button>
														<button
															onClick={() => {
																deleteTag(item.id)
																setConfirmDeleteTag(false)
															}}>
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
						{isDayChoice ? (
							<div
								style={{ cursor: "pointer" }}
								onClick={showDayPicker}
								className="date-detail-create-plan-container">
								{pickWeekday}, {planEdit.day} tháng {planEdit.month + 1} ,{" "}
								{planEdit.year}
							</div>
						) : (
							<div
								style={{ cursor: "pointer" }}
								onClick={showDayPicker}
								className="date-detail-create-plan-container">
								{getDayName()}, {day} tháng {month + 1} , {year}
							</div>
						)}
						{displayDayPicker && (
							<div className="calendar-picker-container">
								<div
									onClick={() => setDisplayDayPicker(false)}
									className="calendar-picker-cover"
								/>
								<div className="calendar-for-pickerDate">
									<BasicCalendar
										onChange={(e) => {
											setIsDayChoice(false)
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
							<p>{isTimeChoice ? planEdit.intervalTime : timePicker}</p>
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
													onClick={() => {
														setTimePicker(time.time)
														setIsTimeChoice(false)
													}}
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
						value={isLocation ? planEdit.location : location}
						onChange={onChangeLocation}
						placeholder="Địa điểm"
						className="location-create-plan-box"></input>
				</div>
				<div className="notice-create-plan-container">
					<textarea
						onChange={handleNoticeData}
						value={isNoticeData ? planEdit.note : dataNotice}
						placeholder="Chú thích"></textarea>
				</div>
				<div className="button-delete-create-plan-container">
					<button onClick={handleCancel}>Hủy</button>
					<button onClick={editPlan}>Lưu</button>
					<button onClick={() => setIsConfirmDeletePlan(true)}>Xóa</button>
					{confirmDeletePlan && (
						<div className="accept-delete-plan-container">
							<div className="accept-delete-plan-box">
								<div className="title-delete-plan__pop-up">
									Bạn có chắc muốn hủy kế hoạch này?
								</div>
								<div className="btn-delete-plan__pop-up">
									<button
										onClick={() => {
											setIsConfirmDeletePlan(false)
										}}>
										Hủy
									</button>
									<button
										onClick={() => {
											deleteCurrentPlan()
											setIsConfirmDeletePlan(false)
											remove()
										}}>
										{" "}
										Xác nhận
									</button>
								</div>
							</div>
						</div>
					)}
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
		</div>
	)
}

export default ShowPlan
