import React, { createContext, useEffect, useState } from "react";
import "./CalendarLayout.css";
import BasicCalendar from "../../components/Calendar/BasicCalendar";
import DayLayout from "./DayLayout";
import MonthLayout from "./MonthLayout";
import WeekLayout from "./WeekLayout";
import YearLayout from "./YearLayout";
import CreatePlan from "../../components/Calendar/CreatePlan";
import { planAPI, tagPlanAPI } from "../../data/planAPI";
import ShowPlan from "../../components/Calendar/ShowPlan";
import SearchBar from "../../components/Calendar/SearchBar";
import CheckBox from "../../components/Calendar/CheckBox";
import { RiDeleteBin5Line } from "react-icons/ri";
import instance from "../../data/instance";
export const DayContext = createContext();
export const PlanContext = createContext();
export const PartnerContext = createContext();

const CalendarLayout = () => {
	const [displayDay, setDisplayDay] = useState(true);
	const [displayWeek, setDisplayWeek] = useState(false);
	const [displayMonth, setDisplayMonth] = useState(false);
	const [displayYear, setDisplayYear] = useState(false);
	const [displayPlanCreate, setDisplayPlanCreate] = useState(false);
	const [dayChosen, setDayChosen] = useState(new Date());
	const [finalData, setFinalData] = useState(planAPI);
	const [tagPlan, setTagPlan] = useState(tagPlanAPI);
	const [partnerChoice, setPartnerChoice] = useState([]);
	const [userData, setUserData] = useState();
	const [idEditPlan, setIdEditPlan] = useState();
	const [displayPlan, setDisplayPlan] = useState(false);
	const [idDeletePlan, setIdDeletePlan] = useState("");
	const [isConfirmDeletePlan, setIsConfirmDeletePlan] = useState(false);
	const currentDay = new Date().getDate();
	const currentMonth = new Date().getMonth();

	// get user data
	useEffect(() => {
		const getUserData = async () => {
			try {
				const res = await instance.get("/users");
				setUserData(res.data);
			} catch (e) {
				console.log(e);
			}
		};
		getUserData();
	}, []);
	// sun is startDate and sat is the endDate
	const dayOfWeek = dayChosen.getDay();
	const daysToSubtract = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
	const startDate = new Date(
		dayChosen.getTime() - daysToSubtract * 24 * 60 * 60 * 1000
	);

	const endDate = new Date(startDate.getTime() + 6 * 24 * 60 * 60 * 1000);

	// filter date in week
	const filterPlanInWeek = finalData.filter(
		(plan) => plan.dayChosen >= startDate && plan.dayChosen <= endDate
	);

	// display create plan
	const handleClickAddPlan = () => {
		setDisplayPlanCreate(!displayPlanCreate);
	};

	const value = {
		// partner
		userData,
		setUserData,
		// plan in week
		filterPlanInWeek,
		// id for delete Plan
		idDeletePlan,
		setIdDeletePlan,
		// id for edit Plan
		idEditPlan,
		// display plan create to edit
		displayPlan,
		setDisplayPlan,
		// array of tag plan
		setTagPlan,
		tagPlan,
		// handle final data
		finalData,
		setFinalData,
		// day pick in
		dayChosen,
	};

	// handle edit plan
	const handleEditPlan = (id) => {
		setDisplayPlan(true);
		setIdEditPlan(id);
		setIdDeletePlan(id);
	};

	// handle delete Tag
	const deleteCurrentPlan = () => {
		const planDeleted = finalData.filter((plan) => plan.id !== idDeletePlan);
		setFinalData(planDeleted);
	};

	// handle next plan
	const nextPlan = finalData.filter(
		(plan) => plan.day >= currentDay && plan.month >= currentMonth
	);

	// handelCompleted
	const [planCompleted, setPlanCompleted] = useState(nextPlan);
	const handleCompleted = (id) => {
		setPlanCompleted(
			nextPlan.map((plan) => {
				if (id === plan.id) {
					plan.completed = !plan.completed;
				}
				return plan;
			})
		);
	};

	// array to search
	const searchArray = finalData.map((plan) => {
		const { id, content } = plan;
		return { id, content };
	});

	return (
		<PlanContext.Provider value={value}>
			<PartnerContext.Provider value={{ partnerChoice, setPartnerChoice }}>
				<DayContext.Provider value={{ dayChosen, setDayChosen }}>
					<div className="container-calendar">
						<div className="header-container-calendar">
							<div className="date-calendar">
								<h1>{dayChosen.getDate()}</h1>
								<p>tháng {dayChosen.getMonth() + 1}</p>
								<p>{dayChosen.getFullYear()}</p>
							</div>
							<div className="time-search-type-calendar">
								<div className="time-type-calendar">
									<button
										style={
											displayDay
												? {
														backgroundColor: "black",
														color: "white",
												  }
												: {}
										}
										onClick={() => {
											setDisplayDay(true);
											setDisplayWeek(false);
											setDisplayMonth(false);
											setDisplayYear(false);
										}}>
										Ngày
									</button>
									<button
										style={
											displayWeek
												? {
														backgroundColor: "black",
														color: "white",
												  }
												: {}
										}
										onClick={() => {
											setDisplayDay(false);
											setDisplayWeek(true);
											setDisplayMonth(false);
											setDisplayYear(false);
										}}>
										Tuần
									</button>
									<button
										style={
											displayMonth
												? {
														backgroundColor: "black",
														color: "white",
												  }
												: {}
										}
										onClick={() => {
											setDisplayDay(false);
											setDisplayWeek(false);
											setDisplayMonth(true);
											setDisplayYear(false);
										}}>
										Tháng
									</button>
									<button
										style={
											displayYear
												? {
														backgroundColor: "black",
														color: "white",
												  }
												: {}
										}
										onClick={() => {
											setDisplayDay(false);
											setDisplayWeek(false);
											setDisplayMonth(false);
											setDisplayYear(true);
										}}>
										Năm
									</button>
								</div>
								<div className="container-box2-plan">
									<SearchBar
										name="Tìm kế hoạch của bạn"
										suggestions={searchArray}
										showChoicePlan={(id) => {
											handleEditPlan(id);
										}}
									/>
								</div>
							</div>
						</div>
						{displayYear ? (
							<YearLayout />
						) : (
							<div className="content-container-calendar">
								<div className="box1-calendar">
									<div className="add-plan-calendar">
										<button onClick={handleClickAddPlan}>Thêm kế hoạch</button>
									</div>
									<div className="display-calendar">
										<BasicCalendar
											onChange={setDayChosen}
											value={dayChosen}
										/>
									</div>
									<div className="type-plan-calendar">
										<div className="type-plan-calendar-container">
											<div className="title-type-plan-calendar">
												<p> Loại kế hoạch</p>
											</div>
											<div className="description-type-plan-calendar">
												{tagPlan.map((tagplan) => (
													<div
														key={tagplan.id}
														className="description-type-plan-container">
														<div
															style={{ backgroundColor: tagplan.color }}
															className="color-descrtiption-type-plan"></div>
														<div className="description-type-plan">
															{tagplan.type}
														</div>
													</div>
												))}
											</div>
										</div>
									</div>
									<div className="next-plan-calendar">
										<div className="next-plan-calendar-container">
											<div className="title-next-plan-calender">
												Kế hoạch sắp tới
											</div>
											<div className="detail-next-plan-calendar-container">
												{nextPlan.reverse().map((plan) => {
													return (
														<div
															style={
																plan.expirePlan
																	? { backgroundColor: "#F24242" }
																	: {}
															}
															key={plan.id}
															className="detail-next-plan-calendar">
															<CheckBox
																completePlan={() => handleCompleted(plan.id)}
																id={plan.id}
															/>
															<div
																className={
																	plan.completed
																		? "date-next-plan-calendar-completed"
																		: "date-next-plan-calendar"
																}>
																{" "}
																<div>
																	<p
																		style={{
																			marginBottom: "4px",
																			fontSize: "1.2rem",
																			color: plan.tagChoice.color,
																		}}>
																		{plan.day}/{plan.month + 1} :{" "}
																		{plan.intervalTime}
																	</p>
																	<b>{plan.content}</b>
																</div>
																<div className="delete-next-plan-calendar">
																	<RiDeleteBin5Line
																		cursor={"pointer"}
																		color={plan.tagChoice.color}
																		size={26}
																		onClick={() => {
																			setIsConfirmDeletePlan(true);
																			setIdDeletePlan(plan.id);
																		}}
																	/>
																</div>
																{isConfirmDeletePlan && (
																	<div className="accept-delete-plan-container">
																		<div className="accept-delete-plan-box">
																			<div className="title-delete-plan__pop-up">
																				Bạn có chắc muốn hủy kế hoạch này?
																			</div>
																			<div className="btn-delete-plan__pop-up">
																				<button
																					onClick={() => {
																						setIsConfirmDeletePlan(false);
																					}}>
																					Hủy
																				</button>
																				<button
																					onClick={() => {
																						deleteCurrentPlan();
																						setIsConfirmDeletePlan(false);
																					}}>
																					{" "}
																					Xác nhận
																				</button>
																			</div>
																		</div>
																	</div>
																)}
															</div>
														</div>
													);
												})}
											</div>
										</div>
									</div>
								</div>
								<div className="box2-calendar">
									{displayDay && (
										<DayLayout editPlan={(id) => handleEditPlan(id)} />
									)}
									{displayWeek && (
										<WeekLayout editPlan={(id) => handleEditPlan(id)} />
									)}
									{displayMonth && <MonthLayout />}
									{displayYear && <YearLayout />}
								</div>
								<div />
							</div>
						)}
						{displayPlanCreate && (
							<CreatePlan remove={() => setDisplayPlanCreate(false)} />
						)}
						{displayPlan && <ShowPlan remove={() => setDisplayPlan(false)} />}
					</div>
				</DayContext.Provider>
			</PartnerContext.Provider>
		</PlanContext.Provider>
	);
};

export default CalendarLayout;
