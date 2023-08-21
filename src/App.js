import MyReservePage from "./pages/MyPage/MyReservePage";
import DetailReservePage from "./pages/MyPage/DetailReservePage";
import "./styles/Font.css";
import Header from "./components/common/Header";
import ReservationDetail from "./pages/photographer/ReservationDetail";
import Reservation from "./pages/photographer/Reservation";
import SearchPage from "./pages/serach/SearchPage";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/common/Footer";
import SignUpInfoPage from "./pages/SignUpInfoPage";
import SignUpMemberPage from "./pages/SignUpMemberPage";
import Photographerlist from "./pages/serach/Photographerlist";
import UserMypage from "./pages/MyPage/UserMypage";

function App() {
  return (
    <>
      <Routes>
        <Route path="mypage" element={<UserMypage />} />
        <Route path="mypage/reservation" element={<MyReservePage />} />
        <Route path="mypage/reservation/:id" element={<DetailReservePage />} />
        {/* 회원가입 */}
        <Route path="/signup/member" element={<SignUpMemberPage />} />
        <Route path="/signup/:memberType/info" element={<SignUpInfoPage />} />
        <Route path="/photograph-reserve" element={<Reservation />} />
        <Route path="/photograph-reserve/:id" element={<ReservationDetail />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/photographer" element={<Photographerlist />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
