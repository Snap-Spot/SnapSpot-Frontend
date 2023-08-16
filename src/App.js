import "./styles/Font.css";
import Header from "./components/common/Header";
import ReservationDetail from "./pages/photographer/ReservationDetail";
import Reservation from "./pages/photographer/Reservation";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/photograph-reserve" element={<Reservation />} />
        <Route path="/photograph-reserve/:id" element={<ReservationDetail />} />
      </Routes>
    </>
  );
}

export default App;
