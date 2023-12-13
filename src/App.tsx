import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/auth";
import Inquiry from "./pages/inquiry";
import Detail from "./pages/inquiry/detail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inquiry />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
          <Route path="/auth" element={<Auth />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
