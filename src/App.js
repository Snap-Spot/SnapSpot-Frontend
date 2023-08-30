import MyReservePage from "./pages/MyPage/MyReservePage";
import DetailReservePage from "./pages/MyPage/DetailReservePage";
import "./styles/Font.css";
import Header from "./components/common/Header";
import ReservationDetail from "./pages/Photographer/ReservationDetail";
import Reservation from "./pages/Photographer/Reservation";
import MyPage from "./pages/Photographer/MyPage";
import Setting from "./pages/Photographer/Setting";
import Custom from "./pages/Photographer/Custom";
import Review from "./pages/Photographer/Review";
import SearchPage from "./pages/serach/SearchPage";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/common/Footer";
import SignUpInfoPage from "./pages/SignUpPage/SignUpInfoPage";
import SignUpMemberPage from "./pages/SignUpPage/SignUpMemberPage";
import Photographerlist from "./pages/serach/Photographerlist";
import LoginPage from "./pages/LoginPage/LoginPage";
import KakaoLoginPage from "./pages/LoginPage/KakaoLoginPage";
import RequestList from "./pages/Photographer/RequestList";
import ReservationList from "./pages/Photographer/ReservationList";
import Introduction from "./pages/Photographer/Introduction";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/photographer/mypage" element={<MyPage />} />
        <Route path="/photographer/reserve" element={<Reservation />} />
        <Route
          path="/photographer/reserve/:id"
          element={<ReservationDetail />}
        />
        <Route path="/photographer/setting" element={<Setting />} />
        <Route path="/photographer/custom" element={<Custom />} />
        <Route path="/photographer/review" element={<Review />} />
        <Route path="/photographer/request" element={<RequestList />} />
        <Route
          path="/photographer/reservationlist"
          element={<ReservationList />}
        />
        <Route path="photographer/introduction" element={<Introduction />} />
        <Route path="mypage/reservation" element={<MyReservePage />} />
        <Route path="mypage/reservation/:id" element={<DetailReservePage />} />
        {/* 회원가입 */}
        <Route path="/signup/member" element={<SignUpMemberPage />} />
        <Route path="/signup/:memberType/info" element={<SignUpInfoPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/auth/kakao-login" element={<KakaoLoginPage />} />

        <Route path="/search" element={<SearchPage />} />
        <Route path="/photographer" element={<Photographerlist />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
