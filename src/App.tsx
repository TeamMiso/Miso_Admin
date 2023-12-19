import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components";
import Auth from "./pages/auth";
import Inquiry from "./pages/inquiry";
import Detail from "./pages/inquiry/detail";

function App() {
  return (
    <>
      <Header />
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
