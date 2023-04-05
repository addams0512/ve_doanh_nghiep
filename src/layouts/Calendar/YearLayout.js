import React, { useContext, useState } from "react"
import "./YearLayout.css"
import BasicCalendar from "../../components/Calendar/BasicCalendar"
import { PlanContext } from "./CalendarLayout"
import CreatePlan from "../../components/Calendar/CreatePlan"
const YearLayout = () => {
	const { setDisplayPlanCreate } = useContext(PlanContext)
	const { displayPlanCreate } = useContext(PlanContext)

	const displayPlan = () => {
		setDisplayPlanCreate(true)
	}
	const month = Array.from({ length: 12 }, (v, i) => {
		return {
			id: i + 1,
		}
	})
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
				{month.map((element) => {
					return (
						<div
							className="calendar-year-detail-layout-container"
							key={element.id}>
							<BasicCalendar />
						</div>
					)
				})}
			</div>
			{displayPlanCreate && (
				<CreatePlan remove={() => setDisplayPlanCreate(false)} />
			)}
		</div>
	)
}

export default YearLayout
