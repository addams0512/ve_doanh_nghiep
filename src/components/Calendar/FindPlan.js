import React, { useContext, useState } from "react"
import { AiOutlineSearch } from "react-icons/ai"
import { PlanContext } from "../../layouts/Calendar/CalendarLayout"
import "./FindPlan.css"
import ShowPlan from "./ShowPlan"
const FindPlan = ({ showChoicePlan }) => {
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

	const planChoice = (id) => {
		setIsShowPlan(false)
		showChoicePlan(id)
	}
	return (
		<div className="btn-search-calendar">
			<AiOutlineSearch size={20} />
			<input
				onChange={(e) => showPlan(e.target.value)}
				type="text"
				placeholder="Tìm sự kiện"
			/>
			{isShowPlan && (
				<div className="result-search-plan">
					{(filterData || finalData).map((plan) => (
						<div
							onClick={() => planChoice(plan.id)}
							style={{ cursor: "pointer" }}
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
