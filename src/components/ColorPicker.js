import { ChromePicker } from "react-color"
import React from "react"
import { useState } from "react"
import { BiDotsHorizontalRounded } from "react-icons/bi"
import "./ColorPicker.css"
const ColorPicker = ({ color2, displayColor }) => {
	const [color, setColor] = useState("#ffffff")

	return (
		<div className="color-picker-container">
			<div className="main-color-picker">
				<ChromePicker
					color={color2}
					onChange={(displayColor) => setColor(displayColor.hex)}
				/>
			</div>
			{/* <div
				style={{ backgroundColor: color, width: "50px", height: "50px" }}></div> */}
		</div>
	)
}

export default ColorPicker
