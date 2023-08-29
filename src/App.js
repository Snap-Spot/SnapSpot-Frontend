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
import UserMypage from "./pages/MyPage/UserMypage";
import SettingsPage from "./pages/MyPage/SettingsPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import MyHeartsPage from "./pages/MyPage/MyHeartsPage";
import SpotListPage from "./pages/SpotListPage/SpotListPage";
import BestSnapPage from "./pages/MyPage/BestSnapPage";
import KakaoLoginPage from "./pages/LoginPage/KakaoLoginPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="mypage" element={<UserMypage isPhographer={false} />} />
        <Route
          path="/photographer/mypage"
          element={<UserMypage isPhographer={true} />}
        />
        <Route path="/photographer/reserve" element={<Reservation />} />
        <Route
          path="/photographer/reserve/:id"
          element={<ReservationDetail />}
        />
        <Route path="/photographer/setting" element={<Setting />} />
        <Route path="/photographer/custom" element={<Custom />} />
        <Route path="/photographer/review" element={<Review />} />
        <Route path="mypage/reservation" element={<MyReservePage />} />
        <Route path="mypage/reservation/:id" element={<DetailReservePage />} />
        <Route path="mypage/settings" element={<SettingsPage />} />
        <Route path="mypage/hearts" element={<MyHeartsPage />} />
        <Route path="mypage/best-snap" element={<BestSnapPage />} />
        {/* 회원가입 */}
        <Route path="/signup/member" element={<SignUpMemberPage />} />
        <Route path="/signup/:memberType/info" element={<SignUpInfoPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/auth/kakao-login" element={<KakaoLoginPage />} />

        <Route path="/search" element={<SearchPage />} />
        <Route path="/photographer" element={<Photographerlist />} />
        <Route path="/spot-list" element={<SpotListPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
