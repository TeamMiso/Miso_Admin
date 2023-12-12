import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/auth";
import Inquiry from "./pages/inquiry";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inquiry />}></Route>
          <Route path="/auth" element={<Auth />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
