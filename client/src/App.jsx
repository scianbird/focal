import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { Routes, Route } from "react-router";
import NotFound from "./pages/notfound";
import Home from "./pages/homepage.jsx";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/*"} element={<NotFound />} />
        <Route path={"/"} element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}
