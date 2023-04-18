import React, { useContext, useState } from "react"
import "./DayLayout.css"
import { RxAvatar } from "react-icons/rx"
import { PlanContext } from "./CalendarLayout"

const DayLayout = ({ editPlan }) => {
	const { finalData, displayPlan, setDisplayPlan } = useContext(PlanContext)
	const [planInDate, setPlanInDate] = useState()
	const [showPlan, setShowPlan] = useState(false)
	const currentDay = (new Date().getDay() + 1) % 7 || 7
	const dayInWeek = [
		{
			id: 1,
			name: "CN",
		},
		{
			id: 2,
			name: "T2",
		},
		{
			id: 3,
			name: "T3",
		},
		{
			id: 4,
			name: "T4",
		},
		{
			id: 5,
			name: "T5",
		},
		{
			id: 6,
			name: "T6",
		},
		{
			id: 7,
			name: "T7",
		},
	]

	// handle day in week plan
	const filterPlanDate = (id) => {
		setShowPlan(true)
		const planInDate = finalData.filter((plan) => id === plan.planWeekDate)
		setPlanInDate(planInDate)
	}

	// handle current day
	const planInCurrentDate = finalData.filter(
		(plan) => plan.planWeekDate === currentDay
	)

	// edit plan
	const handleEditPlan = (id) => {
		editPlan(id)
	}

	return (
		<div>
			<div className="btn-date-calendar">
				{dayInWeek.map((item) => {
					return (
						<button
							onClick={() => {
								filterPlanDate(item.id)
							}}
							key={item.id}>
							{item.name}
						</button>
					)
				})}
			</div>
			<div className="plan-calendar">
				<div className="plan-calendar-container">
					{(showPlan ? planInDate : planInCurrentDate).map((item) => {
						return (
							<div
								onDoubleClick={() => handleEditPlan(item.id)}
								key={item.id}
								className="detail-plan-calendar-container">
								<div
									style={{ color: item.tagChoice?.color }}
									className="specific-time-plan-calendar">
									{item.timePicker}
								</div>
								<div className="content-detail-plan-calendar">
									<div
										style={{ backgroundColor: item.tagChoice?.color }}
										className="tag-detail-plan-calendar"></div>
									<div
										style={{ color: item.tagChoice?.color }}
										className="detail-description-plan-calendar">
										<div className="title-detail-plan-calendar">
											{item.content}
										</div>
										<div className="time-detail-plan-calendar">
											{item.intervalTime}
										</div>
										<div className="avatar-detail-plan-caledar">
											<RxAvatar size={40} />
											<RxAvatar size={40} />
											<RxAvatar size={40} />
										</div>
									</div>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default DayLayout
