import { Routes, Route } from "react-router-dom";

import Page from "@components/page/Page";

import Home from "@pages/home/Home";
import AboutUs from "@pages/about_us/AboutUs";
import Menu from "@pages/menu/Menu";
import Reservation from "@pages/reservation/Reservation";
import Ordering from "@pages/order/Ordering";
import Login from "@pages/login/Login";
import NotFound from "@pages/not_found/NotFound";

function App() {
  return (
        <Routes>
          <Route path="/" element={<Page children={<Home/>} />} />
          <Route path="/about" element={<Page children={<AboutUs />} />} />
          <Route path="/menu" element={<Page children={<Menu />} />} />
          <Route path="/reservation" element={<Page children={<Reservation />} />} />
          <Route path="/order" element={<Page children={<Ordering />} />} />
          <Route path="/login" element={<Page children={<Login />} />} />
          <Route path="*" element={<Page children={<NotFound />} />} />
        </Routes>
  );
}

export default App;
