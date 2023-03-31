import { ChromePicker } from "react-color"
import React, { useState } from "react"
import "./ColorPicker.css"
const ColorPicker = ({ displayColor }) => {
	const [color2, setColor] = useState("fff")
	return (
		<div className="color-picker-container">
			<div className="main-color-picker">
				<ChromePicker
					color={color2}
					onChange={displayColor}
				/>
			</div>
		</div>
	)
}

export default ColorPicker
