import React from "react"
import "./MonthLayout.css"
import { planMonthAPI } from "../../data/planAPI"
const MonthLayout = () => {
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
					const matchingPlan = planMonthAPI.find(
						(plan) => elements.day === plan.dateInMonth
					)
					if (matchingPlan) {
						return (
							<div
								key={elements.id}
								className="month-layout-box1">
								<div className="month-plan-container">
									<div
										style={{
											backgroundColor: matchingPlan.type.colorType,
											width: "20px",
											height: "20px",
											borderRadius: "4px",
										}}></div>
									<div className="content-month-plan-container">
										{matchingPlan.type.contentType}
									</div>
								</div>
								<div className="month-layout-description">{elements.day}</div>
							</div>
						)
					}
					return (
						<div
							key={elements.id}
							className="month-layout-box2">
							{elements.day}
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default MonthLayout
