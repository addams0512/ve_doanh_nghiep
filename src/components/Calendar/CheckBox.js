import React from "react"
import "./CheckBox.css"
const CheckBox = ({ id, completePlan }) => {
	return (
		<div className="checkbox-wrapper-45">
			<input
				onClick={completePlan}
				id={id}
				type="checkbox"
			/>
			<label
				className="cbx"
				htmlFor={id}>
				<div className="flip">
					<div className="front"></div>
					<div className="back">
						<svg
							width="16"
							height="14"
							viewBox="0 0 16 14">
							<path d="M2 8.5L6 12.5L14 1.5"></path>
						</svg>
					</div>
				</div>
			</label>
		</div>
	)
}

export default CheckBox
