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
      </Routes>
    </>
  );
}

export default App;
