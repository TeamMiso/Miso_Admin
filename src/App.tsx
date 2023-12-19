import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/auth";
import Inquiry from "./pages/inquiry";
import Detail from "./pages/inquiry/detail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />}></Route>
          <Route path="/inquiry/:id" element={<Detail />}></Route>
          <Route path="/inquiry" element={<Inquiry />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
