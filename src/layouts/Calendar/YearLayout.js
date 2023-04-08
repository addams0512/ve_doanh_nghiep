import React, { useContext, useState } from "react"
import "./YearLayout.css"
import BasicCalendar from "../../components/Calendar/BasicCalendar"
import { PlanContext } from "./CalendarLayout"

const YearLayout = () => {
	const value = useContext(PlanContext)
	const date = new Date()
	const currentMonth = date.getMonth() // get the current month (0-11)
	const currentYear = date.getFullYear() // get the current year
	const currentDay = date.getDate() // get the current day of the month
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
		<div className="year-layout-container">
			<div className="calendar-year-layout-container">
				{months.map((month) => (
					<div
						className="calendar-year-detail-layout-container"
						key={month.id}>
						<BasicCalendar
							value={`${month.id}-${currentDay}-${currentYear}`}
							disabledDays={(day) =>
								day.getDate() !== currentDay || day.getMonth() !== currentMonth
							}
						/>
					</div>
				))}
			</div>
		</div>
	)
}

export default YearLayout
