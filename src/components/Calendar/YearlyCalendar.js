import React, { useState } from "react"
import { IoCaretBackOutline } from "react-icons/io5"
import { TbPlayerTrackNextFilled } from "react-icons/tb"
import "./YearlyCalendar.css"
import Calendar from "react-calendar"
const YearlyCalendar = () => {
	const date = new Date()
	const year = date.getFullYear()
	const month = date.getMonth()
	const [currentMonth, setCurrentMonth] = useState(month)

	const nextMonth = () => {
		setCurrentMonth(new Date().getMonth() - 4)
	}

	// generate day of week
	const dayInWeek = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	]
	// get the last date of prev month 30,31,29,28
	const lastDateOfMonth = new Date(year, currentMonth + 1, 0).getDate()

	// get the first day of month
	const firstDayOfMonth = new Date(year, currentMonth, 1)
	const paddingDateOfCurrentMonth = firstDayOfMonth.toLocaleDateString(
		"en-us",
		{
			weekday: "long",
			year: "numeric",
			month: "numeric",
			day: "numeric",
		}
	)

	const paddingDate = dayInWeek.indexOf(paddingDateOfCurrentMonth.split(",")[0])

	console.log(
		"🚀 ~ file: YearlyCalendar.js:49 ~ YearlyCalendar ~ paddingDate:",
		paddingDate
	)

	const numberDateOfMonth = paddingDate + lastDateOfMonth
	const arrayDateOfMonth = Array.from({ length: numberDateOfMonth }, (_, i) => {
		return {
			id: i + 1,
			date: i + 1,
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
				<button onClick={nextMonth}>
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
								{arrayDateOfMonth.map((date) => {
									if (date.id > paddingDate) {
										return <div>{date.date - paddingDate}</div>
									} else {
										return <div>hello</div>
									}
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
