import React, { useContext, useState } from "react"
import "./YearLayout.css"
import BasicCalendar from "../../components/Calendar/BasicCalendar"
import { PlanContext } from "./CalendarLayout"

const YearLayout = () => {
	const value = useContext(PlanContext)
	const date = new Date()
	const year = date.getFullYear()
	const day = date.getDay()
	console.log(year)
	console.log(day)

	const displayPlan = () => {
		value.setDisplayPlanCreate(!value.displayPlanCreate)
	}

	const months = [
		{ id: 1, name: 0 },
		{ id: 2, name: 1 },
		{ id: 3, name: 2 },
		{ id: 4, name: 3 },
		{ id: 5, name: 4 },
		{ id: 6, name: 5 },
		{ id: 7, name: 6 },
		{ id: 8, name: 7 },
		{ id: 9, name: 8 },
		{ id: 10, name: 9 },
		{ id: 11, name: 10 },
		{ id: 12, name: 11 },
	]

	return (
		<div className="year-layout-container">
			<div className="btn-year-layout-container">
				<button
					onClick={displayPlan}
					className="btn-year-layout">
					Thêm kế hoạch
				</button>
			</div>
			<div className="calendar-year-layout-container">
				{months.map((month) => (
					<div
						className="calendar-year-detail-layout-container"
						key={month.id}>
						<BasicCalendar value={`${month.id}-${day}-${year}`} />
					</div>
				))}
			</div>
		</div>
	)
}

export default YearLayout
