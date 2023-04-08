import React, { createContext, useContext, useEffect, useState } from "react"
import "./CreatePlan.css"
import { IoLocationSharp } from "react-icons/io5"
import { BsCurrencyEuro, BsFillPersonFill } from "react-icons/bs"
import { FaRegClock, FaTags } from "react-icons/fa"
import { AiOutlinePlus } from "react-icons/ai"
import { BiSearch } from "react-icons/bi"
import { GrHistory } from "react-icons/gr"
import BasicCalendar from "./BasicCalendar"
import Kindofplan from "../../layouts/Calendar/Kindofplan"
import moment from "moment"
import { PlanContext } from "../../layouts/Calendar/CalendarLayout"

const CreatePlan = ({ remove }) => {
	const [displayDayPicker, setDisplayDayPicker] = useState(false)
	const [dayPicker, setDayPicker] = useState(new Date())
	const { tagPlan, setTagPlan } = useContext(PlanContext)
	const [displayAllPlan, setDisplayAllPlan] = useState(true)
	const [showTime, setShowTime] = useState(false)
	const [location, setLocation] = useState({ lat: 0, lng: 0 })
	const [showMap, setShowMap] = useState(false)

	const showAllTime = () => {
		setShowTime(!showTime)
	}
	const seeAllPlan = () => {
		setDisplayAllPlan(!displayAllPlan)
	}
	const [timePicker, setTimePicker] = useState("00:00 - 01:00")
	const nowDay = moment(dayPicker).format("YYYY/MM/DD")
	const showDayPicker = () => {
		setDisplayDayPicker(!displayDayPicker)
	}
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

	const getDayName = (date = dayPicker, locale = "vi-VN") => {
		return date.toLocaleDateString(locale, { weekday: "long" })
	}

	const day = dayPicker.getDate()
	const month = dayPicker.getMonth()
	const handleCancel = () => {
		remove()
	}
	const [openfilekindofplan, setOpenFileKindOfPlan] = useState(true)
	const [openfilegotoplace, setOpenFileGoToPlace] = useState(false)
	const [opencreatename, setOpenCreateName] = useState(false)
	function transferdata() {
		setOpenFileGoToPlace(true)
		setOpenCreateName(false)
	}
	function showfilegotoplace() {
		setOpenFileGoToPlace(!openfilegotoplace)
	}

	function showkindofplan() {
		setOpenFileKindOfPlan(false)
	}
	const showCreatePlan = () => {
		setOpenFileKindOfPlan(true)
	}

	const [typeOfPlan, setTypeOfPlan] = useState(false)
	const displayTagPlan = () => {
		setTypeOfPlan(true)
		setOpenFileKindOfPlan(true)
	}

	const tagPlanRender = tagPlan.filter((item) => {
		if (typeOfPlan) {
			return item.choose
		}
		return item
	})

	useEffect(() => {
		// Load the Google Maps API script
		const script = document.createElement("script")
		script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`
		script.onload = () => {
			// Initialize the Places API and create an Autocomplete object
			const autocomplete = new window.google.maps.places.Autocomplete(
				document.getElementById("autocomplete")
			)

			// Listen for the 'place_changed' event and update the location state
			autocomplete.addListener("place_changed", () => {
				const place = autocomplete.getPlace()
				setLocation({
					lat: place.geometry.location.lat(),
					lng: place.geometry.location.lng(),
				})
			})
		}
		document.head.appendChild(script)
	}, [])

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
			{openfilekindofplan ? (
				<div className="create-plan-box">
					<div className="create-plan-btn">Tạo kế hoạch</div>
					<input
						className="name-create-plan-input"
						type="text"
						placeholder="Đi ăn cùng vợ"
					/>
					<div className="type-create-plan-container">
						<div className="title-type-create-plan-container">
							<FaTags size={30} />
							<div className="title-type-create-plan">Loại kế hoạch</div>
						</div>
						<div className="tag-type-create-plan-container">
							<div
								style={displayAllPlan ? { height: "30px" } : { height: "70px" }}
								className="tag-type-create-plan-box-4">
								{displayAllPlan
									? tagPlanRender?.slice(0, 4).map((item) => {
											return (
												<div key={item.id}>
													<div className="tag-type-create-plan__box">
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
									  })
									: tagPlanRender?.map((item) => {
											return (
												<div key={item.id}>
													<div className="tag-type-create-plan__box">
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
								}}>
								See all
							</div>
							<div
								onClick={showkindofplan}
								style={{
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
								display: "flex",
								justifyContent: "center",
							}}>
							<FaRegClock size={30} />
						</div>
						<div className="date-detail-create-plan-box">
							<div
								onClick={showDayPicker}
								className="date-detail-create-plan-container">
								{getDayName()}, {day} tháng {month}{" "}
							</div>
							<div className="toggle-date-create-plan-container">
								<div>
									<label className="switch">
										<input type="checkbox" />
										<span className="slider round"></span>
									</label>
								</div>
								<div className="content-create-plan-container">Cả ngày</div>
							</div>
							<div
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

							<div className="repeat-create-plan-container"> Lặp lại</div>
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
							className="go-together-create-plan-box">
							Đi cùng (Share)
						</div>
					</div>
					<div className="location-create-plan-container">
						<div
							tyle={{
								display: "flex",
								justifyContent: "center",
							}}>
							<IoLocationSharp size={30} />
						</div>
						<div
							onClick={() => setShowMap(!showMap)}
							className="location-create-plan-box">
							{showMap && (
								<div>
									<input
										id="autocomplete"
										type="text"
										placeholder="Enter a location"
									/>
									{location && (
										<p>
											Selected location: {location.lat}, {location.lng}
										</p>
									)}
									<div
										id="map"
										style={{ height: "400px", width: "100%" }}></div>
								</div>
							)}
						</div>
					</div>
					<div className="notice-create-plan-container">
						<textarea
							rows=""
							cols=""
							placeholder="Chú thích"></textarea>
					</div>
					<div className="button-delete-create-plan-container">
						<button onClick={handleCancel}>Hủy</button>
						<button>Tạo</button>
					</div>
				</div>
			) : (
				<Kindofplan
					filteringPlan={displayTagPlan}
					close={showCreatePlan}
				/>
			)}
			{openfilegotoplace && (
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
					<div className="go-to-palace-result-name">
						<div className="go-to-palace-result-name-img"></div>
						<div className="go-to-palace-result-name-info"></div>
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
