import React, { useContext, useState } from "react";
import "./MonthLayout.css";
import { planMonthAPI } from "../../data/planAPI";
import { PlanContext } from "./CalendarLayout";
const MonthLayout = () => {
	const { finalData } = useContext(PlanContext);
	const currentMonth = new Date().getMonth();
	const filterMonthPlan = finalData.filter(
		(plan) => plan.month === currentMonth
	);
	const [isMorePlan, setIsMorePlan] = useState(false);
	const showMorePlan = () => {
		setIsMorePlan(!isMorePlan);
	};
	const month = Array.from({ length: 31 }, (v, i) => {
		return {
			id: i + 1,
			day: i + 1,
		};
	});
	return (
		<div className="month-layout-container">
			<div className="month-layout-overflow-container">
				{month.map((elements) => {
					const matchingPlan = filterMonthPlan.filter(
						(plan) => elements.day === plan.day
					);
					if (matchingPlan.length > 0) {
						return (
							<div
								key={elements.id}
								className="month-layout-box1">
								<div className="month-layout-plan__container">
									{(isMorePlan ? matchingPlan.slice(0, 4) : matchingPlan).map(
										(plan) => {
											return (
												<div
													key={plan.id}
													className="month-plan-container">
													<div
														style={{
															backgroundColor: plan.tagChoice?.color,
															width: "20px",
															height: "20px",
															borderRadius: "4px",
														}}></div>
													<div className="content-month-plan-container">
														{plan.content}
													</div>
												</div>
											);
										}
									)}
								</div>
								<div className="month-layout-description">
									{matchingPlan.length > 4 ? (
										<div
											onClick={showMorePlan}
											style={{
												marginTop: "10px",
												cursor: "pointer",
												fontStyle: "italic",
												fontSize: "1rem	",
												marginRight: "auto",
											}}
											className="show-more-plan-month__layouts">
											+ {matchingPlan.length > 4 ? matchingPlan.length - 4 : 0}
										</div>
									) : (
										<div className="show-more-plan-month__layouts"></div>
									)}
									<div className="month-day-layout-description">
										{elements.day}
									</div>
								</div>
							</div>
						);
					} else {
						return (
							<div
								key={elements.id}
								className="month-layout-box2">
								{elements.day}
							</div>
						);
					}
				})}
			</div>
		</div>
	);
};

export default MonthLayout;
