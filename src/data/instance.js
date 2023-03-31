import axios from "axios"

const instance = axios.create({
	baseURL: "https://64267442556bad2a5b50064a.mockapi.io/dataYourBusiness",
	headers: { "Content-Type": "application/json" },
})

export default instance
