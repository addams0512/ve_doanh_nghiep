import React from "react"
import { IoCaretBackOutline } from "react-icons/io5"
import { TbPlayerTrackNextFilled } from "react-icons/tb"
import "./YearlyCalendar.css"
import Calendar from "react-calendar"
const YearlyCalendar = () => {
	const date = new Date()
	const year = date.getFullYear()
	const month = date.getMonth() + 6
	// generate day of week
	const dayInWeek = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"]

	// get the last date of the previous month
	const lastDayOfMonth = new Date(year, month, 0).getDate()

	// get padding day of the week by using the firstDay of the next month
	const firstDayOfMonth = new Date(year, month, 1)
	const day = new Date(year, month, 0).getDay() + 1
	const firstDateOfMonthString =
		dayInWeek[day] +
		"," +
		firstDayOfMonth.toLocaleDateString("en-us", {
			year: "numeric",
			month: "numeric",
			day: "numeric",
		})

	const paddingDay = dayInWeek.indexOf(firstDateOfMonthString.split(",")[0])

	const loopDay = paddingDay + lastDayOfMonth

	const arrayOfDate = Array.from({ length: loopDay }, (v, i) => {
		return {
			id: i + 1,
		}
	})

	// generate months
	const months = [
		{ id: 1, name: "January" },
		{ id: 2, name: "February" },
		{ id: 3, name: "March" },
		{ id: 4, name: "April" },
		{ id: 5, name: "May" },
		{ id: 6, name: "June" },
		{ id: 7, name: "July" },
		{ id: 8, name: "August" },
		{ id: 9, name: "September" },
		{ id: 10, name: "October" },
		{ id: 11, name: "November" },
		{ id: 12, name: "December" },
	]

	return (
		<div className="calendar-yearly__container">
			{/* Hedaer */}
			<div className="header-calendar-yearly__container">
				<button>
					<TbPlayerTrackNextFilled style={{ transform: "rotate(180deg)" }} />
				</button>
				<button>
					<IoCaretBackOutline />
				</button>
				<p></p>
				<button>
					<IoCaretBackOutline style={{ transform: "rotate(180deg)" }} />
				</button>
				<button>
					<TbPlayerTrackNextFilled />
				</button>
			</div>
			{/* Body */}
			<div className="body-calendar__yearly__container">
				{months.map((calendar) => {
					return (
						<div
							key={calendar.id}
							className="each-calendar__yearly__container">
							<div className="month-calendar__yearly">{calendar.name}</div>
							<div className="week-of-day__yearly__container">
								{dayInWeek.map((day, index) => {
									return (
										<div
											className="day__yearly"
											key={index}>
											{day}
										</div>
									)
								})}
							</div>
							<div className="date-calendar__yearly__container">
								{arrayOfDate.map((date) => {
									if (date.id > paddingDay) {
										return (
											<button
												key={date.id}
												className="date__yearly">
												{date.id - paddingDay}
											</button>
										)
									}
									return (
										<button
											key={date.id}
											className="padding-date__yearly">
											none
										</button>
									)
								})}
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default YearlyCalendar
