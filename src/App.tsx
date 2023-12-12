import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/auth";
import Inquiry from "./pages/inquiry";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />}></Route>
          <Route path="/inquiry/*" element={<Inquiry />}></Route>
          <Route path="*" element={<Auth />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
