import React, { createContext, useEffect, useState } from "react"
import "./CalendarLayout.css"
import BasicCalendar from "../../components/Calendar/BasicCalendar"
import { AiOutlineSearch } from "react-icons/ai"
import DayLayout from "./DayLayout"
import MonthLayout from "./MonthLayout"
import WeekLayout from "./WeekLayout"
import YearLayout from "./YearLayout"
import CreatePlan from "../../components/Calendar/CreatePlan"
import { planAPI, tagPlanAPI } from "../../data/planAPI"

export const DayContext = createContext()
export const PlanContext = createContext()
const CalendarLayout = () => {
	const [displayDay, setDisplayDay] = useState(true)
	const [displayWeek, setDisplayWeek] = useState(false)
	const [displayMonth, setDisplayMonth] = useState(false)
	const [displayYear, setDisplayYear] = useState(false)
	const [displayPlanCreate, setDisplayPlanCreate] = useState(false)
	const [currentDay, setDay] = useState(new Date())
	const [currentTime, setCurrentTime] = useState(currentDay.getHours())
	const [finalData, setFinalData] = useState(planAPI)
	const [tagPlan, setTagPlan] = useState(tagPlanAPI)
	const handleClickAddPlan = () => {
		setDisplayPlanCreate(!displayPlanCreate)
	}
	const value = {
		setTagPlan,
		tagPlan,
		finalData,
		setFinalData,
	}
	// handle next plan

	const nextPlan = finalData.filter((plan) => plan.day > currentDay.getDate())

	return (
		<DayContext.Provider value={currentDay}>
			<PlanContext.Provider value={value}>
				<div className="container-calendar">
					<div className="header-container-calendar">
						<div className="date-calendar">
							<h1>{currentDay.getDate()}</h1>
							<p>tháng {currentDay.getMonth() + 1}</p>
							<p>{currentDay.getFullYear()}</p>
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
										setDisplayDay(true)
										setDisplayWeek(false)
										setDisplayMonth(false)
										setDisplayYear(false)
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
										setDisplayDay(false)
										setDisplayWeek(true)
										setDisplayMonth(false)
										setDisplayYear(false)
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
										setDisplayDay(false)
										setDisplayWeek(false)
										setDisplayMonth(true)
										setDisplayYear(false)
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
										setDisplayDay(false)
										setDisplayWeek(false)
										setDisplayMonth(false)
										setDisplayYear(true)
									}}>
									Năm
								</button>
							</div>
							<div className="container-box2-plan">
								<div className="btn-search-calendar">
									<AiOutlineSearch size={20} />
									<input
										type="text"
										placeholder="Tìm sự kiện"
									/>
								</div>
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
										onChange={setDay}
										value={currentDay}
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
											{nextPlan.map((plan) => {
												return (
													<div
														key={plan.id}
														className="detail-next-plan-calendar">
														<input
															type="checkbox"
															className="checkbox-next-plan-calendar"
															style={{ height: "20px", width: "20px" }}
														/>
														<div className="date-next-plan-calendar">
															{" "}
															<b>
																{plan.day}/{plan.month + 1} :{" "}
																{plan.intervalTime}
															</b>
															<p style={{ color: plan.tagChoice.color }}>
																{plan.content}
															</p>
														</div>
													</div>
												)
											})}
										</div>
									</div>
								</div>
							</div>
							<div className="box2-calendar">
								{displayDay && <DayLayout />}
								{displayWeek && <WeekLayout />}
								{displayMonth && <MonthLayout />}
								{displayYear && <YearLayout />}
							</div>
							<div />
						</div>
					)}
					{displayPlanCreate && (
						<CreatePlan remove={() => setDisplayPlanCreate(false)} />
					)}
				</div>
			</PlanContext.Provider>
		</DayContext.Provider>
	)
}

export default CalendarLayout
