const express = require("express")
const app = express()
const PORT = 3000

app.get("/plan", (req, res) => {
	const plan = [
		{ id: 1, name: "quang minh", job: "front-end" },
		{ id: 2, name: "ngọc hiệp", job: "seo" },
	]
	res.json(plan)
})

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`)
})
