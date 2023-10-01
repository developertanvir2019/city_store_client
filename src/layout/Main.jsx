import { Outlet } from "react-router-dom";
import Header from "../components/shared/header/Header";
import Footer from "../components/shared/footer/Footer";

const Main = () => {
  return (
    <div style={{ backgroundColor: "#F5F6FB" }}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
