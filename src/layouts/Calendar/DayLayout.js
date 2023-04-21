import React, { useContext, useState } from "react"
import "./DayLayout.css"
import { RxAvatar } from "react-icons/rx"
import { PlanContext } from "./CalendarLayout"

const DayLayout = ({ editPlan }) => {
	const { finalData } = useContext(PlanContext)
	const [planInDate, setPlanInDate] = useState()
	const [showPlan, setShowPlan] = useState(false)
	const currentDay = (new Date().getDay() + 1) % 7 || 7
	const [isShowDay, setIsShowDay] = useState(false)
	console.log({ currentDay })
	const dayInWeek = [
		{
			id: 1,
			name: "CN",
			filter: false,
		},
		{
			id: 2,
			name: "T2",
			filter: false,
		},
		{
			id: 3,
			name: "T3",
			filter: false,
		},
		{
			id: 4,
			name: "T4",
			filter: false,
		},
		{
			id: 5,
			name: "T5",
			filter: false,
		},
		{
			id: 6,
			name: "T6",
			filter: false,
		},
		{
			id: 7,
			name: "T7",
			filter: false,
		},
	]
	const [weekSelected, setWeekSelected] = useState(dayInWeek)

	// handle day in week plan
	const filterPlanDate = (id) => {
		setIsShowDay(true)
		setWeekSelected(
			dayInWeek.map((day) => {
				if (id === day.id) {
					day.filter = !day.filter
				} else {
					day.filter = false
				}
				return day
			})
		)
		setShowPlan(true)
		const planInDate = finalData.filter((plan) => id === plan.planWeekDate)
		setPlanInDate(planInDate)
	}

	// handle current day
	const planInCurrentDate = finalData.filter(
		(plan) => plan.planWeekDate === currentDay
	)

	//handle btn current day
	const btnInCurrentDay = dayInWeek.map((btn) => {
		if (btn.id === currentDay) {
			btn.filter = !btn.filter
		}
		return btn
	})

	// edit plan
	const handleEditPlan = (id) => {
		editPlan(id)
	}

	return (
		<div>
			<div className="btn-date-calendar">
				{(isShowDay ? weekSelected : btnInCurrentDay).map((item) => {
					return (
						<button
							style={
								item.filter ? { backgroundColor: "black", color: "white" } : {}
							}
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
