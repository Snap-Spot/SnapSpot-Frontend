import "./styles/Font.css";
import Header from "./components/common/Header";
import ReservationDetail from "./pages/photographer/ReservationDetail";
import Reservation from "./pages/photographer/Reservation";
import MyPage from "./pages/photographer/MyPage";
import Setting from "./pages/photographer/Setting";
import Custom from "./pages/photographer/Custom";
import Review from "./pages/photographer/Review";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/photograph-mypage"
          element={
            <>
              <Header />
              <MyPage />
            </>
          }
        />
        <Route
          path="/photograph-reserve"
          element={
            <>
              <Header />
              <Reservation />
            </>
          }
        />
        <Route
          path="/photograph-reserve/:id"
          element={
            <>
              <Header />
              <ReservationDetail />
            </>
          }
        />
        <Route path="/photograph-setting" element={<Setting />} />
        <Route
          path="/photograph-custom"
          element={
            <>
              <Header />
              <Custom />
            </>
          }
        />
        <Route
          path="/photograph-review"
          element={
            <>
              <Header />
              <Review />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
