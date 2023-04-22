import React, { useContext } from "react"
import "./WeekLayout.css"
import { PlanContext } from "./CalendarLayout"
import { RxAvatar } from "react-icons/rx"
const WeekLayout = ({ editPlan }) => {
	const { filterPlanInWeek } = useContext(PlanContext)
	const day = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"]
	const plan = Array.from({ length: 25 * 7 }, (v, i) => {
		return {
			id: i + 1,
		}
	})
	const time = [
		0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		21, 22, 23, 24,
	]
	const showEditPlan = (id) => {
		editPlan(id)
	}
	return (
		<div className="week-layout-container">
			<div className="week-layout-edit">
				<div
					className="week-layout-edit-timeColumn"
					style={{
						position: "sticky",
						left: 0,
						zIndex: 8888,
					}}>
					<div
						className="week-layout-edit-timeOption"
						style={{ height: "fit-content" }}>
						<h5 style={{ opacity: 0 }}>3</h5>
					</div>
					{time.map((s) => (
						<div
							key={s}
							className="week-layout-edit-timeOption">
							<h5>{s}:00</h5>
						</div>
					))}
				</div>
				<div className="plan-time-week__layout-container">
					<div className="day-week__layout-container">
						{day.map((item) => {
							return (
								<div
									key={item}
									className="item-day-week__layout-container">
									{item}
								</div>
							)
						})}
					</div>
					<div className="plan-week__layout-container">
						{plan.map((item) => {
							const matchingPlan = filterPlanInWeek.find(
								(plan) =>
									(item.id % 7 === 0 ? 7 : item.id % 7) === plan.planWeekDate &&
									(item.id % 7 === 0
										? Math.floor(item.id / 7) - 1
										: Math.floor(item.id / 7)) === plan.planTime
							)
							if (matchingPlan) {
								return (
									<div
										key={item.id}
										className="specific-plan-week__container">
										<div
											onClick={() => showEditPlan(matchingPlan.id)}
											style={{
												boxShadow: `${matchingPlan.tagChoice?.color} 0px 4px 8px -2px, ${matchingPlan.tagChoice?.color} 0px 0px 0px 1px `,
											}}
											className="box-specific-plan-week__container">
											<div
												style={
													matchingPlan.tagChoice === undefined
														? { backgroundColor: "black" }
														: {
																backgroundColor: matchingPlan.tagChoice.color,
														  }
												}
												className="tag-specific-plan-week__container"></div>
											<div
												// style={{ color: matchingPlan.tagChoice?.color }}
												className="title-specific-plan-week__container">
												<div className="content-specific-plan-week__container">
													{matchingPlan.content}
												</div>
											</div>
											<div className="avatar-plan-week__container">
												<RxAvatar size={26} />
											</div>
										</div>
									</div>
								)
							}

							return (
								<div
									key={item.id}
									className="item-plan-week__layout-container"></div>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	)
}

export default WeekLayout
