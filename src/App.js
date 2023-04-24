import DoanhNghiepPage from "./pages/DoanhNghiepPage";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CalendarPages from "./pages/CalendarPages";
import FormMakeMoneyPage from "./pages/FormMakeMoneyPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/business" element={<DoanhNghiepPage />} />
        <Route path="home" element={<CalendarPages />} />
        <Route path="makemoney" element={<FormMakeMoneyPage />} />
      </Routes>
    </>
  );
}

export default App;
