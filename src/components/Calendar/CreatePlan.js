import React, { useContext, useEffect, useState } from "react"
import "./CreatePlan.css"
import { IoLocationSharp } from "react-icons/io5"
import { BsCurrencyEuro, BsFillPersonFill } from "react-icons/bs"
import { FaRegClock, FaTags } from "react-icons/fa"
import { AiOutlinePlus } from "react-icons/ai"
import moment from "moment"
import BasicCalendar from "./BasicCalendar"
import Kindofplan from "../../layouts/Calendar/Kindofplan"
const CreatePlan = ({ remove }) => {
	const [displayDayPicker, setDisplayDayPicker] = useState(false)
	const [dayPicker, setDayPicker] = useState(new Date())
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
	function showkindofplan() {
		setOpenFileKindOfPlan(false)
	}
	const showCreatePlan = () => {
		setOpenFileKindOfPlan(true)
	}

	const [latitude, setLatitude] = useState(null)
	const [longitude, setLongitude] = useState(null)

	const [city, setCity] = useState(null)

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				const { latitude, longitude } = position.coords
				const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
				fetch(url)
					.then((response) => response.json())
					.then((data) => setCity(data.address.city))
			},
			(error) => {
				console.error(error)
			}
		)
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
								<div className="tag-type-create-plan__box">
									<div className="tag-type-create-plan"></div>
									<div className="content-type-create-plan"> Công việc</div>
								</div>
								<div className="tag-type-create-plan__box">
									<div className="tag-type-create-plan"></div>
									<div className="content-type-create-plan"> Vợ</div>
								</div>
								<div className="tag-type-create-plan__box">
									<div className="tag-type-create-plan"></div>
									<div className="content-type-create-plan"> Sinh nhật</div>
								</div>
								<div className="tag-type-create-plan__box">
									<div className="tag-type-create-plan"></div>
									<div className="content-type-create-plan"> Sinh nhật</div>
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
								<div className="time-detail-create-plan-container">
									{" "}
									<p>{timePicker}</p>
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
							<div className="go-together-create-plan-box">Đi cùng (Share)</div>
						</div>
						<div className="location-create-plan-container">
							<div
								tyle={{
									display: "flex",
									justifyContent: "center",
								}}>
								<IoLocationSharp size={30} />
							</div>
							<div className="location-create-plan-box">{city}</div>
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
				</div>
			) : (
				<Kindofplan />
			)}
		</div>
	)
}

export default CreatePlan
