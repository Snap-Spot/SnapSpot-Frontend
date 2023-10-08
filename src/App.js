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
import { LoadingProvider } from "./components/common/LoadingContext";
import PrivateRoute from "./components/Route/PrivateRoute";

function App() {
  return (
    <LoadingProvider>
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="/signup/member" element={<SignUpMemberPage />} />
        <Route path="/signup/:memberType/info" element={<SignUpInfoPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/auth/kakao-login" element={<KakaoLoginPage />} />
        <Route path="/auth/kakao-signup" element={<KakaoSignUpPage />} />

        <Route path="/search" element={<SearchPage />} />

        <Route path="photographers/:id" element={<Introduction />} />
        <Route path="/photographers" element={<Photographerlist />} />
        <Route path="/spot-list" element={<SpotListPage />} />

        {/* 로그인해야 접근 가능한 페이지 */}
        <Route element={<PrivateRoute />}>
          <Route path="mypage" element={<UserMypage />} />
          <Route path="mypage/reservation" element={<MyReservePage />} />
          <Route
            path="mypage/reservation/:id"
            element={<DetailReservePage />}
          />
          <Route path="mypage/settings" element={<SettingsPage />} />
          <Route path="mypage/hearts" element={<MyHeartsPage />} />
          <Route path="mypage/best-snap" element={<BestSnapPage />} />

          <Route path="/photographer/reserve" element={<Reservation />} />
          <Route
            path="/photographer/reserve/:planId"
            element={<ReservationDetail />}
          />
          <Route path="/photographer/custom" element={<Custom />} />
          <Route path="/photographer/review" element={<Review />} />
          <Route path="/photographer/request" element={<RequestList />} />
          <Route
            path="/photographer/reservationlist"
            element={<ReservationList />}
          />
        </Route>
      </Routes>
      <Footer />
    </LoadingProvider>
  );
}

export default App;
