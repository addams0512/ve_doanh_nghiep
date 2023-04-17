import React, { useContext, useState } from "react"
import "./MonthLayout.css"
import { planMonthAPI } from "../../data/planAPI"
import { PlanContext } from "./CalendarLayout"
const MonthLayout = () => {
	const { finalData } = useContext(PlanContext)
	const month = Array.from({ length: 31 }, (v, i) => {
		return {
			id: i + 1,
			day: i + 1,
		}
	})
	return (
		<div className="month-layout-container">
			<div className="month-layout-overflow-container">
				{month.map((elements) => {
					const matchingPlan = finalData.filter(
						(plan) => elements.day === plan.planWeekDate
					)
					if (matchingPlan.length > 0) {
						return (
							<div className="month-layout-box1">
								{matchingPlan.slice(0, 3).map((plan) => {
									return (
										<div
											key={plan.id}
											className="month-plan-container">
											<div
												style={{
													backgroundColor: plan.tagPlan.color,
													width: "20px",
													height: "20px",
													borderRadius: "4px",
												}}></div>
											<div className="content-month-plan-container">
												{plan.content}
											</div>
										</div>
									)
								})}
								<div className="month-layout-description">{elements.day}</div>
							</div>
						)
					} else {
						return (
							<div
								key={elements.id}
								className="month-layout-box2">
								{elements.day}
							</div>
						)
					}
				})}
			</div>
		</div>
	)
}

export default MonthLayout
