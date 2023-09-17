import MyReservePage from "./pages/MyPage/MyReservePage";
import DetailReservePage from "./pages/MyPage/DetailReservePage";
import "./styles/Font.css";
import ReservationDetail from "./pages/Photographer/ReservationDetail";
import Reservation from "./pages/Photographer/Reservation";
import Custom from "./pages/Photographer/Custom";
import Review from "./pages/Photographer/Review";
import SearchPage from "./pages/serach/SearchPage";
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
import RequestList from "./pages/Photographer/RequestList";
import ReservationList from "./pages/Photographer/ReservationList";
import Introduction from "./pages/Photographer/Introduction";
import MainPage from "./pages/MainPage/MainPage";

import { Routes, Route } from "react-router-dom";
import KakaoSignUpPage from "./pages/SignUpPage/KakaoSignUpPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="mypage" element={<UserMypage />} />
        <Route path="/photographer/reserve" element={<Reservation />} />
        <Route
          path="/photographer/reserve/:id"
          element={<ReservationDetail />}
        />
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
        <Route path="mypage/settings" element={<SettingsPage />} />
        <Route path="mypage/hearts" element={<MyHeartsPage />} />
        <Route path="mypage/best-snap" element={<BestSnapPage />} />
        <Route path="/signup/member" element={<SignUpMemberPage />} />
        <Route path="/signup/:memberType/info" element={<SignUpInfoPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/auth/kakao-login" element={<KakaoLoginPage />} />
        <Route path="/auth/kakao-signup" element={<KakaoSignUpPage />} />

        <Route path="/search" element={<SearchPage />} />
        <Route path="/photographers" element={<Photographerlist />} />
        <Route path="/spot-list" element={<SpotListPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
