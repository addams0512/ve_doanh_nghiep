import React, { useContext } from "react";
import "./DayLayout.css";
import { RxAvatar } from "react-icons/rx";
import { PlanContext } from "./CalendarLayout";

const DayLayout = ({ editPlan }) => {
	const { filterPlanInWeek, dayChosen } = useContext(PlanContext);

	// day in week chosen
	const dayWeekChosen = dayChosen.getDay() % 7 || 7;

	const dayInWeek = [
		{
			id: 1,
			name: "T2",
			filter: false,
		},
		{
			id: 2,
			name: "T3",
			filter: false,
		},
		{
			id: 3,
			name: "T4",
			filter: false,
		},
		{
			id: 4,
			name: "T5",
			filter: false,
		},
		{
			id: 5,
			name: "T6",
			filter: false,
		},
		{
			id: 6,
			name: "T7",
			filter: false,
		},
		{
			id: 7,
			name: "CN	",
			filter: false,
		},
	];

	// handle current day
	const planInCurrentDate = filterPlanInWeek.filter(
		(plan) => plan.planWeekDate === dayWeekChosen
	);

	//handle btn current day
	const btnInCurrentDay = dayInWeek.map((btn) => {
		if (btn.id === dayWeekChosen) {
			btn.filter = !btn.filter;
		}
		return btn;
	});

	// edit-delete plan
	const handleEditPlan = (id) => {
		editPlan(id);
	};

	return (
		<div>
			<div className="btn-date-calendar">
				{btnInCurrentDay.map((item) => {
					return (
						<button
							style={
								item.filter ? { backgroundColor: "black", color: "white" } : {}
							}
							key={item.id}>
							{item.name}
						</button>
					);
				})}
			</div>
			<div className="plan-calendar">
				<div className="plan-calendar-container">
					{planInCurrentDate.map((item) => {
						return (
							<div
								key={item.id}
								onClick={() => handleEditPlan(item.id)}
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
										style={{ cursor: "pointer", color: item.tagChoice?.color }}
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
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default DayLayout;
