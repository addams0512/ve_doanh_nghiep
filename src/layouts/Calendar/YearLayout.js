import React, { useContext, useState } from "react"
import "./YearLayout.css"
import BasicCalendar from "../../components/Calendar/BasicCalendar"
import { PlanContext } from "./CalendarLayout"
const YearLayout = () => {
	const { finalData } = useContext(PlanContext)
	return (
		<div className="year-layout-container">
			<div className="calendar-year-layout-container">
				{finalData.map((plan) => {
					return (
						<div
							className="calendar-year-detail-layout-container"
							key={plan.id}>
							<BasicCalendar
								defaultActiveStartDate={
									new Date(plan.year, plan.month, plan.day)
								}
								value={new Date(plan.year, plan.month, plan.day)}
								disabledDays={(day) =>
									day.getMonth() !== plan.month && day.getDate() !== plan.day
								}
							/>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default YearLayout
