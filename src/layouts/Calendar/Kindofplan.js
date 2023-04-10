import React, { createContext, useContext } from "react"
import "./Kindofplan.css"
import { typeofplan } from "../../data/typeofplan"
import { useState } from "react"
import { ChromePicker } from "react-color"
import { PlanContext } from "./CalendarLayout"
import { AiOutlinePlus } from "react-icons/ai"
import { VscTrash } from "react-icons/vsc"

export default function Kindofplan({ filteringPlan, remove, close }) {
	const { tagPlan, setTagPlan } = useContext(PlanContext)
	const [showcolordisplay, setShowColorDisplay] = useState(false)
	const [newtagdisplay, setNewTagDisplay] = useState(false)
	const [cancelkindofplandisplay, setCancelKindOfPlanDisplay] = useState(true)
	const [mockData, setMockData] = useState(typeofplan)
	const [newPlan, setNewPlan] = useState("")
	const [color, setColor] = useState("green")
	const [onChoicesTypeOfplan, setChoicesTypeOfPlan] = useState(false)
	const [chosenTypeOfPlan, setChosenTypeOfPlan] = useState()
	const [tagAfterDelete, setTagAfterDelete] = useState(tagPlan)
	const filteringTagPlan = () => {
		filteringPlan()
	}
	function shownewtag() {
		setNewTagDisplay(!newtagdisplay)
	}
	const onAddData = () => {
		const lastTagId = tagPlan.length > 0 ? tagPlan[tagPlan.length - 1].id : 0
		setTagPlan([
			...tagPlan,
			{
				id: lastTagId + 1,
				color: color,
				type: newPlan,
				choose: false,
			},
		])
		setNewPlan("")
	}
	function cancelnewtag() {
		remove()
	}
	function showcolor() {
		setShowColorDisplay(!showcolordisplay)
	}
	const chooseTypeOfPlan = (id) => {
		setChosenTypeOfPlan(
			tagPlan.map((item) => {
				if (item.id === id) {
					item.choose = !item.choose
				}
				return item
			})
		)
	}

	const deleteTagPlan = (id) => {
		const removeItem = tagPlan.filter((item) => item.id !== id)
		setTagPlan(removeItem)
	}

	return (
		<>
			{cancelkindofplandisplay && (
				<div className="kind-of-plan-container">
					<div className="kind-of-plan">
						<div className="kind-of-plan-tittle">
							<div className="kind-of-plan-tittle-info">Loại kế hoạch</div>
						</div>
						<div className="kind-of-plan-option">
							{tagPlan?.map((element) => {
								return (
									<div
										key={element.id}
										className="kind-of-plan-option-container">
										<div
											style={{ backgroundColor: element.color }}
											className="kind-of-plan-option-color"></div>
										<div
											onClick={() => {
												chooseTypeOfPlan(element.id)
											}}
											className={
												element.choose
													? "kind-of-plan-option-info-choose"
													: "kind-of-plan-option-info"
											}>
											{element.type}
										</div>
										<VscTrash
											onClick={() => {
												deleteTagPlan(element.id)
											}}
											style={{ marginRight: "30px", cursor: "pointer" }}
											size={30}
										/>
									</div>
								)
							})}
						</div>
						<div
							style={{
								cursor: "pointer",
								marginTop: "14px",
								marginLeft: "33px",
								width: "fit-content",
							}}
							onClick={shownewtag}
							className="kind-of-plan-btn-add">
							<AiOutlinePlus
								style={{ color: "gray" }}
								size={30}
							/>
						</div>

						<div className="kind-of-plan-btn-create">
							<button
								onClick={filteringTagPlan}
								className="form-btn-create">
								Thêm
							</button>
						</div>
					</div>
					{newtagdisplay && (
						<div className="new-tag-container">
							<div className="new-tag-tittle">
								<div className="new-tag-tittle-info">Tag mới</div>
							</div>
							<div className="new-tag-add-info">
								<input
									value={newPlan}
									onChange={(e) => setNewPlan(e.target.value)}
									type="text"
									placeholder="Tên tag"
									className="new-tag-input"></input>
							</div>
							<div className="new-tag-add-color">
								<div className="new-tag-name-color">Chọn màu</div>
								<div
									onClick={showcolor}
									style={{ backgroundColor: color }}
									className="new-tag-color-option">
									{showcolordisplay && (
										<div>
											<ChromePicker
												color={color}
												onChange={(e) => setColor(e.hex)}
											/>
										</div>
									)}
								</div>
							</div>
							<div className="new-tag-btn-bottom">
								<div className="new-tag-btn-cacel">
									<button
										onClick={() => setNewTagDisplay(false)}
										className="form-btn-cancel">
										Hủy
									</button>
								</div>
								<div className="new-tag-btn-create">
									<button
										className="form-btn-create"
										onClick={onAddData}
										type="button">
										Tạo
									</button>
								</div>
							</div>
						</div>
					)}
				</div>
			)}
		</>
	)
}
