import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/auth";
import Inquiry from "./pages/inquiry";
import Detail from "./pages/inquiry/detail";
import Complete from "./pages/inquiry/complete";

function App() {
  const completeLocal = "/complete/:id";

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
          <Route path="/" element={<Inquiry />}></Route>
          <Route path={completeLocal} element={<Complete />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
