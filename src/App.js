import "./styles/Font.css";
import Header from "./components/common/Header";
import ReservationDetail from "./pages/photographer/ReservationDetail";
import Reservation from "./pages/photographer/Reservation";
import MyPage from "./pages/photographer/MyPage";
import Setting from "./pages/photographer/Setting";
import Custom from "./pages/photographer/Custom";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/photograph-mypage" element={<MyPage />} />
        <Route path="/photograph-reserve" element={<Reservation />} />
        <Route path="/photograph-reserve/:id" element={<ReservationDetail />} />
        <Route path="/photograph-setting" element={<Setting />} />
        <Route path="/photograph-custom" element={<Custom />} />
      </Routes>
    </>
  );
}

export default App;
