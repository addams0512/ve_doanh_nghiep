import DoanhNghiepPage from "./pages/DoanhNghiepPage"
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CalendarPages from "./pages/CalendarPages"

function App() {
	return (
		<>
			<Routes>
				<Route
					path="/"
					element={<HomePage />}
				/>
				<Route
					path="/business"
					element={<DoanhNghiepPage />}
				/>
				<Route
					path="home"
					element={<CalendarPages />}
				/>
			</Routes>
		</>
	)
}

export default App
