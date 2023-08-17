import MyReservePage from "./pages/MyPage/MyReservePage";
import DetailReservePage from "./pages/MyPage/DetailReservePage";
import "./styles/Font.css";
import Header from "./components/common/Header";
import ReservationDetail from "./pages/photographer/ReservationDetail";
import Reservation from "./pages/photographer/Reservation";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Header />
      <Route path="mypage/reservation" element={<MyReservePage />} />
      <Route path="mypage/reservation/:id" element={<DetailReservePage />} />
      <Route path="/photograph-reserve" element={<Reservation />} />
      <Route path="/photograph-reserve/:id" element={<ReservationDetail />} />
    </Routes>
  );
}

export default App;
