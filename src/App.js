import "./styles/Font.css";
import Header from "./components/common/Header";
import ReservationDetail from "./pages/photographer/ReservationDetail";
import Reservation from "./pages/photographer/Reservation";
import { Routes, Route } from "react-router-dom";
import SignUpInfoPage from "./pages/SignUpInfoPage";
import SignUpMemberPage from "./pages/SignUpMemberPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* 회원가입 */}
        <Route path="/signup/member" element={<SignUpMemberPage />} />
        <Route path="/signup/:memberType/info" element={<SignUpInfoPage />} />
        <Route path="/photograph-reserve" element={<Reservation />} />
        <Route path="/photograph-reserve/:id" element={<ReservationDetail />} />
      </Routes>
    </>
  );
}

export default App;
