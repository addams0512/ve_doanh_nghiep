import React, { useState } from "react"
import "./CalendarLayout.css"
import BasicCalendar from "../../components/Calendar/BasicCalendar"
import { AiOutlineSearch } from "react-icons/ai"
import DayLayout from "./DayLayout"
import MonthLayout from "./MonthLayout"
import WeekLayout from "./WeekLayout"
import YearLayout from "./YearLayout"
const CalendarLayout = () => {
	const [displayDay, setDisplayDay] = useState(true)
	const [displayWeek, setDisplayWeek] = useState(false)
	const [displayMonth, setDisplayMonth] = useState(false)
	const [displayYear, setDisplayYear] = useState(false)

	return (
		<div className="container-calendar">
			<div className="box1-calendar">
				<div className="date-calendar">
					<h1>16</h1>
					<p>Tháng 7, 2022</p>
				</div>
				<div className="add-plan-calendar">
					<button>Thêm kế hoạch</button>
				</div>
				<div className="display-calendar">
					<BasicCalendar />
				</div>
				<div className="type-plan-calendar">
					<div className="type-plan-calendar-container">
						<div className="title-type-plan-calendar">
							<p> Loại kế hoạch</p>
						</div>
						<div className="description-type-plan-calendar">
							<div className="description-type-plan-container">
								<div className="color-descrtiption-type-plan"></div>
								<div className="description-type-plan">Công việc</div>
							</div>
							<div className="description-type-plan-container">
								<div className="color-descrtiption-type-plan"></div>
								<div className="description-type-plan">Vợ</div>
							</div>
							<div className="description-type-plan-container">
								<div className="color-descrtiption-type-plan"></div>
								<div className="description-type-plan">Công việc</div>
							</div>
							<div className="description-type-plan-container">
								<div className="color-descrtiption-type-plan"></div>
								<div className="description-type-plan">Công việc</div>
							</div>
							<div className="description-type-plan-container">
								<div className="color-descrtiption-type-plan"></div>
								<div className="description-type-plan">Công việc</div>
							</div>
						</div>
					</div>
				</div>
				<div className="next-plan-calendar">
					<div className="next-plan-calendar-container">
						<div className="title-next-plan-calender">Kế hoạch sắp tới</div>
						<div className="detail-next-plan-calendar-container">
							<div className="detail-next-plan-calendar">
								<input
									type="checkbox"
									className="checkbox-next-plan-calendar"
								/>
								<div className="date-next-plan-calendar">
									{" "}
									16/07 : 9.00 - 9.30 : Họp cùng Sales
								</div>
							</div>
							<div className="detail-next-plan-calendar">
								<input
									type="checkbox"
									className="checkbox-next-plan-calendar"
								/>
								<div className="date-next-plan-calendar">
									{" "}
									16/07 : 9.00 - 9.30 : Họp cùng Sales
								</div>
							</div>
							<div className="detail-next-plan-calendar">
								<input
									type="checkbox"
									className="checkbox-next-plan-calendar"
								/>
								<div className="date-next-plan-calendar">
									{" "}
									16/07 : 9.00 - 9.30 : Họp cùng Sales
								</div>
							</div>
							<div className="detail-next-plan-calendar">
								<input
									type="checkbox"
									className="checkbox-next-plan-calendar"
								/>
								<div className="date-next-plan-calendar">
									{" "}
									16/07 : 9.00 - 9.30 : Họp cùng Sales
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="box2-calendar">
				<div className="container-box2-plan">
					<div className="time-type-calendar">
						<button
							style={
								displayDay
									? {
											backgroundColor: "black",
											color: "white",
									  }
									: {}
							}
							onClick={() => {
								setDisplayDay(true)
								setDisplayWeek(false)
								setDisplayMonth(false)
								setDisplayYear(false)
							}}>
							Ngày
						</button>
						<button
							style={
								displayWeek
									? {
											backgroundColor: "black",
											color: "white",
									  }
									: {}
							}
							onClick={() => {
								setDisplayDay(false)
								setDisplayWeek(true)
								setDisplayMonth(false)
								setDisplayYear(false)
							}}>
							Tuần
						</button>
						<button
							style={
								displayMonth
									? {
											backgroundColor: "black",
											color: "white",
									  }
									: {}
							}
							onClick={() => {
								setDisplayDay(false)
								setDisplayWeek(false)
								setDisplayMonth(true)
								setDisplayYear(false)
							}}>
							Tháng
						</button>
						<button
							style={
								displayYear
									? {
											backgroundColor: "black",
											color: "white",
									  }
									: {}
							}
							onClick={() => {
								setDisplayDay(false)
								setDisplayWeek(false)
								setDisplayMonth(false)
								setDisplayYear(true)
							}}>
							Năm
						</button>
					</div>
					<div className="btn-search-calendar">
						<AiOutlineSearch size={20} />
						<input
							type="text"
							placeholder="Tìm sự kiện"
						/>
					</div>
				</div>
				<div className="btn-date-calendar">
					<button>CN</button>
					<button>T2</button>
					<button>T3</button>
					<button>T4</button>
					<button>T5</button>
					<button>T6</button>
					<button>T7</button>
				</div>
				{displayDay && <DayLayout />}
				{displayWeek && <WeekLayout />}
				{displayMonth && <MonthLayout />}
				{displayYear && <YearLayout />}
			</div>
		</div>
	)
}

export default CalendarLayout
