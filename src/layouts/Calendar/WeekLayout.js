import React from "react"
import "./WeekLayout.css"
import { planAPI } from "../../data/planAPI"
const WeekLayout = () => {
	const day = [1, 2, 3, 4, 5, 6, 7]
	const plan = Array.from({ length: 25 * 7 }, (v, i) => {
		return {
			id: i + 1,
		}
	})
	const time = [
		0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		21, 22, 23, 24,
	]

	return (
		<div className="week-layout-container">
			<div className="week-layout-edit">
				<div
					className="week-layout-edit-timeColumn"
					style={{
						position: "sticky",
						left: 0,
						background: "white",
						zIndex: 9999,
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
							const matchingPlan = planAPI.find(
								(plan) =>
									item.id % 7 === plan.planWeekDate &&
									Math.floor(item.id / 7) === plan.planTime
							)
							if (matchingPlan) {
								return (
									<div
										key={item.id}
										className="specific-plan-week__container">
										<div className="box-specific-plan-week__container">
											<div
												style={{ backgroundColor: matchingPlan.color }}
												className="tag-specific-plan-week__container"></div>
											<div
												style={{ color: matchingPlan.color }}
												className="title-specific-plan-week__container">
												<div
													style={{ fontSize: "1rem" }}
													className="heading-specific-plan-week__container">
													{matchingPlan.planPartner} {matchingPlan.planName}{" "}
												</div>
												<div
													style={{ fontSize: "0.8rem" }}
													className="content-specific-plan-week__container">
													{matchingPlan.planDate}
												</div>
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
