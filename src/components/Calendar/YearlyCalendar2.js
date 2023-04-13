import React, { useEffect, useState } from "react"
import { IoCaretBackOutline } from "react-icons/io5"
import { TbPlayerTrackNextFilled } from "react-icons/tb"
const YearlyCalendar2 = () => {
	const currentDate = new Date()
	let currentYear = currentDate.getFullYear()
	let currentMonth = currentDate.getMonth()

	// generate day of week
	const dayInWeek = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"]

	// get the last date of the previous month
	const lastDateOfMonth = new Date(currentYear, currentMonth, 0).getDate()

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
		{ id: 1, name: "January", date: arrayDate31 },
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

	// function calculate padding Date
	const calcPaddingDay = (monthOfDate) => {
		// get the first day of next month
		const firstDateOfMonth = new Date(currentYear, monthOfDate, 1)
		const firstDayOfMonth = new Date(currentYear, monthOfDate, 1).getDay()

		// parse to string
		const firstDayOfMonthString =
			dayInWeek[firstDayOfMonth] +
			"," +
			firstDateOfMonth.toLocaleDateString("en-us", {
				year: "numeric",
				month: "numeric",
				day: "numeric",
			})

		// get padding by index of dayInWeek
		const paddingDay = dayInWeek.indexOf(firstDayOfMonthString.split(",")[0])

		return paddingDay
	}

	// function find padding day of each month and push it into array
	const findPaddingDate = () => {
		const arrayOfPaddingDate = []
		for (let i = 0; i < months.length; i++) {
			const currentMonthId = months[i].id
			if (currentMonthId < currentMonth) {
				const prevCurrentMonth = currentMonth - currentMonthId
				arrayOfPaddingDate.push(calcPaddingDay(prevCurrentMonth))
			} else if (currentMonthId > currentMonth) {
				const nextCurrentMonth = currentMonth + currentMonthId
				arrayOfPaddingDate.push(calcPaddingDay(nextCurrentMonth))
			} else {
				arrayOfPaddingDate.push(calcPaddingDay(currentMonth))
			}
		}
		return arrayOfPaddingDate
	}
	const paddingDates = findPaddingDate()

	// this function generate an array dates of each month
	const arrayDateOfMonth = paddingDates.map((paddingDay) => {
		const dateInMonth = paddingDay + lastDateOfMonth
		return Array.from({ length: dateInMonth }, (v, i) => {
			return {
				id: i + 1,
				name: i + 1,
				paddingDate: paddingDay,
			}
		})
	})

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
				<p>{currentYear}</p>
				<button>
					<IoCaretBackOutline style={{ transform: "rotate(180deg)" }} />
				</button>
				<button>
					<TbPlayerTrackNextFilled />
				</button>
			</div>
			{/* Body */}
			<div className="body-calendar__yearly__container">
				{months.map((calendar, index) => {
					return (
						<div
							key={calendar.id}
							className="each-calendar__yearly__container">
							<div className="month-calendar__yearly">{calendar.name}</div>
							<div className="week-of-day__yearly__container">
								{dayInWeek.map((day) => {
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
								{arrayDateOfMonth[index].map((element) => (
									<p key={element.id}>{element.name}</p>
								))}
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default YearlyCalendar2
