import MyReservePage from "./pages/MyPage/MyReservePage";
import DetailReservePage from "./pages/MyPage/DetailReservePage";
import "./styles/Font.css";
import Header from "./components/common/Header";
import ReservationDetail from "./pages/photographer/ReservationDetail";
import Reservation from "./pages/photographer/Reservation";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/common/Footer";
import SignUpInfoPage from "./pages/SignUpInfoPage";
import SignUpMemberPage from "./pages/SignUpMemberPage";
import ReviewModal from "./components/Mypage-User/Modals/ReviewModal";
import ModalTemplate from "./components/Mypage-User/Modals/ModalTemplate";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="mypage/reservation" element={<MyReservePage />} />
        <Route path="mypage/reservation/:id" element={<DetailReservePage />} />
        {/* 회원가입 */}
        <Route path="/signup/member" element={<SignUpMemberPage />} />
        <Route path="/signup/:memberType/info" element={<SignUpInfoPage />} />
        <Route path="/photograph-reserve" element={<Reservation />} />
        <Route path="/photograph-reserve/:id" element={<ReservationDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
