import React, { useContext, useEffect, useRef, useState } from "react"

// timpicker
import { DemoContainer } from "@mui/x-date-pickers/internals/demo"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { TimePicker } from "@mui/x-date-pickers/TimePicker"
import dayjs from "dayjs"
import moment from "moment"

// context
import { PlanContext } from "../../layouts/Calendar/CalendarLayout"
import CreateTag, { TagContext } from "./CreateTag"

// icon
import { IoLocationSharp } from "react-icons/io5"
import { BsFillPersonFill, BsClockFill } from "react-icons/bs"
import { BiSearch } from "react-icons/bi"
import { GrHistory } from "react-icons/gr"
import { FaCalendarAlt } from "react-icons/fa"
import { HiPlusSmall } from "react-icons/hi2"
import { DotSpinner } from "@uiball/loaders"
import BasicCalendar from "./BasicCalendar"

// data
import instance from "../../data/instance"

// css
import "./CreatePlan.css"

const CreatePlan = ({ remove }) => {
	const { finalData, setFinalData, dayChosen } = useContext(PlanContext)
	const tagChoice = useContext(TagContext)
	const [displayDayPicker, setDisplayDayPicker] = useState(false)
	const [dayPicker, setDayPicker] = useState(dayChosen)
	const [content, setContent] = useState()
	const [displayMorePartner, setDisplayMorePartner] = useState(false)
	const [openGoToPlace, setOpenFileGoToPlace] = useState(false)
	const [dataNotice, setDataNotice] = useState()
	const [selectedUsers, setSelectedUsers] = useState([])
	const [location, setLocation] = useState()
	const [isUserData, setIsUserData] = useState(false)
	const [selectedIndex, setSelectedIndex] = useState(0)
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

	// get day - month - year
	const day = dayPicker.getDate()
	const month = dayPicker.getMonth()
	const year = dayPicker.getFullYear()

	// format currentDay
	const date = moment(dayPicker).format("YYYY-MM-DD")

	// format T2-T3-T4-T5-T6-T7-CN to 1-2-3-4-5-6-7
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

	// remove createPlan form

	const handleCancel = () => {
		remove()
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
				intervalTime: interValTime, // time format HH:MM - HH:MM
				partner: selectedUsers, // array of partner
				location: location,
				note: dataNotice,
				planWeekDate: dayOfWeek, // day of week in format 1,2,3,4,5,6,7
				planTime: Number(interValTime.slice(0, 2)), // time format HH
				timePicker: interValTime.slice(0, 5), // time format HH:MM
				day: day, // day in format DD with dayPicker
				month: month, // month of dayPicker
				year: year, // year of dayPicker
				completed: false,
				startTime: startTime,
				endTime: endTime,
			},
		]
		setFinalData(dataArray)
		remove()
	}

	// outside click
	const refOne = useRef(null)
	const handleClickOutSide = (e) => {
		if (refOne.current && !refOne.current.contains(e.target)) {
			remove()
		}
	}
	useEffect(() => {
		document.addEventListener("click", handleClickOutSide, true)
	})

	return (
		<div className="create-plan-container">
			{loading ? (
				<div className="loading">
					<DotSpinner
						size={100}
						speed={0.8}
						color="#ccc"
					/>
				</div>
			) : (
				<div
					ref={refOne}
					className="create-plan-box">
					<div className="create-plan-btn">Tạo kế hoạch</div>
					<input
						onChange={(e) => setContent(e.target.value)}
						className="name-create-plan-input"
						type="text"
						placeholder="Kế hoạch của bạn"
					/>
					<div className="type-create-plan-container">
						<CreateTag />
						<div className="date-detail-create-plan-box">
							<div className="date-picker-box">
								<div>
									<FaCalendarAlt size={30} />
								</div>
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
							</div>
							<div className="calendar-date-picker__container">
								<BsClockFill size={30} />
								<LocalizationProvider dateAdapter={AdapterDayjs}>
									<DemoContainer components={["TimePicker", "TimePicker"]}>
										<TimePicker
											sx={{
												backgroundColor: "#f0f0f0",
											}}
											label="Giờ bắt đầu"
											onChange={(startTime) => setStartTime(startTime)}
										/>
										<TimePicker
											sx={{ backgroundColor: "#f0f0f0" }}
											label="Giờ kết thúc"
											onChange={(endTime) => setEndTime(endTime)}
										/>
									</DemoContainer>
								</LocalizationProvider>
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
							onClick={showfilegotoplace}
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
											// onKeyDown={handleKeyDown}
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
