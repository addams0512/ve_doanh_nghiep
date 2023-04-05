import React from "react"
import "./MonthLayout.css"
const MonthLayout = () => {
	const month = Array.from({ length: 30 }, (v, i) => {
		return {
			id: i + 1,
			month: i + 1,
		}
	})
	return (
		<div className="month-layout-container">
			{month.map((elements) => {
				return (
					<div
						key={elements.id}
						className="month-layout-box">
						{elements.month}
					</div>
				)
			})}
		</div>
	)
}

export default MonthLayout
