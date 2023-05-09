import React, { useContext } from "react";
import "./WeekLayout.css";
import { PlanContext } from "./CalendarLayout";

const WeekLayout = ({ editPlan }) => {
	const { filterPlanInWeek } = useContext(PlanContext);
	const day = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
	const plan = Array.from({ length: 24 * 7 }, (v, i) => {
		return {
			id: i + 1,
		};
	});

	const timeAM = Array.from({ length: 12 }, (v, i) => {
		return {
			id: i,
			name: `${i + 1} AM`,
		};
	});

	const timePM = Array.from({ length: 12 }, (v, i) => {
		return {
			id: i + 12,
			name: `${i + 1} PM`,
		};
	});

	const showEditPlan = (id) => {
		editPlan(id);
	};

	return (
		<div className="week-layout-container">
			<div className="week-layout-edit">
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
					{timeAM.map((s) => (
						<div
							key={s.id}
							className="week-layout-edit-timeOption">
							<h6>{s.name}</h6>
						</div>
					))}
					{timePM.map((s) => (
						<div
							key={s.id}
							className="week-layout-edit-timeOption">
							<h6>{s.name}</h6>
						</div>
					))}
				</div>
				<div className="plan-time-week__layout-container">
					{/* day  */}
					<div className="day-week__layout-container">
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
					<div className="plan-week__layout-container">
						{plan.map((item) => {
							// matching plan
							const matchingPlan = filterPlanInWeek.find((plan) => {
								return (
									(item.id % 7 === 0 ? 7 : item.id % 7) === plan.planWeekDate &&
									(item.id % 7 === 0
										? Math.floor(item.id / 7) - 1
										: Math.floor(item.id / 7)) +
										1 ===
										plan.startTime.$H
								);
							});

							if (matchingPlan) {
								const paddingStartMinute = () => {
									let i;
									if (matchingPlan) {
										const minute = matchingPlan.startTime.$m;
										switch (true) {
											case minute >= 0 && minute < 16:
												i = 0;
												break;
											case minute >= 16 && minute < 31:
												i = 1;
												break;
											case minute >= 31 && minute < 46:
												i = 2;
												break;
											case minute >= 46 && minute < 60:
												i = 3;
												break;
											default:
												break;
										}
									}
									return i === 0 ? 0 : i * 30;
								};
								const checkEndMinute = () => {
									let i;
									const paddingHour =
										matchingPlan.endTime.$H - matchingPlan.startTime.$H;
									if (matchingPlan) {
										const minute = matchingPlan.endTime.$m;
										switch (true) {
											case minute >= 0 && minute <= 15:
												i = 0;
												break;
											case minute > 15 && minute < 30:
												i = 1;
												break;
											case minute >= 30 && minute < 45:
												i = 2;
												break;
											case minute >= 45 && minute <= 59:
												i = 3;
												break;
											default:
												break;
										}
									}
									return i === 0
										? 30 + paddingHour * 120 - paddingStartMinute()
										: i * 30 + paddingHour * 120 - paddingStartMinute();
								};
								return (
									<div
										key={item.id}
										className="box-plan-week__layout">
										<div
											style={{
												cursor: "pointer",
												fontSize: "13px",
												marginTop: `${paddingStartMinute()}px`,
												backgroundColor: matchingPlan.tagChoice?.color,
												height: `${checkEndMinute()}px`,
											}}
											onClick={() => showEditPlan(matchingPlan.id)}
											className="hour-box-plan-week__layout">
											{matchingPlan.content}
											<p style={{ fontSize: "13px" }}>
												{matchingPlan.intervalTime}
											</p>
										</div>
									</div>
								);
							}

							// blank plan (no plan)
							return (
								<div
									key={item.id}
									className="box-plan-week__layout">
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

export default WeekLayout;
