import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CalendarPages from "./pages/CalendarPages"
import FormMakeMoneyPage from "./pages/FormMakeMoneyPage"
import BusinessPage from "./pages/BusinessPage"
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
					element={<BusinessPage />}
				/>
				<Route
					path="home"
					element={<CalendarPages />}
				/>
				<Route
					path="makemoney"
					element={<FormMakeMoneyPage />}
				/>
			</Routes>
		</>
	)
}

export default App
