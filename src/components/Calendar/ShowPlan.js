import React, { useContext, useEffect, useRef, useState } from "react"

// data
import instance from "../../data/instance"

// css
import "./CreatePlan.css"
import "./ShowPlan.css"

// context
import { PlanContext } from "../../layouts/Calendar/CalendarLayout"

// components
import BasicCalendar from "./BasicCalendar"

// timePicker packages
import { DemoContainer } from "@mui/x-date-pickers/internals/demo"
import { ChromePicker } from "react-color"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { TimePicker } from "@mui/x-date-pickers/TimePicker"
import dayjs from "dayjs"
import moment from "moment"

// icon
import { IoLocationSharp } from "react-icons/io5"
import { BsFillPersonFill, BsClockFill } from "react-icons/bs"
import { FaTags } from "react-icons/fa"
import { BiSearch } from "react-icons/bi"
import { GrHistory } from "react-icons/gr"
import { RiDeleteBack2Line, RiChatDeleteLine } from "react-icons/ri"
import { HiPlusSmall } from "react-icons/hi2"
import { FaCalendarAlt } from "react-icons/fa"

const ShowPlan = ({ remove }) => {
	// context
	const {
		finalData,
		setFinalData,
		tagPlan,
		setTagPlan,
		idEditPlan,
		idDeletePlan,
	} = useContext(PlanContext)

	// plan
	const planEdit = finalData.find((plan) => plan.id === idEditPlan)
	const formatDatePlanEdit = new Date(planEdit.date)
	const [confirmDeletePlan, setIsConfirmDeletePlan] = useState(false)
	const [idDelete, setIdDelete] = useState("")
	const [tagDelete, setTagDelete] = useState()
	const [newPlan, setNewPlan] = useState("")

	// tag
	const [tagChoice, setTagChoice] = useState()
	const [isTagChoice, setIsTagChoice] = useState(true)
	const [confirmDeleteTag, setConfirmDeleteTag] = useState(false)
	const [isEditTag, setIsEditTag] = useState(true)

	// state
	const [content, setContent] = useState()
	const [isContent, setIsContent] = useState(true)
	const [color, setColor] = useState("black")
	const [showColorDisplay, setShowColorDisplay] = useState(false)
	const [displayMorePartner, setDisplayMorePartner] = useState(false)
	const [openGoToPlace, setOpenFileGoToPlace] = useState(false)
	const [selectedUsers, setSelectedUsers] = useState(planEdit.partner)
	const [selectedIndex, setSelectedIndex] = useState(0)

	const [location, setLocation] = useState()
	const [isLocation, setIsLocation] = useState(true)
	const [isNoticeData, setIsNoticeData] = useState(true)
	const [dataNotice, setDataNotice] = useState()

	// time-day picker
	// time
	const [startTime, setStartTime] = useState(dayjs("2022-04-17T15:30"))
	const [endTime, setEndTime] = useState(dayjs("2022-04-17T15:30"))
	const formatTime = (time) => {
		if (1 <= time <= 9) {
			return (time = time.toString().padStart(2, "0"))
		}
		return time
	}
	const startHour = formatTime(startTime.$H)
	const startMinute = formatTime(startTime.$m)
	const endHour = formatTime(endTime.$H)
	const endMinute = formatTime(endTime.$m)
	const interValTime = `${startHour}:${startMinute} - ${endHour}:${endMinute}`
	const [timePicker, setTimePicker] = useState(interValTime)
	// day
	const [displayDayPicker, setDisplayDayPicker] = useState(false)
	const [dayPicker, setDayPicker] = useState(formatDatePlanEdit)
	const [isDayChoice, setIsDayChoice] = useState(true)

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
	const pickWeekday = weekDay[planEdit.planWeekDate]

	// format currentDay
	const date = moment(dayPicker).format("YYYY-MM-DD")

	// format CN-T2-T3-T4-T5-T6-T7 to 1-2-3-4-5-6-7
	const dayOfWeek = dayPicker.getDay() % 7 || 7

	// format day to Chủ nhật, Thứ 2, Thứ 3,...
	const getDayName = (date = dayPicker, locale = "vi-VN") => {
		return date.toLocaleDateString(locale, { weekday: "long" })
	}

	// fucntion display
	// Calendar for dayPicker
	const showDayPicker = () => {
		setDisplayDayPicker(!displayDayPicker)
	}

	// Partner form
	function showfilegotoplace() {
		setOpenFileGoToPlace(!openGoToPlace)
	}
	const deleteTag = (id) => {
		const tagOnDelete = tagPlan.filter((tag) => tag.id !== idDelete)
		setTagPlan(tagOnDelete)
	}

	// remove createPlan form
	const handleCancel = () => {
		remove()
	}

	// colorPicker
	function showcolor() {
		setShowColorDisplay(!showColorDisplay)
	}
	const closeColorPicker = () => {
		setShowColorDisplay(false)
	}

	// handle add tag plan
	const handleAddTag = (e) => {
		if (e.key === "Enter") {
			const lastTagId = tagPlan.length > 0 ? tagPlan.at(0).id + 1 : 0
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

	// confirmation delete Tag
	const handleDeleteTag = (id) => {
		const tagDelete = tagPlan.filter((item) => item.id === id)
		setTagDelete(tagDelete)
		setIdDelete(id)
		setConfirmDeleteTag(true)
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
			completed: false,
			startTime: startTime,
			endTime: endTime,
		}
		setFinalData(updateData)
		remove()
	}

	// delete plan
	const deleteCurrentPlan = () => {
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
										{showColorDisplay && (
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
				</div>
				<div className="tag-type-create-plan-container">
					<div className="tag-type-create-plan-box-4">
						{tagPlan
							.sort((a, b) => b.id - a.id)
							.map((item) => {
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
											onClick={() => {
												handleDeleteTag(item.id)
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
																backgroundColor: tagDelete[0].color,
															}}
															className="tag-type-create-plan"></div>
														<div className="content-type-create-plan">
															{" "}
															{tagDelete[0].type}
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
				<div className="time-show-plan-container">
					<div className="time-show-plan-box">
						<div>
							<FaCalendarAlt size={30} />
						</div>
						<div className="date-detail-show-plan-box">
							{isDayChoice ? (
								<div
									style={{ cursor: "pointer" }}
									onClick={showDayPicker}
									className="date-detail-create-plan-container">
									{pickWeekday}, {planEdit.day} tháng {planEdit.month + 1},{" "}
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
						</div>
					</div>
					<div className="calendar-date-picker__container">
						<BsClockFill size={30} />
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<DemoContainer components={["TimePicker", "TimePicker"]}>
								<TimePicker
									value={dayjs(planEdit.startTime)}
									sx={{
										backgroundColor: "#f0f0f0",
									}}
									label="Giờ bắt đầu"
									onChange={(value) => setStartTime(value)}
								/>
								<TimePicker
									value={dayjs(planEdit.endTime)}
									sx={{ backgroundColor: "#f0f0f0" }}
									label="Giờ kết thúc"
									onChange={(value) => setEndTime(value)}
								/>
							</DemoContainer>
						</LocalizationProvider>
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
