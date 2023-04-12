import React from "react"
import { IoCaretBackOutline } from "react-icons/io5"
import { TbPlayerTrackNextFilled } from "react-icons/tb"
const YearlyCalendar2 = () => {
	const currentDate = new Date()
	const currentYear = currentDate.getFullYear()
	const currentMonth = currentDate.getMonth()

	// generate day of week
	const dayInWeek = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"]

	// get the last date of the previous month
	const lastDayOfMonth = new Date(currentYear, currentMonth, 0).getDate()

	// get the first day of next month
	const firstDateOfMonth = new Date(currentYear, currentMonth, 1)
	const currentDay = currentDate.getDay()
	const firstDayOfMonthString =
		dayInWeek[currentDay] +
		"," +
		firstDateOfMonth.toLocaleDateString("en-us", {
			year: "numeric",
			month: "numeric",
			day: "numeric",
		}) // parse to string
	const paddingDay = dayInWeek.indexOf(firstDayOfMonthString.split(",")[0]) // get padding by index of dayInWeek
	const loopDayOfCurrentMonth = paddingDay + lastDayOfMonth
	const arrayLoopDay = Array.from({ length: loopDayOfCurrentMonth }, (v, i) => {
		return {
			id: i + 1,
		}
	})

	const arrayDate31 = Array.from({ length: 31 }, (v, i) => {
		return {
			id: i + 1,
		}
	})
	const arrayDate30 = Array.from({ length: 30 }, (v, i) => {
		return {
			id: i + 1,
		}
	})
	const arrayDate29 = Array.from({ length: 29 }, (v, i) => {
		return {
			id: i + 1,
		}
	})
	const arrayDate28 = Array.from({ length: 28 }, (v, i) => {
		return {
			id: i + 1,
		}
	})

	const months = [
		{ id: 1, name: "January", date: arrayDate31, paddingDay: 0 },
		{
			id: 2,
			name: "February",
			date: currentYear % 4 === 0 ? arrayDate29 : arrayDate28,
		},
		{
			id: 3,
			name: "March",
			date: arrayDate31,
		},
		{
			id: 4,
			name: "April",
			date: arrayDate30,
		},
		{
			id: 5,
			name: "May",
			date: arrayDate31,
		},
		{
			id: 6,
			name: "June",
			date: arrayDate30,
		},
		{
			id: 7,
			name: "July",
			date: arrayDate31,
		},
		{
			id: 8,
			name: "August",
			date: arrayDate30,
		},
		{
			id: 9,
			name: "September",
			date: arrayDate31,
		},
		{
			id: 10,
			name: "October",
			date: arrayDate30,
		},
		{
			id: 11,
			name: "November",
			date: arrayDate31,
		},
		{
			id: 12,
			name: "December",
			date: arrayDate30,
		},
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
								{arrayLoopDay.map((date) => {
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
											hi
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

export default YearlyCalendar2
