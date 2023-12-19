import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/auth";
import Inquiry from "./pages/inquiry";
import Detail from "./pages/inquiry/detail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
          <Route path="/" element={<Inquiry />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
