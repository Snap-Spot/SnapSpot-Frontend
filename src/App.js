import MyReservePage from "./pages/MyPage/MyReservePage";
import DetailReservePage from "./pages/MyPage/DetailReservePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="mypage/reservation" element={<MyReservePage />} />
      <Route path="mypage/reservation/:id" element={<DetailReservePage />} />
    </Routes>
  );
}

export default App;
