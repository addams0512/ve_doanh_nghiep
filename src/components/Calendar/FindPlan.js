import React, { useContext, useState } from "react"
import { AiOutlineSearch } from "react-icons/ai"
import { PlanContext } from "../../layouts/Calendar/CalendarLayout"
import "./FindPlan.css"
const FindPlan = () => {
	const { finalData, setFinalData } = useContext(PlanContext)
	const [filterData, setFilterData] = useState([])
	const [isShowPlan, setIsShowPlan] = useState(false)
	const showPlan = (e) => {
		setIsShowPlan(true)
		if (!e) {
			setFilterData([])
			return
		}
		const querry = e.toLowerCase()

		const dataFilter = finalData.filter((plan) =>
			plan.content.toLowerCase().includes(querry)
		)
		setFilterData(dataFilter)
	}
	const handleLeaveSearch = () => {
		setIsShowPlan(false)
	}
	return (
		<div
			onMouseLeave={handleLeaveSearch}
			className="btn-search-calendar">
			<AiOutlineSearch size={20} />
			<input
				onChange={(e) => showPlan(e.target.value)}
				type="text"
				placeholder="Tìm sự kiện"
			/>
			{isShowPlan && (
				<div className="result-search-plan">
					{filterData.map((plan) => (
						<div
							className="result-item-search-plan"
							key={plan.id}>
							{plan.content}
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default FindPlan
