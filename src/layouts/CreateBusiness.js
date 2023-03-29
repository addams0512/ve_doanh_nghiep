import React from "react"
import AboutBusiness from "../components/AboutBusiness"
import Notification from "../components/Notification"
import "./CreateBusiness.css"
const CreateBusiness = () => {
	return (
		<div className="create-business-page">
			<AboutBusiness />
			<Notification />
		</div>
	)
}

export default CreateBusiness
