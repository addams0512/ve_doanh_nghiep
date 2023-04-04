import React from "react"
import "./WeekLayout.css"
import { DayPilotCalendar } from "@daypilot/daypilot-lite-react"
import { planAPI } from "../../data/planAPI"
const WeekLayout = () => {
	const day = [1, 2, 3, 4, 5, 6, 7]
	// const time = () => {
	// 	for (let i = 0; i < 24; i++) {}
	// }
	// console.log(time)
	const time = [
		0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		21, 22, 23, 24,
	]
	const fetchedData = planAPI
	const filterPlan = fetchedData.filter((item) => {
		return item.planDate >= "2023-10-12" && item.planDate <= "2023-10-30"
	})
	const generateMonday = filterPlan.filter((s) => {
		return s.planWeekDate === "Monday"
	})
	const generateTuesday = filterPlan.filter((s) => {
		return s.planWeekDate === "Tuesday"
	})
	const generateWednesday = filterPlan.filter((s) => {
		return s.planWeekDate === "Wednesday"
	})
	const generateThursday = filterPlan.filter((s) => {
		return s.planWeekDate === "Thursday"
	})
	const generateFriday = filterPlan.filter((s) => {
		return s.planWeekDate === "Friday"
	})
	const generateSaturday = filterPlan.filter((s) => {
		return s.planWeekDate === "Saturday"
	})
	const generateSunday = filterPlan.filter((s) => {
		return s.planWeekDate === "Sunday"
	})

	let grid = []
	const gridLength = 25 - generateSunday.length
	for (let i = 0; i < gridLength; i++) {
		generateSunday.push(new Array(25))
	}
	const sundayTime = generateSunday.map((s, index) => {
		let arr = []
		for (let i = 0; i < 25; i++) {
			arr.push(i)
		}
		return {
			planTime: s.planTime,
			planTime1: `${arr[index]}:00`,
			planName: s.planName,
			planId: s.planId,
			planPartner: s.planPartner,
			planWeekDate: s.planWeekDate,
			planDate: s.planDate,
		}
	})

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
						<div className="week-layout-edit-timeOption">
							<h5>{s}:00</h5>
						</div>
					))}
				</div>
				<div
					className="week-layout-edit-timeColumn"
					style={{ display: "flex" }}>
					<div>
						<div
							className="week-layout-edit-timeOption"
							style={{
								height: "fit-content",
								borderBottom: "1px solid lightgray",
								textAlign: "center",
							}}>
							<h5 style={{ fontSize: 20, color: "gray" }}>1</h5>
						</div>
						{time.map((s) => (
							<div
								className="week-layout-edit-timeOption"
								style={{
									width: 280,
									borderBottom: "1px solid lightgray",
								}}>
								<h5>{s}:00</h5>
							</div>
						))}
					</div>
					<div>
						<div
							className="week-layout-edit-timeOption"
							style={{
								height: "fit-content",
								borderBottom: "1px solid",
								textAlign: "center",
								borderLeft: "1px solid lightgray",
							}}>
							<h5 style={{ fontSize: 20, color: "gray" }}>2</h5>
						</div>
						{sundayTime
							.sort((a, b) => {
								return b.planTime1 - a.planTime1
							})
							.map((s) => (
								<>
									{s.planTime1 !== "0:00" && s.planTime !== "0:00" && (
										<div
											className="week-layout-edit-timeOption"
											style={{
												width: 280,
												borderLeft: "1px solid ",
												borderBottom: "1px solid",
											}}>
											<h5>{s.planName}</h5>
										</div>
									)}
									{!s.planTime !== s.planTime1 && (
										<div
											className="week-layout-edit-timeOption"
											style={{
												width: 280,
												borderLeft: "1px solid ",
												borderBottom: "1px solid",
											}}>
											<h5>Pending</h5>
										</div>
									)}
								</>
							))}
					</div>
					<div>
						<div
							className="week-layout-edit-timeOption"
							style={{
								height: "fit-content",
								borderBottom: "1px solid",
								textAlign: "center",
								borderLeft: "1px solid lightgray",
							}}>
							<h5 style={{ fontSize: 20, color: "gray" }}>3</h5>
						</div>
						{time.map((s) => (
							<div
								className="week-layout-edit-timeOption"
								style={{
									width: 280,
									borderLeft: "1px solid ",
									borderBottom: "1px solid",
								}}>
								<h5>{s}:00</h5>
							</div>
						))}
					</div>
					<div>
						<div
							className="week-layout-edit-timeOption"
							style={{
								height: "fit-content",
								borderBottom: "1px solid",
								textAlign: "center",
								borderLeft: "1px solid lightgray",
							}}>
							<h5 style={{ fontSize: 20, color: "gray" }}>4</h5>
						</div>
						{time.map((s) => (
							<div
								className="week-layout-edit-timeOption"
								style={{
									width: 280,
									borderLeft: "1px solid ",
									borderBottom: "1px solid",
								}}>
								<h5>{s}:00</h5>
							</div>
						))}
					</div>
					<div>
						<div
							className="week-layout-edit-timeOption"
							style={{
								height: "fit-content",
								borderBottom: "1px solid",
								textAlign: "center",
								borderLeft: "1px solid lightgray",
							}}>
							<h5 style={{ fontSize: 20, color: "gray" }}>5</h5>
						</div>
						{time.map((s) => (
							<div
								className="week-layout-edit-timeOption"
								style={{
									width: 280,
									borderLeft: "1px solid ",
									borderBottom: "1px solid",
								}}>
								<h5>{s}:00</h5>
							</div>
						))}
					</div>
					<div>
						<div
							className="week-layout-edit-timeOption"
							style={{
								height: "fit-content",
								borderBottom: "1px solid",
								textAlign: "center",
								borderLeft: "1px solid lightgray",
							}}>
							<h5 style={{ fontSize: 20, color: "gray" }}>6</h5>
						</div>
						{time.map((s) => (
							<div
								className="week-layout-edit-timeOption"
								style={{
									width: 280,
									borderLeft: "1px solid ",
									borderBottom: "1px solid",
								}}>
								<h5>{s}:00</h5>
							</div>
						))}
					</div>
					<div>
						<div
							className="week-layout-edit-timeOption"
							style={{
								height: "fit-content",
								borderBottom: "1px solid",
								textAlign: "center",
								borderLeft: "1px solid lightgray",
							}}>
							<h5 style={{ fontSize: 20, color: "gray" }}>7</h5>
						</div>
						{time.map((s) => (
							<div
								className="week-layout-edit-timeOption"
								style={{
									width: 280,
									borderLeft: "1px solid ",
									borderBottom: "1px solid",
								}}>
								<h5>{s}:00</h5>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default WeekLayout
