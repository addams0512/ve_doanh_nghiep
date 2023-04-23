import React, { useContext, useEffect, useRef, useState } from "react"
import { AiOutlineSearch } from "react-icons/ai"
import { PlanContext } from "../../layouts/Calendar/CalendarLayout"
import "./FindPlan.css"

const FindPlan = ({ showChoicePlan }) => {
	const { finalData } = useContext(PlanContext)
	const [filterData, setFilterData] = useState([])
	const [isShowPlan, setIsShowPlan] = useState(false)
	const [selectedIndex, setSelectedIndex] = useState(0)
	const findNext = useRef(null)

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

	useEffect(() => {
		if (selectedIndex === 3) {
			findNext.current?.scrollIntoView({ behavior: "smooth" })
		}
	}, [selectedIndex])

	const planChoice = (id) => {
		setIsShowPlan(false)
		showChoicePlan(id)
	}

	const handleChoicePlan = (e) => {
		// keydown
		if (e.keyCode === 40) {
			setSelectedIndex((prevIndex) => {
				if (prevIndex === filterData.length - 1) {
					return 0
				}
				return prevIndex + 1
			})
		}
		// key up
		if (e.keyCode === 38) {
			setSelectedIndex((prevIndex) => {
				if (prevIndex === 0) {
					return 0
				}
				return prevIndex - 1
			})
		}
		// Enter key
		if (e.keyCode === 13) {
			if (filterData.length > 0 && selectedIndex >= 0) {
				const selectedPlan = filterData[selectedIndex]
				setIsShowPlan(false)
				showChoicePlan(selectedPlan.id)
			}
		}
	}

	const handleOutsideClick = () => {
		setIsShowPlan(false)
	}

	return (
		<div className="btn-search-calendar">
			<AiOutlineSearch size={20} />
			<input
				onKeyDown={handleChoicePlan}
				onChange={(e) => showPlan(e.target.value)}
				type="text"
				placeholder="Tìm sự kiện"
			/>
			{isShowPlan && (
				<div>
					<div
						onClick={handleOutsideClick}
						className="result-outside-click-search-plan"
					/>
					<div
						ref={findNext}
						className="result-search-plan">
						{(filterData || finalData).map((plan, index) => (
							<div
								key={plan.id}
								className="result-search-plan-container">
								<div
									style={{ backgroundColor: plan.tagChoice.color }}
									className="result-search-plan-tag"></div>
								<div
									onClick={() => planChoice(plan.id)}
									style={
										index === selectedIndex
											? {
													cursor: "pointer",
													overflowX: "hidden",
													paddingLeft: "20px",
													fontWeight: "bold",
													wordBreak: "break-all",
											  }
											: {}
									}
									className="result-item-search-plan"
									key={plan.id}>
									{plan.content}
								</div>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	)
}

export default FindPlan
