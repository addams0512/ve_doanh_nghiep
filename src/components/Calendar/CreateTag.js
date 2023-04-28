import React, { createContext } from "react"
import { useState, useContext } from "react"
import { FaTags } from "react-icons/fa"
import { PlanContext } from "../../layouts/Calendar/CalendarLayout"
import { ChromePicker } from "react-color"
import { RiDeleteBack2Line, RiChatDeleteLine } from "react-icons/ri"

export const TagContext = createContext()
const CreateTag = () => {
	const { tagPlan, setTagPlan } = useContext(PlanContext)
	const [tagChoice, setTagChoice] = useState()
	const [isTagChoice, setIsTagChoice] = useState(false)
	const [color, setColor] = useState("black")
	const [newPlan, setNewPlan] = useState("")
	const [showcolordisplay, setShowColorDisplay] = useState(false)
	const [idDelete, setIdDelete] = useState()
	const [confirmDeleteTag, setConfirmDeleteTag] = useState(false)
	const [tagDelete, setTagDelete] = useState()

	// colorPicker
	function showcolor() {
		setShowColorDisplay(!showcolordisplay)
	}
	const closeColorPicker = () => {
		setShowColorDisplay(false)
	}

	// handle add tag plan
	const handleAddTag = (e) => {
		if (e.key === "Enter") {
			const lastTagId = tagPlan.length > 0 ? tagPlan.at(0).id + 1 : 0
			const newTag = {
				id: lastTagId,
				color: color,
				type: newPlan,
				delete: false,
			}
			setTagPlan([...tagPlan, newTag])
			setIsTagChoice(true)
			setTagChoice(newTag)
			setNewPlan("")
		}
	}

	// choose Tag
	const tagChosen = (id) => {
		const tagChosen = tagPlan.find((tag) => id === tag.id)
		setIsTagChoice(true)
		setTagChoice(tagChosen)
	}

	// confirmation delete Tag
	const handleDeleteTag = (id) => {
		const tagDelete = tagPlan.filter((item) => item.id === id)
		console.log({ tagDelete })
		setTagDelete(tagDelete)
		setIdDelete(id)
		setConfirmDeleteTag(true)
	}

	// delete Tag
	const deleteTag = (id) => {
		setTagPlan(tagPlan.filter((plan) => plan.id !== idDelete))
	}

	return (
		<>
			<TagContext.Provider value={tagChoice}>
				<div className="title-type-create-plan-container">
					<FaTags size={30} />
					<div className="title-type-create-plan">Loại kế hoạch</div>
					<div className="new-tag-add-info">
						{isTagChoice ? (
							<div className="tag-type-create-plan__box">
								<div
									style={
										isTagChoice
											? {	 
													cursor: "pointer",
													backgroundColor: tagChoice.color,
											  }
											: { cursor: "pointer", backgroundColor: "black" }
									}
									className="tag-type-create-plan"></div>
								<div className="content-type-create-plan">
									{" "}
									{tagChoice.type}
								</div>
								<RiChatDeleteLine
									onClick={() => {
										setTagChoice([])
										setIsTagChoice(false)
									}}
									color="red"
									size={20}
									style={{ cursor: "pointer", marginBottom: "20px" }}
								/>
							</div>
						) : (
							<div className="add-new-tag-plan">
								<input
									onKeyUp={handleAddTag}
									value={newPlan}
									onChange={(e) => setNewPlan(e.target.value)}
									type="text"
									placeholder="Tạo tag"
									className="new-tag-input"
								/>

								<div className="new-tag-add-color">
									<div
										onClick={showcolor}
										style={{ backgroundColor: color }}
										className="new-tag-color-option"></div>
									{showcolordisplay && (
										<div className="tag-color-option">
											<div
												onClick={closeColorPicker}
												className="tag-color-option-cover"
											/>
											<ChromePicker
												color={color}
												onChange={(e) => setColor(e.hex)}
											/>
										</div>
									)}
								</div>
							</div>
						)}
					</div>
				</div>
				<div className="tag-type-create-plan-container">
					<div className="tag-type-create-plan-box-4">
						{tagPlan
							.sort((a, b) => b.id - a.id)
							.map((item) => {
								return (
									<div
										key={item.id}
										className="array-of-tag-plan">
										<div
											style={{ cursor: "pointer" }}
											onClick={() => tagChosen(item.id)}
											className="tag-type-create-plan__box">
											<div
												style={{
													backgroundColor: item.color,
												}}
												className="tag-type-create-plan"></div>
											<div className="content-type-create-plan">
												{" "}
												{item.type}
											</div>
										</div>
										<RiDeleteBack2Line
											style={{ cursor: "pointer" }}
											onClick={() => {
												handleDeleteTag(item.id)
											}}
											color="red"
										/>
										{confirmDeleteTag && (
											<div className="accept-delete-tag-container">
												<div className="accept-delete-tag-box">
													<b className="title-delete-tag__pop-up">
														Bạn có chắc chắn muốn hủy tag này?
													</b>
													<div className="tag-delete__pop-up">
														<div
															style={{
																backgroundColor: tagDelete[0].color,
															}}
															className="tag-type-create-plan"></div>
														<div className="content-type-create-plan">
															{" "}
															{tagDelete[0].type}
														</div>
													</div>
													<div className="btn-delete-tag__pop-up">
														<button
															onClick={() => {
																setConfirmDeleteTag(false)
															}}>
															Hủy
														</button>
														<button
															onClick={() => {
																deleteTag(item.id)
																setConfirmDeleteTag(false)
															}}>
															{" "}
															Xác nhận
														</button>
													</div>
												</div>
											</div>
										)}
									</div>
								)
							})}
					</div>
				</div>
			</TagContext.Provider>
		</>
	)
}

export default CreateTag
