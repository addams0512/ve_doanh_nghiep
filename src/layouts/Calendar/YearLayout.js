import React, { useContext, useState } from "react"
import "./YearLayout.css"
import BasicCalendar from "../../components/Calendar/BasicCalendar"
const YearLayout = () => {
	const displayCreatePlan = useContext()
	const [displayPLan, setDisplayPlan] = useState(displayCreatePlan)
	const displayPlan = () => {
		setDisplayPlan(!displayPLan)
	}
	const month = Array.from({ length: 12 }, (v, i) => {
		return {
			id: i + 1,
		}
	})
	return (
		<div className="year-layout-container">
			<div className="btn-year-layout-container">
				<button
					onClick={displayPlan}
					className="btn-year-layout">
					Thêm kế hoạch
				</button>
			</div>
			<div className="calendar-year-layout-container">
				{month.map((element) => {
					return (
						<div
							className="calendar-year-detail-layout-container"
							key={element.id}>
							<BasicCalendar />
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default YearLayout
