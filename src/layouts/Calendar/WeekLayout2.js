import React, { useContext } from "react";
import "./WeekLayout.css";
import "./WeekLayout2.css";
import { PlanContext } from "./CalendarLayout";

const WeekLayout2 = ({ editPlan }) => {
	const { filterPlanInWeek } = useContext(PlanContext);
	const day = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
	const plan = Array.from({ length: 24 * 7 }, (v, i) => {
		return {
			id: i + 1,
		};
	});

	const time = Array.from({ length: 24 }, (v, i) => i);
	const showEditPlan = (id) => {
		editPlan(id);
	};

	return (
		<div className="week-layout-container">
			<div className="week-layout2-edit">
				{/* time  */}
				<div
					className="week-layout-edit-timeColumn"
					style={{
						position: "sticky",
						left: 0,
						zIndex: 8888,
					}}>
					<div className="week-layout-edit-time_sticky">
						<h6 style={{ opacity: 0 }}>3</h6>
					</div>
					{time.map((s) => (
						<div
							key={s}
							className="week-layout2-edit-timeOption">
							<h5>{s}:00</h5>
						</div>
					))}
				</div>
				<div className="plan-time-week__layout2-container">
					{/* day  */}
					<div className="day-week__layout2-container">
						{day.map((item) => {
							return (
								<div
									key={item}
									className="item-day-week__layout-container">
									{item}
								</div>
							);
						})}
					</div>

					{/* plan  */}
					<div className="plan-week__layout2-container">
						{plan.map((item) => {
							const matchingPlan = filterPlanInWeek.find((plan) => {
								return (
									(item.id % 7 === 0 ? 7 : item.id % 7) === plan.planWeekDate &&
									(item.id % 7 === 0
										? Math.floor(item.id / 7) - 1
										: Math.floor(item.id / 7)) === plan.startTime.$H
								);
							});

							if (matchingPlan) {
								const checkMinute = () => {
									let i;
									if (matchingPlan) {
										const minute = matchingPlan.startTime.$m;
										switch (true) {
											case minute >= 0 && minute <= 15:
												i = 0;
												break;
											case minute >= 16 && minute <= 30:
												i = 1;
												break;
											case minute >= 31 && minute <= 45:
												i = 2;
												break;
											case minute >= 46 && minute <= 59:
												i = 3;
												break;
											default:
												break;
										}
									}
									return i * 30;
								};
								return (
									<div className="box-plan-week__layout">
										<div
											style={{
												backgroundColor: matchingPlan.tagChoice?.color,
												height: `${checkMinute()}px`,
											}}
											className="hour-box-plan-week__layout">
											{matchingPlan.content}
										</div>
									</div>
								);
							}
							return (
								<div className="box-plan-week__layout">
									<div className="hour-box-plan-week__layout"></div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default WeekLayout2;
